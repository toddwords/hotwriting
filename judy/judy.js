var counter = 0;
var displayString = ""
var canType = false;
var str ="Some 9time when you're sad, pic 9ture a sky 9scra 9per, <br>six 9ty 9-stor 9ies tall, 4 mil 9lion tons, <br>made of sol 9id gold, no doors or win 9dow 9frames, <br>hur 9tl 9ing through space, right towards the sun. <br><br>When the sun exp 9lodes, you take a pho 9to 9graph, <br>ev 9ery 9one you love, some 9where in 9side. <br>The last thing you see, be 9fore the mol 9ten gold, <br>fall 9ing from a 9bove melts out your eyes. <br><br>We re 9mem 9ber life, like a ka 9lei 9do 9scope: <br>ev 9ery 9thing at once, plea 9sure and pain, <br>tak 9ing off your shoes, swim in the Ev 9er 9glades, <br>loaves of so 9ur 9dough left in the rain. <br><br>As we're burned a 9live, you will be here with me <br>in the pur 9ple light, cut by the mirrors. <br>Frac 9tured hands will touch, birth 9days and fun 9er 9als, <br>un 9ab 9le to sort laugh 9ter from tears"
var stringArray = str.split(" ")
Mousetrap.bind(["space","q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "\'", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "="], function(){
	if($('#judyMusic')[0].currentTime == 0){
			$('#judyMusic')[0].play();
			$('#intro').fadeOut();
	}
	if(canType){
		var string = stringArray[counter];
		if(string[0] == "9"){
			string = string.slice(1);
		} else{
			string = " " + string;
		}
		displayString += (string);
		$('#textHerePlz').html(displayString);
		counter++;
		$('#bottom')[0].scrollIntoView(false);
	}
})
$(document).ready(function(){
	$(document).click(function(){Mousetrap.trigger("k")})
	$('#judyMusic').on('timeupdate', function(){
		var t = this.currentTime;
		if(t > 5.5 && t <= 7.15){
			$('#intro').text("Ready")
			$('#intro').fadeIn()
		} else if(t > 7.15 && t <= 8.69){
			$('#intro').text("Set")
		} else if(t > 8.69 && t <= 9.52){
			$('#intro').text("3")
		} else if(t > 9.52 && t <= 10.23){
			$('#intro').text("2")
		} else if(t > 10.23 && t <= 10.94){
			$('#intro').text("1")
		} else if(t > 10.94 && t <= 11.35){
			$('#intro').text("GO")
		} else if(t > 11.35 && t <= 12){
			$('#intro').text("GO")
			canType = true;
			$('#intro').fadeOut();
			$('#intro1').fadeOut();
		}
	})
})
