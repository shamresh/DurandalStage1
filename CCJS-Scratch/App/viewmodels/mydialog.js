define(['plugins/dialog'],function (dialog) {

    var mydialog = function (message, title, options) {
        this.message = message;
        this.title = title || MessageBox.defaultTitle;
        this.options = options || MessageBox.defaultOptions;
    };

    mydialog.prototype.selectOption = function (dialogResult) {
        dialog.close(this, dialogResult);
    };

    return mydialog;
});




