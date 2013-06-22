define([], function() {
	var Color = function() {
		this.options = [];

		this.options.push("#f00");
		this.options.push("#0f0");
		this.options.push("#00f");
		this.options.push("#0ff");
		this.options.push("#f0f");
		this.options.push("#ff0");
	};

	Color.prototype = {
		get: function() {
			var index = Math.floor(Math.random() * this.options.length);
			console.log(index);
			return this.options[index];
		}
	};

	return new Color();
});