define(function () {
    toastr.options.timeOut = 4000;
    toastr.options.positionClass = 'toast-bottom-right';

    var imageSettings = {
        imageBasePath: '../content/images/photos/',
        unknownPersonImageSource: 'unknown_person.jpg'
    };
    
    var routes = [ {
        route: '',
        moduleId: 'speakers',
        title: 'speakers',
        nav: 1
    }, {
        route: 'sessions',
        moduleId: 'sessions',
        title: 'sessions',
        nav: 2
    }];


    return {
        imageSettings: imageSettings,
        routes: routes
    };
});