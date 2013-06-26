define(["jquery", "tools/color"], function($, Color) {
	var Block = function(row, col, parentEl) {
		this.row = row;
		this.col = col;
		this.width = 0;
		this.height = 0;
		this.el = $("<p></p>");
		parentEl.append(this.el);
	};

	Block.prototype = {
		init: function() {
			this.setColor();
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