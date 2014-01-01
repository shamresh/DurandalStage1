define(['services/logger', 'services/dataservice'], function(logger, dataservice) {
        var sessions = ko.observableArray();
        var initialised = false;

        var vm = {
            activate: activate,
            sessions: sessions,
            title: 'Sessions',
            refresh : refresh
          };


        function activate() {
            logger.log('Sessions view has been activated ', null, null, true);
            if (initialised) { return; };
            initialised = true;
            return refresh();
        }
        
        function refresh() {
            dataservice.getSessionPartials(sessions);
        }
        
        return vm;
    }
);