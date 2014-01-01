define(['durandal/system', 'services/logger', 'plugins/router', 'config'],

    function (system, logger, router, config) {

        var shell = {
            activate: activate,
            router: router, // use for binding.
            compositionComplete : compositionComplete
        };

        return shell;

        function compositionComplete() {
            logger.log(
                'CompositionComplete event has fired',
                null, system.getModuleId(shell),
                true);
        }
        
        function activate() {
            logger.log(
                'it has started',
                null, system.getModuleId(shell),
                true);
            
            router.makeRelative({ moduleId: 'viewmodels' });
            
            router.map(config.routes);
            

            //builds an observable model from the 
            //mapping to bind your UI to
            router.buildNavigationModel();

            //sets up conventional mapping for 
            //unrecognized routes
            // router.mapUnknownRoutes();
            
            //when router is done activating it will return a promise.
            // return router.activate(config.startModule);
            // 2.0 dont need start module and return a promise.
            router.activate();
        }
    }
);