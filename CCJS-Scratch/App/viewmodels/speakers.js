﻿define(['services/logger', 'services/dataservice', 'durandal/app', 'plugins/dialog', 'viewmodels/mydialog'],
                                              function (logger, dataservice, app, dialog, mydialog) {
        var speakers = ko.observableArray();
        var initialised = false;

        var vm = {
            activate: activate,
            speakers: speakers,
            title: 'Speakers',
            refresh: refresh,
            showDialog: showDialog
          };


        function showDialog() {
            return dialog.show(new mydialog('Are  you sure you want to add to the speakers observable?',
                                            'Adding to observable array from dialog',
                                            ['SI', 'NO'],
                                            speakers)).then(function (dialogResult) {
                //do something with the dialog result here
                return app.showMessage('return ' + dialogResult);

            });
          //  return app.showMessage('You have unsaved data. Are you sure you want to close?', 'Unsaved Data', ['Yes', 'No']);
        }

        function activate() {
            logger.log('Speakers view has been activated ', null, null, true);
            if (initialised) { return; };
            initialised = true;
            return refresh();
        }
        
        function refresh() {
           
            dataservice.getSpeakerPartials(speakers);
        }
        
        return vm;
    }
);