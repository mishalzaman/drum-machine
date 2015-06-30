Synth = new function() {
	var self = this,
		chars = 'abcdefghijklmnopqrstuvwxyz',
		keyCode = [],
		curKey = 97,
		KEY_PLUS = 43,
		KEY_MINUS = 45;

	// Initializer / Constructor
	this.init = function() {
		buildKeyCodes();
	};

	// Private
	var buildKeyCodes = function() {
		var charCount = chars.length;
		var startCode = 97;

		for(var i = 0; i < charCount; i++) {

			keyCode[startCode] = chars[i];
			startCode++;
		}
	};

	// Public
	this.setCurrentKey = function(code) {
		curKey = code;
	};

	this.playSound = function() {
		var audio = new Audio('assets/' + keyCode[curKey] + '.WAV');
		audio.play();	
	};

	this.showChar = function() {
		$('.note').fadeOut();
		$('body').append('<div class="note">' + keyCode[curKey] + '</div>');
	};

	this.isLegalCharacter = function(code) {
		var character = keyCode[code];

		if(chars.indexOf(character) > -1) {
			return true;
		} 

		return false;
	};
};