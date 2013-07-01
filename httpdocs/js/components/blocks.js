define(['components/field', 'components/block'], function(Field, Block){
	var Blocks = function() {};
	Blocks.prototype = {
		el: false,
		width: 0,
		height: 0,
		rowCount: 7,
		colCount: 10,
		items: [],

		build: function() {
			var total = this.rowCount * this.colCount;
			for(var i = 0; i < total; i++) {
				var block = new Block(parseInt(i / this.rowCount), parseInt(i / this.colCount), this.el);
				block.init();
				this.items.push(block);
			}
		},

		getAll: function() {
			return this.items;
		},

		getHeight: function() {
			return this.height;
		},

		getWidth: function() {
			return this.width;
		},

		init: function() {
			Field.getElement().append('<div id="blocks"></div>');
			this.el = $("#blocks");
			this.build();
		},

		reset: function() {
			if(this.el === false) {
				this.init();
			}

			this.resize();
		},

		resize: function() {
			this.height = this.el.outerHeight();
			this.width = this.el.outerWidth();

			for(var index in this.items) {
				this.items[index].setSize((this.height / this.rowCount), (this.width / this.colCount));
			}
		}
	};

	return new Blocks();
});