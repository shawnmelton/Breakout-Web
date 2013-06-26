define([], function() {
	var Color = function() {
		this.options = [];
	};

	Color.prototype = {
		generate: function() {
			for(var i = 0; i < 100; i++) {
				this.options.push({
					red: Math.floor(Math.random() * 255),
					green: Math.floor(Math.random() * 255),
					blue: Math.floor(Math.random() * 255)
				});
			}
		},

		get: function() {
			if(this.options.length == 0) {
				this.generate();
			}

			var index = Math.floor(Math.random() * this.options.length);
			return {
				light: "rgb("+ this.options[index].red +", "+ this.options[index].green +", "+ this.options[index].blue+ ")",
				dark: "rgb("+ parseInt(this.options[index].red / 2) +", "+ parseInt(this.options[index].green / 2) +", "+ parseInt(this.options[index].blue / 2) + ")"
			};
		}
	};

	return new Color();
});