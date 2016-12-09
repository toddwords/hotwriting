//variables
var allowStop = false;

//Hotkeys
Mousetrap.bind(['q','a','z','1'], function() { 
	$("html").css('background-image', 'url(EB1.jpg)'); 
	playSound("explosion1")
	if(allowStop){resetCrazyTrain()}
})
Mousetrap.bind(['w','s','x','2'], function() { 
	$("html").css('background-image', 'url(EB2.jpg)'); 
	playSound("explosion2")
	if(allowStop){resetCrazyTrain()}
})
Mousetrap.bind(['e','d','c','3'], function() { 
	$("html").css('background-image', 'url(EB3.jpg)'); 
	playSound("explosion3")
	if(allowStop){resetCrazyTrain()}
})
Mousetrap.bind(['r','f','v','4'], function() { 
	$("html").css('background-image', 'url(EB4.jpg)'); 
	playSound("explosion4")
	if(allowStop){resetCrazyTrain()}
})
Mousetrap.bind(['t','g','b','5'], function() { 
	$("html").css('background-image', 'url(XB1.jpg)'); 
	playSound("EBNormal")
})
Mousetrap.bind(['y','h','n','6'], function() { 
	$("html").css('background-image', 'url(XB2.jpg)'); 
	playSound("EBNormal")
})
Mousetrap.bind(['u','j','m','7'], function() { 
	$("html").css('background-image', 'url(XB3.jpg)'); 
	playSound("EBNormal")
})
Mousetrap.bind(['i','k',',','8'], function() { 
	$("html").css('background-image', 'url(XB4.jpg)'); 
	playSound("EBNormal")
})
Mousetrap.bind(['o','l','.','9'], function() { 
	$("html").css('background-image', 'url(XB5.jpg)'); 
	playSound("EBQuestion")
})
Mousetrap.bind(['p',';','/','0'], function() { 
	$("html").css('background-image', 'url(XB6.jpg)'); 
	playSound("EBExclamation");
})
Mousetrap.bind(['+', '-', '=', "space"], function() { 
	$("html").css('background-image', 'url(XB3.jpg)'); 
	playSound("EBNormal");
	playSound("explosion4");
	resetCrazyTrain();
})
//Functions
var playSound = function(id) {
	sound = $("#" + id)[0]
	if (sound.ended){sound.currentTime = 0};
	if (sound.currentTime > 0){
		sound.currentTime = 0
	} else {
		sound.play()
	}
}

var startCrazyTrain = function() {
	crazyTrain = $('#crazyTrain')[0];
	crazyTrain.play();
	crazyTrain.loop = true
	setTimeout(function(){allowStop = true}, 20000)
}
var resetCrazyTrain = function() {
	$('#crazyTrain')[0].pause();
	$('#crazyTrain')[0].currentTime = 0;
}
$(function() {
	var ex = $('#EBExclamation')[0];
	ex.addEventListener('ended', startCrazyTrain)
})