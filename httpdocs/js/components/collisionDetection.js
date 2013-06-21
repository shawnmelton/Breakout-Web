define(['components/paddle'], function(Paddle) {
	var CollisionDetection = function() {};
	CollisionDetection.prototype = {
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