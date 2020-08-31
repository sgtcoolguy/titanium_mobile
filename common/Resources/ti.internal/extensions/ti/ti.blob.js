/**
 * Appcelerator Titanium Mobile
 * Copyright (c) 2019-Present by Axway, Inc. All Rights Reserved.
 * Licensed under the terms of the Apache Public License
 * Please see the LICENSE included with this distribution for details.
 */
/* globals OS_ANDROID */
if (OS_ANDROID) {
	const buffer = Ti.createBuffer({ value: '' });
	const blob = buffer.toBlob();
	const BlobPrototype = Object.getPrototypeOf(blob);
	// FIXME: This doesn't "stick" for iOS. Probably need to implement it natively.
	// Web Blob has an arrayBuffer() method that returns a Promise
	// https://developer.mozilla.org/en-US/docs/Web/API/Blob/arrayBuffer
	Object.defineProperty(BlobPrototype, 'arrayBuffer', {
		value: function () {
			return new Promise((resolve, reject) => {
				let buf;
				try {
					buf = this.toArrayBuffer();
				} catch (err) {
					return reject(err);
				}
				resolve(buf);
			});
		},
		enumerable: true
	});
}
