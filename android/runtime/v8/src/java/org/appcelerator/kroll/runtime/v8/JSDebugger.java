/**
 * Appcelerator Titanium Mobile
 * Copyright (c) 2016-2017 by Appcelerator, Inc. All Rights Reserved.
 * Licensed under the terms of the Apache Public License
 * Please see the LICENSE included with this distribution for details.
 */
package org.appcelerator.kroll.runtime.v8;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.IOException;
import java.io.OutputStream;
import java.io.UnsupportedEncodingException;
import java.net.InetSocketAddress;
import java.net.ServerSocket;
import java.net.Socket;
import java.util.ArrayList;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Scanner;
import java.util.concurrent.atomic.AtomicBoolean;
import java.util.concurrent.LinkedBlockingQueue;
import java.net.InetSocketAddress;
import java.net.UnknownHostException;
import java.nio.ByteBuffer;
import java.util.Collections;

import org.java_websocket.WebSocket;
import org.java_websocket.WebSocketImpl;
import org.java_websocket.drafts.Draft;
import org.java_websocket.drafts.Draft_6455;
import org.java_websocket.framing.FrameBuilder;
import org.java_websocket.framing.Framedata;
import org.java_websocket.handshake.ClientHandshake;
import org.java_websocket.server.WebSocketServer;

import android.net.LocalSocket;
import android.os.Handler;
import android.os.Looper;

import org.appcelerator.kroll.common.Log;
import org.appcelerator.kroll.common.TiMessenger;

public final class JSDebugger
{
	private static final String TAG = "JSDebugger";

	// The line endings assumed by the debug protocol
	private static final String LINE_ENDING = "\r\n";

	// Line ending as bytes for writing out to V8MessageHandler
	private static final byte[] LINE_END_BYTES = LINE_ENDING.getBytes();

	// The message used to disconnect the debugger from V8
	private static final String DISCONNECT_MESSAGE = "{\"seq\":0,\"type\":\"request\",\"command\":\"disconnect\"}";

	// The handshake message
	// FIXME Grab the v8 version from the system!
	private static final String HANDSHAKE_MESSAGE = "Type: connect\r\nV8-Version: 5.7.492.65\r\nProtocol-Version: 1\r\nEmbedding-Host: Titanium v%s\r\nContent-Length: 0\r\n\r\n";

	// The port to listen to for debugger connections
	private final int port;

	// The sdk version we report in embedding host header for handshake message to debugger.
	private final String sdkVersion;

	// Holding place for messages received from V8 intended for debugger
	private LinkedBlockingQueue<String> v8Messages = new LinkedBlockingQueue<String>();

	// The thread which acts as the main agent for listening to debugger and V8 messages
	private InspectorAgent agentThread;

	// The runnable used to tell V8 to process the debug messages on the main thread.
	private final Runnable processDebugMessagesRunnable = new Runnable() {
		@Override
		public void run() {
			nativeProcessDebugMessages();
		}
	};
	// FIXME We had crashes due to empty debug context when we just sent messages through JNI off main thread.
	// But now we may *need* to do so and then in JNI/C++ code handle forking off a Task to fire on the foreground thread to send the message to the inspector!
	// They use an incoming and outgoing queue.
	private class DebugMessageRunnable implements Runnable {
		private final String msg;
		DebugMessageRunnable(String msg) {
			this.msg = msg;
		}

		public void run() {
			nativeSendCommand(msg);
		}
	}

	public JSDebugger(int port, String sdkVersion) {
		this.port = port;
		this.sdkVersion = sdkVersion;
	}

	/**
	 * This receives messages from V8's Debug API to be forwarded on to the attached debugger.
	 * @param message The actual JSON message received.
	 */
	public void handleMessage(String message)
	{
		v8Messages.add(message);
	}

	public void sendMessage(String message)
	{
		// Send the command to V8 via C++
		nativeSendCommand(message);
		// Tell V8 to process the message (on the runtime thread)
		TiMessenger.postOnRuntime(processDebugMessagesRunnable);
		// TiMessenger.postOnRuntime(new DebugMessageRunnable(message));
	}

	public void start() {
		try {
			this.agentThread = new InspectorAgent(this.port);
			this.agentThread.start();
		} catch (Exception e) {
			e.printStackTrace();
		}

		// Tell C++ side to hook up the debug message handler
		nativeEnable();

		// Immediately break the debugger so we can set up our breakpoints and
		// options when we connect, before the app starts running.
		// This allows us to hit breakpoints as early as the first line in app.js
		nativeDebugBreak();
	}

	/**
	 * Wipe the queued messages from V8
	 */
	private void clearMessages() {
		v8Messages.clear();
	}

	// JNI method prototypes
	private native void nativeProcessDebugMessages();
	private native void nativeEnable();
	private native void nativeDisable();
	private native void nativeDebugBreak();
	private native boolean nativeIsDebuggerActive();
	private native void nativeSendCommand(String command);

	private class InspectorAgent extends WebSocketServer {
		private int counter = 0;
		private V8MessageHandler handler;

		public InspectorAgent(int port) throws UnknownHostException {
			super(new InetSocketAddress( port ));
		}

		@Override
		public void onOpen( WebSocket conn, ClientHandshake handshake ) {
			counter++;
			Log.w(TAG, "///////////Opened connection number" + counter );
			// Start up V8MessageHandler to process responses we get
			try {
				handler = new V8MessageHandler(conn);
				new Thread(handler).start();
			} catch (Exception e) {

			}
		}

		@Override
		public void onClose( WebSocket conn, int code, String reason, boolean remote ) {
			Log.w(TAG, "closed" );
			// Kill the V8MessageHandler!
			if (handler != null) {
				handler.stop();
				handler = null;
			}
		}

		@Override
		public void onError( WebSocket conn, Exception ex ) {
			Log.w(TAG, "Error:" );
			ex.printStackTrace();
		}

		@Override
		public void onStart() {
			Log.w(TAG, "Server started!" );
		}

		@Override
		public void onMessage( WebSocket conn, String message ) {
			Log.w(TAG, "Received string message:" + message);
			// Pass along to native code
			JSDebugger.this.sendMessage(message);
		}

		@Override
		public void onMessage( WebSocket conn, ByteBuffer blob ) {
			Log.w(TAG, "Received binary message");
			// TODO How do we handle binary messages?
		}

		@Override
		public void onWebsocketMessageFragment( WebSocket conn, Framedata frame ) {
			// FrameBuilder builder = (FrameBuilder) frame;
			// builder.setTransferemasked( false );
			// conn.sendFrame( frame );

			Log.w(TAG, "Received fragmented message");
		}
	}

	private class V8MessageHandler implements Runnable
	{
		private WebSocket conn;
		private AtomicBoolean stop = new AtomicBoolean(false);

		// Dummy message used to stop the sentinel loop if it was waiting on v8Messages.take() while stop() got called.
		private static final String STOP_MESSAGE = "STOP_MESSAGE";

		public V8MessageHandler(WebSocket conn) throws IOException
		{
			this.conn = conn;
		}

		public void stop()
		{
			this.stop.set(true);
			// put dummy message into queue to unlock on take() below.
			JSDebugger.this.v8Messages.add(STOP_MESSAGE);
		}

		@Override
		public void run()
		{
			while (!stop.get())
			{
				try
				{
					String message = JSDebugger.this.v8Messages.take();
					if (message.equals(STOP_MESSAGE))
					{
						break;
					}
					Log.w(TAG, "Sending message from v8 -> debugger: " + message);

					conn.send(message);
				}
				catch (Throwable t)
				{
					// ignore
				}
			}

			this.conn.close();
		}
	}
}
