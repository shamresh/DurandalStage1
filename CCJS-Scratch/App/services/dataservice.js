define(['services/logger', 'durandal/system', 'services/model'], function(logger, system, model) {

    var getSpeakerPartials = function(speakersObservables) {
        speakersObservables([]);

        var options = {
            url: 'api/speakers',
            type: 'GET',
            dataType: 'json'
        };

        // as it is returning a promise, we must return this so durandal knows what to do with view etc.
        return $.ajax(options)
            .then(querySucceeded)
            .fail(queryFailed);

        function queryFailed(jqXHR, textStatus) {
            var msg = 'Error getting data. ' + textStatus;
            log(msg, jqXHR, true);
        }

        function querySucceeded(data) {
            var speakers = [];
            data.sort(sortSpeakers);
            // For each in ecmascript 5. If not using then call shims.js.
            data.forEach(function (item) {
                
                // want each object on wire to be converted into ko object with observable properties.
                // Note do not need constructor function here but used anyway.
                // Could used method on model and NOT constructor.
                var s = new model.SpeakerPartial(item);
                speakers.push(s);
            });

            // notify once.
            speakersObservables(speakers);

            log('Retrieved speakers partial from remote data service.',
                speakers,
                true);
        }
    };

    var dataservice = {
        getSpeakerPartials : getSpeakerPartials
    };
    return dataservice;

    //#region Internal methods
    
    function sortSpeakers(s1, s2) {
        return (s1.firstName + s1.lastName > s2.firstName + s2.lastName) ? 1 : -1;
    }

    function log(msg, data, showToast) {
        logger.log(msg,
                   data,
                   system.getModuleId(dataservice),
                   showToast);
    }
    //#endregion

});