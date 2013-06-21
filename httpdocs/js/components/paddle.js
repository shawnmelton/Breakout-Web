define(['jquery', 'components/field'], function($, Field){
	var Paddle = function() {};
	Paddle.prototype = {
		el: false,
		moveTimeout: false,
		moveStep: 1,
		leftX: 0,
		height: 0,
		width: 0,

		/**
		 * Center paddle in the middle of the field.
		 */
		center: function() {
			this.setLeftX((Field.getSize().width - this.getWidth()) / 2);
			this.el.css("left", this.leftX +"px");
		},

		getLeftX: function() {
			return this.leftX;
		},

		getRightX: function() {
			return this.getLeftX() + this.getWidth();
		},

		getHeight: function() {
			return this.height;
		},

		/**
		 * Should be 15 pixels from the bottom of the Field.
		 */
		getTopY: function() {
			return Field.getSize().height - (this.height + 15);
		},

		getWidth: function() {
			return this.width;
		},

		/**
		 * Initialize this paddle object.  Should only call this once.
		 */
		init: function() {
			Field.getElement().append('<p id="paddle"></p>');
			this.el = $("#paddle");
			this.center();
		},

		/**
		 * Move the paddle either left or right.
		 * @param Boolean (True: move left, False: move right)
		 */
		move: function(moveLeft) {
			var _this = this;
			this.setLeftX(moveLeft ? (this.getLeftX() - this.moveStep) : (this.getLeftX() + this.moveStep));
			this.el.css("left", this.getLeftX() +"px");
		},

		/**
		 * Reset the paddle.
		 */
		reset: function() {
			if(this.el === false) {
				this.init();
			}

			this.setHeight();
			this.setWidth();
			this.center();
			this.setMoveStep();
		},

		setHeight: function() {
			this.height = parseInt(this.el.outerHeight());
		},

		/**
		 * Update the left x-coordinate value.
		 * Make sure the paddle cannot move out of bounds.
		 * @param Integer
		 */
		setLeftX: function(left) {
			if(left < 0) {
				left = 0;
			} else if((left + this.getWidth()) > Field.getSize().width) {
				left = (Field.getSize().width - this.getWidth());
			}

			this.leftX = left;
		},

		/**
		 * Move step is the distance the paddle shifts on every move.
		 * Make it a percentage of the field size.
		 */
		setMoveStep: function() {
			this.moveStep = (Field.getSize().width * .01);
		},

		setWidth: function() {
			this.width = parseInt(this.el.outerWidth());
		}
	};

	return new Paddle();
});