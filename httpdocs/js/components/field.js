define(['jquery', 'tools/bounds'], function($, Bounds) {
	var Field = function() {};
	Field.prototype = {
		el: $("body > section"),

		adjust: function() {
			this.el.css("width", (Bounds.get().width - 50) +"px");
			this.el.css("height", (Bounds.get().height - 50) +"px");
		},

		getElement: function() {
			return this.el;
		}
	};

	return new Field();
});