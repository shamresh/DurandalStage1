﻿define(['services/logger', 'services/dataservice'], function(logger, dataservice) {
        var speakers = ko.observableArray();
        var initialised = false;

        var vm = {
            activate: activate,
            speakers: speakers,
            title: 'Speakers',
            refresh : refresh
          };


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