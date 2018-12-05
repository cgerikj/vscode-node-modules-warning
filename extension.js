const vscode = require('vscode');

function activate(context) {
	let activeEditor = vscode.window.activeTextEditor;
	if (activeEditor) {
		showWarningMessageIfNeeded();
    }
    
    vscode.window.onDidChangeWindowState(editor => {
        if (editor && editor.focused) {
            showWarningMessageIfNeeded();
        }
    }, null, context.subscriptions);

	vscode.window.onDidChangeActiveTextEditor(editor => {
		activeEditor = editor;
		if (editor) {
			showWarningMessageIfNeeded();
		}
	}, null, context.subscriptions);

	function showWarningMessageIfNeeded() {
        if (activeEditor.document.fileName.includes('node_modules')) {
            vscode.window.showWarningMessage('WARNING: You\'re in node_modules!');
        }
    }
}

exports.activate = activate;