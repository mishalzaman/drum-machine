Synth = new function() {
	var self = this;
	var chars = 'abcdefghijklmnopqrstuvwxyz';
	var keyCode = {};

	this.init = function() {
		console.log(1);
	};

	this.buildKeyCodes = function() {
		var charCount = chars.length;
		var startCode = 97;

		for(var i = 0; i < charCount; i++) {

			keyCode[startCode] = chars[i];
			startCode++;
		}
	};

	this.getChar = function(code) {
		if(chars.indexOf(code)) {
			return keyCode[code];
		} 

		return false;
		
	};
};

Synth.buildKeyCodes();

$(document).bind('keypress', function(e){
	var character = Synth.getChar(e.keyCode);

	if (character) {
		var audio = new Audio('assets/' + character + '.WAV');
		audio.play();		
	}
});