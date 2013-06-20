define(['jquery'], function($) {
	var Bounds = function() {};
	Bounds.prototype = {
		canvas: {
			height: 0,
			width: 0
		},

		get: function() {
			return this.canvas;
		},

		refresh: function() {
			this.canvas.width = $(window).width();
			this.canvas.height = $(window).height()
		}
	};

	return new Bounds();
});