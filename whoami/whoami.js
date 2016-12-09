var hasBegun = false;
Mousetrap.bind('q', function() { 
	showText("who am I?")
	playSound("audio1");
	linearCounter = 1;
})
Mousetrap.bind('w', function() { 
	showText("what's the point?")
	playSound("audio2");
	linearCounter = 2;
})
Mousetrap.bind('e', function() { 
	showText("why do I feel so alone?")
	playSound("audio3");
	linearCounter = 3;
})
Mousetrap.bind('r', function() { 
	showText("because this is life")
	playSound("audio4");
	linearCounter = 4;
})
Mousetrap.bind('t', function() { 
	showText("and livin' ain't easy")
	playSound("audio5");
	linearCounter = 5;
})
Mousetrap.bind('y', function() { 
	showEndText("but everywhere here is your home");
	$('body').css("background-color", "#ddd")
	playSound("audio6");
	linearCounter = 0;
})

Mousetrap.bind('space', function(){
	if(!hasBegun){
		playSound("audio0");
		$('#introText').fadeOut(3000)
		hasBegun = true;
	} else {
		playLinear();
	}

})
var linearArray = ["q", "w", "e", "r", "t", "y"]
var linearCounter = 0;
function playLinear() {
    Mousetrap.trigger(linearArray[linearCounter]);
}

function showText(text) {
	$("body").append("<p style='margin-left:"+randMargin()+"'>"+text+"</p>"); 
	$('body').css("background-color", "#333")
	$(window).scrollTop($(window).scrollTop() + 120)

}
function showEndText(text){
	$("body").append("<p class='good'>"+text+"</p>"); 
	$(window).scrollTop($(window).scrollTop() + 420)
}
function playSound(id){
    $(".played").each(function(){
        this.pause();
        this.currentTime = 0
    }); 
    sound = $("#" + id).addClass("played")[0]
	$("#"+id)[0].play();
}
var randMargin = function() {
	rand = Math.floor(Math.random() * 70) + 5;
	rand = rand + "%"
	return rand;

}
//in-browser editor
var editorVisible = false;
$(document).ready(function() {
	$('#butttn').click(function () {
    toggleEditorDiv();
})
   $.ajax({ 
   url : "whoami.js",
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
		$('p').remove();
		editorVisible = true;
	}
	else {
		var val = $('#editor_js').val();
   		eval(val);
    	$('#editorDiv').fadeOut();
    	editorVisible = false;
	}

}