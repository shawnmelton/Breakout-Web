define(['components/paddle', 'components/ball'], function(Paddle, Ball){
	var Keyboard = function() {};
	Keyboard.prototype = {
		/**
		 * Listen to keyboard directional keys to move paddle.
		 */
		addDirectionalListeners: function() {
			$(document).keydown(function(event) {
				switch(event.which) {
					case 37: Paddle.move(true); break;
					case 39: Paddle.move(false); break;
					case 32: // Space bar. 
						if(!Ball.isMoving()) {
							Ball.startMoving();
						}
						break;
				}
			});
		},

		listen: function() {
			this.addDirectionalListeners();
		}
	};

	return new Keyboard();
});