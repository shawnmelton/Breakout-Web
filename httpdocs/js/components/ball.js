define(['components/field', 'components/paddle', 'components/collisionDetection'], function(Field, Paddle, CollisionDetection) {
	var Ball = function() {};
	Ball.prototype = {
		el: false,
		height: 0,
		width: 0,
		topY: 0,
		leftX: 0,
		moveStepX: false,
		moveStepY: -2,
		size: 3, // Percentage

		center: function() {
			this.setLeftX((Field.getSize().width - this.getWidth()) / 2);
			this.el.css("left", this.leftX +"px");

			this.setTopY(Field.getSize().height - 15 - Paddle.getHeight() - this.getHeight());
			this.el.css("top", this.topY +"px");
		},

		getBottomY: function() {
			return this.topY + this.height;
		},

		getCenterX: function() {
			return this.getLeftX() + (this.width / 2);
		},

		getHeight: function() {
			return this.height;
		},

		getLeftX: function() {
			return this.leftX;
		},

		getMoveStepY: function() {
			return this.moveStepY;
		},

		getRightX: function() {
			return this.leftX + this.width;
		},

		getWidth: function() {
			return this.width;
		},

		/**
		 * Initialize this object.  This should only be called once.
		 */
		init: function() {
			Field.getElement().append('<p id="ball"></p>');
			this.el = $("#ball");
			this.center();
		},

		/**
		 * When the app begins, the ball is stationary
		 */
		isMoving: function() {
			return (this.moveStepX !== false);
		},

		/**
		 * Start moving the ball.
		 */
		move: function() {
			this.setLeftX(this.leftX + this.moveStepX);
			this.el.css("left", this.leftX +"px");

			this.setTopY(this.topY + this.moveStepY);
			this.el.css("top", this.topY +"px");

			if(CollisionDetection.paddleCollisionOccurred(this)) {
				var diff = CollisionDetection.getPaddleCollisionPoint(this) - Paddle.getLeftX();
				var half = (Paddle.getRightX() - Paddle.getLeftX()) / 2;
				var distanceFromCenter = (half - diff) * -1;
				this.redirect(distanceFromCenter / half);
			}
		},

		/**
		 * Change the balls direction in which it was moving.
		 * Based on where the ball strikes will determine
		 * | 10 ======= 5 ========= 0 ======== 5 ======= 10 |
		 * @param float Percentage away from middle of the paddle.
		 */
		redirect: function(newPercentage) {
			if(newPercentage !== false) {
				this.moveStepX = (newPercentage < .2 && newPercentage > -.2) ? 0 : (8 * newPercentage);
			}

			this.moveStepY *= -1;
		},

		/**
		 * Reset the ball.
		 */
		reset: function() {
			if(this.el === false) {
				this.init();
			}

			this.setHeight();
			this.setWidth();
			this.center();
		},

		setHeight: function() {
			this.height = parseInt(Field.getSize().height * this.size * .01);
			this.el.css("height", this.height +"px");
			this.el.css("border-radius", (this.height * 5) +"px");
		},

		/**
		 * Update the left x-coordinate value.
		 * Make sure the ball cannot move out of bounds.
		 * @param Integer
		 */
		setLeftX: function(left) {
			if(left < 0) {
				left = 0;
				this.moveStepX *= -1;
			} else if((left + this.getWidth()) > Field.getSize().width) {
				left = (Field.getSize().width - this.getWidth());
				this.moveStepX *= -1;
			}

			this.leftX = left;
		},

		/**
		 * Move step is the distance the ball shifts on every move.
		 * Make it a percentage of the field size.
		 */
		setMoveStep: function() {
			this.moveStepX = 0;
		},

		/**
		 * Update the top y-coordinate value.
		 * Make sure the ball cannot move out of bounds.
		 * @param Integer
		 */
		setTopY: function(top) {
			if(top < 0) {
				top = 0;
				this.redirect(false);
			} else if((top + this.getHeight()) > Field.getSize().height) {
				top = (Field.getSize().height - this.getHeight());
				this.redirect(false);
			}

			this.topY = top;
		},

		setWidth: function() {
			this.width = parseInt(Field.getSize().height * this.size * .01);
			this.el.css("width", this.width +"px");
		},

		startMoving: function() {
			this.move();

			var _this = this;
			setInterval(function() {
				_this.move();
			}, 10);
		}
	};

	return new Ball();
});