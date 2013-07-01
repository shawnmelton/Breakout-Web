define(["jquery", "tools/color"], function($, Color) {
	var Block = function(row, col, parentEl) {
		this.activated = true;
		this.col = col;
		this.el = $("<p></p>");
		this.height = 0;
		this.hitTolerance = 2; // How many hits can this block take before it disappears.
		this.hitCount = this.hitTolerance;  
		this.row = row;
		this.width = 0;
		parentEl.append(this.el);
	};

	Block.prototype = {
		init: function() {
			this.setColor();
		},

		isActivated: function() {
			return this.activated;
		},

		/**
		 * This block has taken a hit.
		 */
		registerHit: function() {
			if(this.hitCount > 0) {
				this.hitCount--;
				this.el.css("opacity", this.hitCount / this.hitTolerance);

				if(this.hitCount == 0) {
					this.activated = false;
				}
			}
		},

		setColor: function() {
			var clr = Color.get();
			this.el.css("background", "linear-gradient("+ clr.light +", "+ clr.dark +")");
		},

		setSize: function(height, width) {
			this.height = height;
			this.el.css("height", (this.height-2) +"px");

			this.width = width;
			this.el.css("width", (this.width-2) +"px");
		}
	};

	return Block;
});