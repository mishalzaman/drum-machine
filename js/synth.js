Synth = new function() {
	var self = this,
		chars = 'abcdefghijklmnopqrstuvwxyz',
		keyCode = [];

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
	this.getChar = function(code) {
		if(chars.indexOf(code)) {
			return keyCode[code];
		} 

		return false;
	};

	this.showChar = function(character) {
		$('.note').fadeOut();
		$('body').append('<div class="note">' + character + '</div>');
	};
};