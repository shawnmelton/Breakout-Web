define(['tools/bounds', 'components/field', 'components/paddle', 'components/keyboard', 'components/ball', 'components/blocks'
], function(Bounds, Field, Paddle, Keyboard, Ball, Blocks) {
	var Breakout = function() {};
	Breakout.prototype = {
		refresh: function() {
			Bounds.refresh();
			Field.reset();
			Paddle.reset();
			Ball.reset();
			Blocks.reset();
		},

		run: function() {
			this.refresh();
			Keyboard.listen();
		}
	};

	return new Breakout();
});