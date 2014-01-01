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

// Changed from below to this to try to avoid Uncaught Error: Failed to load plugin(s). Details: Load timeout for modules: plugins/router but
// did not work.
//define(['durandal/system', 'durandal/app', 'durandal/viewLocator', 'durandal/plugins/router', 'services/logger'],
//                   function (system, app, viewLocator, router, logger) {

define(function (require) {
    var system = require('durandal/system'),
        app = require('durandal/app'),
        viewLocator = require('durandal/viewLocator'),
        router = require('plugins/router'),
        logger = require('services/logger');
    
    //>>excludeStart("build", true);
    system.debug(true);
    //>>excludeEnd("build");

    //app.title = 'Durandal Starter Kit';

    // Uncaught Error: Failed to load plugin(s). Details: Load timeout for modules: plugins/router
    app.configurePlugins({
        router: true
    });

    app.start().then(function () {
        
        // router will use conventions for modules 
        // assuming viewmodels/views folder structure.
        //router.useConvention()

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