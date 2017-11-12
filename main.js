var vscode = require("vscode")
var exec = require("child_process").exec
var platform = process.platform

exports.activate = (context) => {
    context.subscriptions.push(vscode.commands.registerCommand('extension.smileopen', e => {
        if (e.path) {
            switch (platform) {
                case "darwin":
                    exec("open '" + e.fsPath + "'")
                    break
                case "win32":
                    exec("start '" + e.fsPath + "'")
                    break
                case "linux":
                    exec("xdg-open '" + e.fsPath + "'")
                    break
                default:
                    vscode.window.showInformationMessage("Not support " + platform + " !")
                    break
            }
        }
    }))
}
