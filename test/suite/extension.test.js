const assert = require('assert');

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
const vscode = require('vscode');
const qwm_extension = require('../../extension');

suite('Extension Test Suite', () => {
	vscode.window.showInformationMessage('Start all tests.');

	test('TITEL to have Quality ', () => {
		assert.notStrictEqual(qwm_extension.TITLE,"Quality");
	});

	test('baseURL to have Quality ', () => {
		assert.notStrictEqual(qwm_extension.baseURL,"qualitywithmillan");
	});
	
});
