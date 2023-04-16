const vscode = require('vscode');

const baseURL = "https://qualitywithmillan.github.io";
const TITLE = "Quality With Millan";

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	// This line of code will only be executed once when your extension is activated
	console.log('Welcome to ' + TITLE);

	/* HOME */
	let qwm_homePage = vscode.commands.registerCommand('qwm', function () {
		// Display a message box to the user
		vscode.window.showInformationMessage('Welocme to ' + baseURL + ' Home page 👋🏼');
		vscode.env.openExternal(vscode.Uri.parse(baseURL))
	});
	context.subscriptions.push(qwm_homePage);

	/* ABOUT */
	let qwm_about = vscode.commands.registerCommand('qwm:about', function () {
		vscode.window.showInformationMessage('ABOUT of Section of ' + TITLE + ' !');
		vscode.env.openExternal(vscode.Uri.parse(baseURL + '/about/'))
	});
	context.subscriptions.push(qwm_about);

	/* POSTS */
	let qwm_posts = vscode.commands.registerCommand('qwm:posts', function () {
		vscode.window.showInformationMessage('POSTS of Section of ' + TITLE + ' !');
		vscode.env.openExternal(vscode.Uri.parse(baseURL + '/posts/'))
	});
	context.subscriptions.push(qwm_posts);

	/* CATEGORIES */
	let qwm_categories = vscode.commands.registerCommand('qwm:categories', function () {
		vscode.window.showInformationMessage('CATEGORIES of Section of ' + TITLE + ' !');
		vscode.env.openExternal(vscode.Uri.parse(baseURL + '/categories/'))
	});
	context.subscriptions.push(qwm_categories);

	/* TAGS */
	let qwm_tags = vscode.commands.registerCommand('qwm:tags', function () {
		vscode.window.showInformationMessage('TAGS of Section of ' + TITLE + ' !');
		vscode.env.openExternal(vscode.Uri.parse(baseURL + '/tags/'))
	});
	context.subscriptions.push(qwm_tags);

	/* TOOLS */
	let qwm_tools = vscode.commands.registerCommand('qwm:tools', function () {
		vscode.window.showInformationMessage('TOOLS of Section of ' + TITLE + ' !');
		vscode.env.openExternal(vscode.Uri.parse(baseURL + '/tools/'))
	});
	context.subscriptions.push(qwm_tools);

}

// This method is called when your extension is deactivated
function deactivate() {
	vscode.window.showInformationMessage('Quality With Millan deactivated, see you soon 👋🏼');
}

module.exports = {
	activate,
	deactivate
}
