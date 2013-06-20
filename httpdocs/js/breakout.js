define(['tools/bounds', 'components/field', 'components/paddle', 'components/keyboard'
], function(Bounds, Field, Paddle, Keyboard) {
	var Breakout = function() {};
	Breakout.prototype = {
		refresh: function() {
			Bounds.refresh();
			Field.adjust();
		},

		run: function() {
			this.refresh();
			Paddle.init();
			Keyboard.listen();
		}

	};

	return new Breakout();
});