define(['plugins/dialog', 'services/model'], function (dialog, model) {

    var mydialog = function (message, title, options, speakers) {
        this.message = message;
        this.title = title || MessageBox.defaultTitle;
        this.options = options || MessageBox.defaultOptions;
        this.speakers = speakers;
        //this.selectOption = function (dialogResult) {
        //    dialog.close(this, dialogResult);
        // };
    };

    mydialog.prototype.selectOption = function (dialogResult) {
        if (dialogResult == 'SI') {
            var speaker = {
                id: 11,
                firstName: 'Ward',
                lastName: 'Bell',
                imageSource: 'ward_bell.jpg'
            };
            
            var s = new model.SpeakerPartial(speaker);
            this.speakers.push(s);
        }
        dialog.close(this, dialogResult);
    };

    return mydialog;
});

