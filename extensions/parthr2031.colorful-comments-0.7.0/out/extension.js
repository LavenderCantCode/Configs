"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode = require("vscode");
const parser_1 = require("./parser");
function activate(context) {
    let activeEditor;
    let parser = new parser_1.Parser();
    let updateDecorations = function (useHash = false) {
        if (!activeEditor)
            return;
        if (!parser.supportedLanguage)
            return;
        parser.FindSingleLineComments(activeEditor);
        parser.FindBlockComments(activeEditor);
        parser.FindJSDocComments(activeEditor);
        parser.ApplyDecorations(activeEditor);
    };
    if (vscode.window.activeTextEditor) {
        activeEditor = vscode.window.activeTextEditor;
        parser.SetRegex(activeEditor.document.languageId);
        triggerUpdateDecorations();
    }
    vscode.window.onDidChangeActiveTextEditor((editor) => {
        activeEditor = editor;
        if (editor) {
            parser.SetRegex(editor.document.languageId);
            triggerUpdateDecorations();
        }
    }, null, context.subscriptions);
    vscode.workspace.onDidChangeTextDocument(event => {
        if (activeEditor && event.document === activeEditor.document) {
            triggerUpdateDecorations();
        }
    }, null, context.subscriptions);
    var timeout;
    function triggerUpdateDecorations() {
        if (timeout) {
            clearTimeout(timeout);
        }
        timeout = setTimeout(updateDecorations, 200);
    }
}
exports.activate = activate;
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map