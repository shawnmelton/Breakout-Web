define(['tools/bounds', 'components/field', 'components/paddle', 'components/keyboard', 'components/ball'
], function(Bounds, Field, Paddle, Keyboard, Ball) {
	var Breakout = function() {};
	Breakout.prototype = {
		refresh: function() {
			Bounds.refresh();
			Field.reset();
			Paddle.reset();
			Ball.reset();
		},

		run: function() {
			this.refresh();
			Keyboard.listen();
		}
	};

	return new Breakout();
});