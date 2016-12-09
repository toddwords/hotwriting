var counter = 1;
var intro = true;
var introTextTyping = false;
var ilyikTimeout;
var rewind = false;
var play = false
Mousetrap.bind("space", function(){
	if(play == false){
		hideRewind();
		play = true;
		rewind = false;
		if(intro == true){
			switch(counter) {
				case 1:
					$('#intro').empty();
					playSound("TapeStart");
					setTimeout(ilyik,20750);
					typeText("On the night of August 15th, 1986, alone in his basement, Leonard K. Dowling, age 34, achieves enlightenment through his VCR", "#textHerePlz");
					break;
				case 2:
					playSound("Long");
					setTimeout(ilyik,1200);
					break;
				case 3:
					playSound("No");
					ilyik();
					counter = 0;
					intro = false;
				}
			}
		else {
				if(counter <= 11){
					playSound(counter.toString());
					ilyik();
				}
			}
		counter++;
	}
})
Mousetrap.bind("enter", function(){
	if(!introTextTyping && rewind == false){
		$('#ilyik').empty();
		showRewind();
		rewind = true;
		play = false;
		if(intro == true && counter < 3){
			playSound("RewindLong");
		} else if(counter >= 12) {
			playSound("TapeStop")
		} else{
			playSound("Rewind");
		}
}
})
var playSound = function(id) {
    $(".played").each(function(){
        this.pause();
        this.currentTime = 0
    }); 
    sound = $("#ik" + id).addClass("played")[0]
    if (sound.ended){sound.currentTime = 0};
    if (sound.currentTime > 0){
        sound.currentTime = 0
    } else {
        sound.play()
    }

}

$(document).ready(function(){
	centerDiv();
	$('.rewind')[0].onended = function(){hideRewind()}
	$('.rewind')[1].onended = function(){hideRewind()}
	$(document).click(function(){
		if(!play){Mousetrap.trigger("space")}
		else{Mousetrap.trigger("enter")}
	})
})
$(window).resize(function(){
	centerDiv();
})
function centerDiv() {
	var width = $('#textHerePlz').height() / 1.081;
	$('#textHerePlz').width(width);
}

function typeText(string, container) {
    var dest = $('#intro');
    var c = 0;
    introTextTyping = true;
    var i = setInterval(function () {
        if (c >= string.length) {
            $(dest).html(string);
            dest.fadeOut(3500, function(){dest.remove()})
            $(container).append("<h1 id='ilyik'></h1>");
            introTextTyping = false;
            clearInterval(i);

        } else {
            $('<span>').text(string[c]).
            appendTo(dest);
            c += 1;
        }
    }, 65);
};

function ilyik() {
	hideRewind();
	$('#ilyik').html("I love you")
	ilyikTimeout = setTimeout(function(){$('#ilyik').html("I love you<br>I know")},1900)

}

function showRewind(){
	clearTimeout(ilyikTimeout);
	$('#rewindDiv').show();
	$('#textHerePlz').css("background-image", "url('bgTrans.png')")
}
function hideRewind(){
	$('#rewindDiv').hide();
	$('#textHerePlz').css("background-image", "url('bg.png')")
}