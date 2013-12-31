define(['durandal/system', 'services/logger', 'durandal/plugins/router', 'config'],

    function (system, logger, router, config) {

        var shell = {
            activate: activate,
            router : router // use for binding.
        };

        return shell;

        function activate() {
            logger.log(
                'it has started',
                null, system.getModuleId(shell),
                true);

            router.map(config.routes);
            //when router is done activating it will return a promise.
            return router.activate(config.startModule);
        }
    }
);