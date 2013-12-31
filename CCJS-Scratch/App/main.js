requirejs.config({
    paths: {
        'text': '../Scripts/text',
        'durandal': '../Scripts/durandal',
        'plugins': '../Scripts/durandal/plugins',
        'transitions': '../Scripts/durandal/transitions'
    }
});

define('jquery', function() { return jQuery; });
define('knockout', ko);

define(['durandal/system', 'durandal/app', 'durandal/viewLocator', 'durandal/router', 'services/logger'],
                   function (system, app, viewLocator, router, logger) {
    //>>excludeStart("build", true);
    system.debug(true);
    //>>excludeEnd("build");

    //app.title = 'Durandal Starter Kit';

    //app.configurePlugins({
    //    router: true,
    //    dialog: true,
    //    widget: true
    //});

    app.start().then(function () {
        
        // router will use conventions for modules 
        // assuming viewmodels/views folder structure.
        router.useConvention()

        //Replace 'viewmodels' in the moduleId with 'views' to locate the view.
        //Look for partial views in a 'views' folder in the root.
        // This is used for composition.
        // Defauls viewmodels/views/views.
        viewLocator.useConvention();
        
        // override bad router behaviour to write to console log and show error toast
        // default is console window - i want in UI
        router.handleInvalidRoute = function(route, params) {
            logger.logError('No route found', route, 'main', true);
        }

        //Show the app by setting the root view model for our application with a transition.
        //app.setRoot('viewmodels/shell', 'entrance');
        app.setRoot('viewmodels/shell');
    });
});