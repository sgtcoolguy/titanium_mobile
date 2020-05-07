/*
 * Appcelerator Titanium Mobile
 * Copyright (c) 2020-Present by Appcelerator, Inc. All Rights Reserved.
 * Licensed under the terms of the Apache Public License
 * Please see the LICENSE included with this distribution for details.
 */
/* eslint-env mocha */
/* eslint no-unused-expressions: "off" */
'use strict';
const should = require('./utilities/assertions');

describe('require()', () => {
	it('can handle circular references', () => {
		const value = require('./circular.entry');
		should.exist(value);
	});
});
