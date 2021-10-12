import * as vscode from 'vscode';

export const NOT_FOUND_MESSAGE = '404 - Keybinding not found!';

export function activate(context: vscode.ExtensionContext) {

	let disposable = vscode.commands.registerCommand('404-keybinding-not-found.showNotFoundWarning', () => {
		vscode.window.showWarningMessage(NOT_FOUND_MESSAGE);
	});

	context.subscriptions.push(disposable);

	console.log('Activated 404-keybinding-not-found');
}

export function deactivate() {}
