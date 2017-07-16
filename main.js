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
                default:
                    vscode.window.showInformationMessage("没有 " + platform + " 平台的打开事件！")
                    break
            }
        }
    }))
}

exports.deactivate = () => {

}