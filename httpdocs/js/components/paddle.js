define(['jquery', 'tools/bounds', 'components/field'], function($, Bounds, Field){
	var Paddle = function() {};
	Paddle.prototype = {
		el: false,
		moveTimeout: false,
		moveStep: 5,

		center: function() {
			this.el.css("left", ((Bounds.get().width - this.getWidth()) / 2) +"px");
		},

		getLeftPos: function() {
			return parseInt(this.el.css("left").replace("px", ""));
		},

		getWidth: function() {	
			return this.el.outerWidth();
		},

		init: function() {
			Field.getElement().append('<p id="paddle"></p>');
			this.el = $("#paddle");
			this.center();
		},

		startMoving: function(left) {
			var _this = this;
			var newLeft = left ? (this.getLeftPos() - this.moveStep) : (this.getLeftPos() + this.moveStep);
			this.el.css("left", newLeft +"px");
		}
	};

	return new Paddle();
});