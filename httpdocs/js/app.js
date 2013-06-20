define(["jquery", "less", "breakout"], function($, less, Breakout){
		var resizeTimeout = false;

		var initialize = function(){
			Breakout.run();

			/**
			 * When window is resized, then refresh app.
			 */
			$(window).resize(function() {
				if(resizeTimeout !== false) {
					clearTimeout(resizeTimeout);
					resizeTimeout = false;
				}

				resizeTimeout = setTimeout(Breakout.refresh, 250);
			});
		}
	
		return {
			initialize: initialize
		};
	}
);