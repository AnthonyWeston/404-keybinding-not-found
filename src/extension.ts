import * as vscode from 'vscode';

export const NOT_FOUND_MESSAGE = '404 - Keybinding not found!';
export const MOVED_PERMANENTLY_MESSAGE = '301 Moved Permanently';
export const IM_A_TEAPOT_MESSAGE = "418 I'm a teapot";

export function activate(context: vscode.ExtensionContext) {

	const disposables = [
		vscode.commands.registerCommand('404-keybinding-not-found.showNotFoundWarning', () => {
			vscode.window.showWarningMessage(NOT_FOUND_MESSAGE);
		}),
		vscode.commands.registerCommand('404-keybinding-not-found.showMovedPermanentlyWarning', () => {
			vscode.window.showWarningMessage(MOVED_PERMANENTLY_MESSAGE);
		}),
		vscode.commands.registerCommand('404-keybinding-not-found.ImATeapot', () => {
			vscode.window.showWarningMessage(IM_A_TEAPOT_MESSAGE);
		}),
	];

	context.subscriptions.push(...disposables);

	console.log('Activated 404-keybinding-not-found');
}

export function deactivate() {}
