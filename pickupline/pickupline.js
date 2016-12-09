//initialize string
var str = "hey girl are you tired? <br>cuz you been running through a minefield for 6 hours, Diego, the guy who was supposed to smuggle you out, already blown to bits and the choppers circling to make at least one more pass before you hit the border, but you lay low and then you do the unthinkable and throw yourself into the river, go over the falls, almost drown but make it to the other side all bedraggled and barely alive but out of there and I want to have sex with you because you are a hero to my people for what you have done . . . . . <br> <br>"
var wordArray = str.split(" ")
var counter = 0
var saxStop = 11;
var saxReturn = 85;
Mousetrap.bind(['q','a','z'], function() {
if (counter < saxStop || counter > saxReturn) {
	playSax("1");
	showNextWord()
} else {
	playSound("breathing");
	showNextWord();
	$('body').css('background-color', 'black');
	$('body').css('color', 'yellow');
	$('body').css('font-family', 'Impact, Charcoal, sans-serif')

}
})
Mousetrap.bind(['w','s','x'], function() {
	if (counter < saxStop || counter > saxReturn) {
	playSax("2");
	showNextWord()
} else {
	playSound("rain");
	showNextWord()
	$('body').css('color', 'black');
	$('body').css('background-color', 'red')
	$('body').css('font-family', 'Impact, Charcoal, sans-serif')
}
})
Mousetrap.bind(['e','d','c'], function() {
	if (counter < saxStop || counter > saxReturn) {
	playSax("3");
	showNextWord()
} else {
	playSound("thunder");
	showNextWord()
	$('body').css('color', 'yellow');
	$('body').css('background-color', 'black')
	$('body').css('font-family', 'Impact, Charcoal, sans-serif')
}
})
Mousetrap.bind(['r','f','v'], function() {
	if (counter < saxStop || counter > saxReturn) {
	playSax("4");
	showNextWord()
} else {
	playSound("heartbeat");
	showNextWord()
	$('body').css('color', 'black');
	$('body').css('background-color', 'red')
	$('body').css('font-family', 'Impact, Charcoal, sans-serif')
}
})
Mousetrap.bind(['t','g','b'], function() {
	if (counter < saxStop || counter > saxReturn) {
	playSax("5");
	showNextWord()
} else {
	playSound("footstep");
	showNextWord();
	$('body').css('color', 'red');
	$('body').css('background-color', 'black')
	$('body').css('font-family', 'Impact, Charcoal, sans-serif')
}
})
Mousetrap.bind(['y','h','n'], function() {
	if (counter < saxStop || counter > saxReturn) {
	playSax("6");
	showNextWord()
} else {
	playSound("helicopter");
	showNextWord();
	$('body').css('color', 'black');
	$('body').css('background-color', 'red');
	$('body').css('font-family', 'Impact, Charcoal, sans-serif')
}
})
Mousetrap.bind(['u','j','m'], function() {
	if (counter < saxStop || counter > saxReturn) {
	playSax("7");
	showNextWord()
} else {
	playSound("gunshot");
	showNextWord();
	$('body').css('color', 'yellow');
	$('body').css('background-color', 'black')
	$('body').css('font-family', 'Impact, Charcoal, sans-serif')
}
})
Mousetrap.bind(['i','k',','], function() {
	if (counter < saxStop || counter > saxReturn) {
	playSax("8");
	showNextWord()
} else {
	playSound("explosion");
	showNextWord()
	$('body').css('color', 'black');
	$('body').css('background-color', 'red')
	$('body').css('font-family', 'Impact, Charcoal, sans-serif')
}
})
Mousetrap.bind(['o','l','.'], function() {
	if (counter < saxStop || counter > saxReturn) {
	playSax("9");
	showNextWord()
} else {
	playSound("seashore");
	showNextWord()
	$('body').css('color', 'red');
	$('body').css('background-color', 'black')
	$('body').css('font-family', 'Impact, Charcoal, sans-serif')
}
})
Mousetrap.bind(['p',';','/'], function() {
	if (counter < saxStop || counter > saxReturn) {
	playSax("10");
	showNextWord()
} else {
	playSound("wind");
	showNextWord()
	$('body').css('color', 'black');
	$('body').css('background-color', 'red')
	$('body').css('font-family', 'Impact, Charcoal, sans-serif')
}
})
Mousetrap.bind(['[','\''], function() {
	if (counter < saxStop || counter > saxReturn) {
	playSax("11");
	showNextWord()
} else {
	playSound("gunshot");
	showNextWord()
	$('body').css('color', 'black');
	$('body').css('background-color', 'red')
	$('body').css('font-family', 'Impact, Charcoal, sans-serif')
}
})
Mousetrap.bind(']', function() {
	if (counter < saxStop || counter > saxReturn) {
	playSax("11");
	showNextWord()
} else {
	playSound("rain");
	showNextWord()
	$('body').css('color', 'black');
	$('body').css('background-color', 'red')
	$('body').css('font-family', 'Impact, Charcoal, sans-serif')
}
})
Mousetrap.bind('\\', function() {
	if (counter < saxStop || counter > saxReturn) {
	playSax("12");
	showNextWord()
} else {
	playSound("explosion");
	showNextWord()
	$('body').css('color', 'black');
	$('body').css('background-color', 'red')
	$('body').css('font-family', 'Impact, Charcoal, sans-serif')
}
})

Mousetrap.bind('enter', function() {
	$('body').css('color', 'aquamarine');
	$('body').css('background', '')
	$('body').css('background-color', 'darkviolet');
	$('body').css('font-family', 'Gill Sans MT, sans-serif');
	$('#textbox').text("");
	counter = 0;
})


var playSound = function(cl) {
	sound = $("." + cl)[0];
	sound2 = $("." + cl)[1];
	sound3 = $("." + cl)[2];
	if (sound.ended){sound.currentTime = 0};
	if (sound2.ended){sound2.currentTime = 0};
	if (sound3.ended){sound3.currentTime = 0};
	if (sound.currentTime > 0 && sound2.currentTime === 0){
		sound2.play();
		console.log("sound2")
	} else if (sound.currentTime > 0 && sound3.currentTime === 0){
		sound3.play();
		console.log("sound3")
	} else {
		sound.play()
	}
}
var playSax = function(id) {
	$('body').css('color', 'aquamarine');
	$('body').css('background-color', 'darkviolet');
	$('body').css('font-family', 'Gill Sans MT, sans-serif');
	sound = $("#sax"+id)[0]
	if (sound.ended){sound.currentTime = 0};
	if (sound.currentTime > 0){
		sound.currentTime = 0;
	} 
	sound.play()
}
var showNextWord = function() {
	if (counter > 107) {
		$('#textbox').text("");
		$('h1').remove()
		$('h4').remove()
		$('body').css("background-image", "url('clinton.gif')")
		$('body').css("background-position", "center center")
		return
	}

	$("#textbox").append(wordArray[counter] + " ");
	$("body").scrollTop($('body').height());
	return counter++
}

//in-browser editor
var editorVisible = false;
$(document).ready(function() {
	$('#butttn').click(function () {
    toggleEditorDiv();
})
   $.ajax({
   url : "pickupline.js",
   dataType: "text",
   success : function (data) {
       $("#editor_js").text(data);
          }
})
})

Mousetrap.bind('shift+space', function () {
    toggleEditorDiv();
})

function toggleEditorDiv () {
	if(editorVisible == false){
		$('#editorDiv').fadeIn();
		$('#textbox').text("");
		editorVisible = true;
	}
	else {
		var val = $('#editor_js').val();
   		eval(val);
    	$('#editorDiv').fadeOut();
    	editorVisible = false;
	}

}