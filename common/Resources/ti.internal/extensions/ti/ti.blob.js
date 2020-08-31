/**
 * Appcelerator Titanium Mobile
 * Copyright (c) 2019-Present by Axway, Inc. All Rights Reserved.
 * Licensed under the terms of the Apache Public License
 * Please see the LICENSE included with this distribution for details.
 */
const buffer = Ti.createBuffer({ value: '' });
const blob = buffer.toBlob();
// Web Blob has an arrayBuffer() method that returns a Promise
// https://developer.mozilla.org/en-US/docs/Web/API/Blob/arrayBuffer
blob.constructor.prototype.arrayBuffer = function () {
	return new Promise((resolve, reject) => {
		let buf;
		try {
			buf = this.toArrayBuffer();
		} catch (err) {
			return reject(err);
		}
		resolve(buf);
	});
};
