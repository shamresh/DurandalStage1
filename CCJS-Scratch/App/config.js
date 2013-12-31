define(function () {
    toastr.options.timeOut = 4000;
    toastr.options.positionClass = 'toast-bottom-right';

    var imageSettings = {
        imageBasePath: '../content/images/photos/',
        unknownPersonImageSource: 'unknown_person.jpg'
    };

    var routes = [{
        url: 'sessions',
        moduleId: 'viewmodels/sessions',
        name: 'sessions',
        visible: 'true'
    }, {
        url: 'speakers',
        moduleId: 'viewmodels/speakers',
        name: 'speakers',
        visible: 'true'
    }];

    var startModule = 'sessions';

    return {
        imageSettings: imageSettings,
        routes: routes,
        startModule : startModule
    };
});