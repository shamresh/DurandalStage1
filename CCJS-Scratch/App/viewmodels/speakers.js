define(['services/logger', 'services/dataservice'], function(logger, dataservice) {
        var speakers = ko.observableArray();
        var initialised = false;

        var vm = {
            activate: activate,
            speakers: speakers,
            title: 'Speakers',
            refresh : refresh
          };


        function activate() {
            if (initialised) { return; };
            initialised = true;
            return refresh();
        }
        
        function refresh() {
            logger.log('something wrong ' +  dataservice, null, true);
            dataservice.getSpeakerPartials(speakers);
        }
        
        return vm;
    }
);