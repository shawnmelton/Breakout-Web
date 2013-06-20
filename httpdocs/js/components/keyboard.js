define(['components/paddle'], function(Paddle){
	var Keyboard = function() {};
	Keyboard.prototype = {
		/**
		 * Listen to keyboard directional keys to move paddle.
		 */
		addDirectionalListeners: function() {
			$(document).keydown(function(event) {
				console.log(event.which);
				switch(event.which) {
					case 37: Paddle.startMoving(true); break;
					case 39: Paddle.startMoving(false); break;
				}
			});
		},

		listen: function() {
			this.addDirectionalListeners();
		}

	};

	return new Keyboard();
});