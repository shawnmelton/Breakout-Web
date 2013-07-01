define(['components/paddle', 'components/blocks'], function(Paddle, Blocks) {
	var CollisionDetection = function() {};
	CollisionDetection.prototype = {
		blockCollisionOccurred: function(Ball) {
			var blocks = Blocks.getAll();
			for(var index in blocks) {
				if(blocks[index].isActivated()) {
					block.registerHit();
					return true;
				}
			}

			return false;
		},

		/**
		 * 
		 * @return Integer (X coordinate)
		 */
		getPaddleCollisionPoint: function(Ball) {
			if(Ball.getCenterX() <= Paddle.getLeftX()) {
				return Paddle.getLeftX();
			}

			if(Ball.getCenterX() >= Paddle.getRightX()) {
				return Paddle.getRightX();
			}

			return Ball.getCenterX();
		},

		/**
		 * Has a collision occurred? Have the ball and paddle collided?
		 * @return Boolean
		 */
		paddleCollisionOccurred: function(Ball) {
			return ((Ball.getBottomY() <= Paddle.getTopY() && Ball.getBottomY() >= (Paddle.getTopY() - Ball.getMoveStepY())) && ((Ball.getLeftX() <= Paddle.getRightX() && Ball.getLeftX() >= Paddle.getLeftX()) || (Ball.getRightX() <= Paddle.getRightX() && Ball.getRightX() >= Paddle.getLeftX())));
		}
	};

	return new CollisionDetection();
});