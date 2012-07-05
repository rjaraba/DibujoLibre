App.Events = (function(lng, app, undefined) {

	
	// al pulsar sobre lateral
    lng.dom('#lateral').tap(function(event) {
        alert ('pulsacion');
    });


    return {
		alerta:alerta
    }

})(LUNGO, App);