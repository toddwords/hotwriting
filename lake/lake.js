Mousetrap.bind("q", function() {
	fade("think about the thing");
})
Mousetrap.bind("w", function() {
	fade("that you want most in life");
})
Mousetrap.bind("e", function() {
	fade("right at this moment");
})
Mousetrap.bind("r", function() {
	fade("and think about getting it");
})
Mousetrap.bind("t", function() {
	fade("almost in your grasp");
})
Mousetrap.bind("y", function() {
	fade("until someone takes it away from you");
})
Mousetrap.bind("u", function() {
	fade("by not playing by the rules");
})
Mousetrap.bind("i", function() {
	fade("by cheating");
})
Mousetrap.bind("o", function() {
	fade("taking what they don't deserve");
})
Mousetrap.bind("p", function() {
	fade("imagine that feeling");
})
Mousetrap.bind("[", function() {
	fade("and imagine that feeling");
})
Mousetrap.bind("]", function() {
	fade("fading");
})
Mousetrap.bind("\\", function() {
	fade("over the years");
})
Mousetrap.bind("a", function() {
	fade("until you are rowing a boat");
})
Mousetrap.bind("s", function() {
	fade("on a quiet lake");
})
Mousetrap.bind("d", function() {
	fade("with your daughter");
})
Mousetrap.bind("f", function() {
	fade("and you see something glinting");
})
Mousetrap.bind("g", function() {
	fade("on the shore");
})
Mousetrap.bind("h", function() {
	fade("and you both stand up to look at it");
})
Mousetrap.bind("j", function() {
	fade("and the boat almost topples");
})
Mousetrap.bind("k", function() {
	fade("but doesn't");
})
Mousetrap.bind("l", function() {
	fade("and it's just an old horseshoe");
})
Mousetrap.bind(";", function() {
	fade("washed up by the rain");
})
Mousetrap.bind("\'", function() {
	fade("that's all");
})
Mousetrap.bind("z", function() {
	fade("but that's a story you'll tell");
})
Mousetrap.bind("x", function() {
	fade("");
})
Mousetrap.bind("space", playLinear)

$(document).ready(function(){$(document).click(playLinear)})

function fade(text) {
    linearCounter++;
	$('#textBox').animate({
		top:"+=25",
		opacity: "toggle",
	}, 600, function(){
		$('#textBox').text(text);
		$('#textBox').animate({
			top:"-=25",
			opacity: "toggle",
		})
	})
	// $('#textBox').fadeToggle(400, function(){$('#textBox').text(text).fadeToggle()});
}

var linearArray = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "="]
var linearCounter = 0;
function playLinear() {
    Mousetrap.trigger(linearArray[linearCounter]);
    // linearCounter++;
}
