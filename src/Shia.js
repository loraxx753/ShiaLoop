var Shia = (function() {

	var count = 0;
	var audio = "assets/doit_sound.mp3";
	var image = "assets/shia.png";

	// How many loops before the biggun?
	var loopLength = 20;

	/**
	 * Adds a Shia to the board
	 */
	function add() {
		var doItSound = new Audio();
		doItSound.src = Shia.audio;
		doItSound.volume = 0.3;
		var shia = new Image();
		shia.src = Shia.image;

		var properties = getCss();
		$(shia).css(properties);
		$("body").append(shia);
		// If it's the last one, crank that baby up.
		if(count > Shia.loopLength) {
			doItSound.volume = 1.0;
			$(shia).slideDown("slow", function() {
				doItSound.play();
			});
		}
		else {
			doItSound.play();
		}
		
	}

	/**
	 * Gets a random css block
	 * @return {object} The CSS added to Shia
	 */
	function getCss() {
		var rand = Math.random() * (70 - 1) + 1;
		// Defaults
		var properties = {
			"position": "fixed",
			"z-index": 10000
		}
		// If it's less than 5 counts, then it goes on the bottom
		if(count < 5) {
			properties.bottom = 0; 
			properties.right = rand+"%";
		}
		// If it's the last one it goes on the bottom 
		else if(count > Shia.loopLength) {
			properties.bottom = 0;
			properties.right = $(window).width()/20;
			properties.width = "100%";
			properties.height = "100%";
			properties.display = "none";

		}
		// If it's more than five, it's got a 3 in 4 chance of going somewhere else
		else {
			var coinFlip = Math.floor(Math.random() * (4 - 1) + 1);
			console.log(coinFlip);
			if(coinFlip == 1) {
				properties.transform = "rotate(90deg)";
				properties.top  = rand+"%";
				properties.left = 0;
			}
			else if(coinFlip == 2) {
				properties.transform = "rotate(180deg)";
				properties.top = 0;
				properties.right = rand+"%";
			}
			else if(coinFlip == 3) {
				properties.transform = "rotate(-90deg)";
				properties.top = rand+"%";
				properties.right = 0;
			}
			else {
				properties.bottom = 0; 
				properties.right = rand+"%";
			}
		}


		return properties;
	}

	/**
	 * Loop that mo-fo
	 * @param  {int} timeout How many seconds to start with
	 */
	function loop(timeout) {
		if(timeout > 100) {
			timeout -= 100;
		} else {
			timeout -= 10;
		}
		count++;
		if(count > Shia.loopLength) { 
			setTimeout(add, 700);
			return; 
		}
		add();
		setTimeout(function() { loop(timeout) }, timeout);

	}

	return {
		"audio" : audio,
		"image" : image,
		"loop" : loop,
		"loopLength" : loopLength
	}
})();