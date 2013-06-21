define(['jquery', 'tools/bounds'], function($, Bounds) {
	var Field = function() {};
	Field.prototype = {
		el: $("body > section"),
		height: 0,
		width: 0,

		getElement: function() {
			return this.el;
		},

		getSize: function() {
			return {
				width: this.width,
				height: this.height
			};
		},

		/**
		 * Reset the field.  We are assuming that the bounds have changed.
		 */
		reset: function() {
			this.width = Bounds.get().width - 50;
			this.height = Bounds.get().height - 50;

			this.el.css("width", this.width +"px");
			this.el.css("height", this.height +"px");
		}
	};

	return new Field();
});