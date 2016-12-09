Mousetrap.bind('q', function() {
	flicker("Yardley, PA 1997",'cl1')
})

Mousetrap.bind('w', function() {
	flicker("in the dark", "cl2")
})

Mousetrap.bind('e', function() {
	flicker("we'd see the fireflies explode", "cl3")
})
Mousetrap.bind('r', function() {
	flicker("little orange disco baubles", "cl4")
})
Mousetrap.bind('t', function() {
	flicker("making our hands sticky with light", "cl5")
})
Mousetrap.bind('y', function() {
	flicker("life used to be like that", "cl6")
})
Mousetrap.bind('u', function() {
	flicker("when you could still see the light on your hands", "cl7")
	playSound("cl7")
})
Mousetrap.bind('i', function() {
	flicker("instead of leaving it smudged behind the refrigerator", "cl8")
	playSound("cl8")
})
Mousetrap.bind('o', function() {
	flicker("fixing the fan, unplugged plugged", "cl9")
	playSound("cl9")
})
Mousetrap.bind('p', function() {
	flicker("another saturday", "cl10")
	playSound("cl10")
})
Mousetrap.bind('[', function() {
	flicker("which way to the capture the flag game?", "cl11")
	playSound("cl11")
})
Mousetrap.bind(']', function() {
	flicker("it doesn't matter it's everywhere", "cl12")
	playSound("cl12")

})
Mousetrap.bind('\\', function() {
	flicker("and the real alliances are yet to be made", "cl13")
})
Mousetrap.bind('a', function() {
	flicker("Russell used to beat on me and my brother", "cl14")
})
Mousetrap.bind('s', function() {
	flicker("tackled too hard when we played football", "cl15")
})
Mousetrap.bind('d', function() {
	flicker("in the hurricane", "cl16")
})
Mousetrap.bind('f', function() {
	flicker("he was brave though", "cl17")
})
Mousetrap.bind('g', function() {
	flicker("got us all to do things we might notta", "cl18")
})
Mousetrap.bind('h', function() {
	flicker("but that's what you get", "cl19")
})
Mousetrap.bind('j', function() {
	flicker("bravery's a neutral thing", "cl20")
})
Mousetrap.bind('k', function() {
	flicker("i love my brother i don't say it enough", "cl21")
})
Mousetrap.bind('l', function() {
	flicker("different clocks have different times but it's all ok", "cl22")
})
Mousetrap.bind(';', function() {
	flicker("can still measure the time passing", "cl23")
})
Mousetrap.bind('\'', function() {
	flicker("even if you can't see it standing still", "cl24")
})
Mousetrap.bind('z', function() {
	flicker("like an electron like that", "cl25")
})
Mousetrap.bind('x', function() {
	flicker("like light like that", "cl26")
})
Mousetrap.bind('c', function() {
	flicker("like a wave like space like", "cl27")
})
Mousetrap.bind('v', function() {
	flicker("like a place in the world where things'r beautiful and you can let 'em be", "cl28")
})
Mousetrap.bind('b', function() {
	flicker("secret secret", "cl29")
})
Mousetrap.bind('n', function() {
	flicker("give your belly a listen", "cl30")
})
Mousetrap.bind('m', function() {
	flicker("knows the good light and the cicadas", "cl31")
})
Mousetrap.bind(',', function() {
	flicker("when they come comin", "cl32")
})
Mousetrap.bind('.', function() {
	flicker("nothin so brambly you wouldn't crawl through the fence hole", "cl33")
})
Mousetrap.bind('/', function() {
	flicker("sleds in the drainage ditch", "cl34")
})
Mousetrap.bind('1', function() {
	flicker("just making your own fun", "cl35")
})
Mousetrap.bind('2', function() {
	flicker("and living in that castle", "cl36")	
})
Mousetrap.bind('3', function() {
	flicker("for the rest of your life", "cl37")
	
})
Mousetrap.bind('4', function() {
	flicker("we had a room called the 'toy room'", "cl38")
	
})
Mousetrap.bind('5', function() {
	flicker("where half my grandparents died", "cl39")
	
})
Mousetrap.bind('6', function() {
	flicker("my grandfather's ghost still haunts silver lake", "cl40")
	
})
Mousetrap.bind('7', function() {
	flicker("like a warm wind blowing", "cl41")
	
})
Mousetrap.bind('8', function() {
	flicker("on a quiet night", "cl42")
})
Mousetrap.bind('9', function() {
	flicker("Play whatever keys you like<br>including multiple at once<br>Press Space for ending", "cl1")
	ending = true;
	
})
Mousetrap.bind('0', function() {
	playRandomChord(3);
	
})
Mousetrap.bind('-', function() {
	playRandomChord(4);
	
})
// Mousetrap.bind('=', function() {
// 	playRandomChord(5);
	
// })
Mousetrap.bind('enter', function(){
	flicker("the heartbeat of yardley, pennsylvania", "clend1")
	t1 = $('#clend1')[0].duration;
	t2 = t1 + $('#clend2')[0].duration
	t3 = t2 + $('#clend3')[0].duration
	setTimeout(function(){
		flicker("is something you can only see for a moment", "clend2")
	}, t1 * 1000)
	setTimeout(function(){
		flicker("it flickers", "clend3")
	}, t2 * 1000)
	setTimeout(function(){
		endingFlurry();
	}, t3 * 1000)
})
Mousetrap.bind('shift+q', function() {
	flicker("the heartbeat of yardley, pennsylvania", "clend1")
})
Mousetrap.bind('shift+w', function() {
	flicker("is something you can only see for a moment", "clend2")
})
Mousetrap.bind('shift+e', function() {
	flicker("it flickers", "clend3")
})
Mousetrap.bind('shift+r', function() {
	flicker("and then it's gone", "clend4")
})
Mousetrap.bind('shift+t', function() {
	endingFlurry()
})
Mousetrap.bind('=', playEnding)
Mousetrap.bind('space', playLinear)
$(document).ready(function(){$(document).click(playLinear)})
//resize text
Mousetrap.bind('ctrl+shift+1', function() {
	$('style').text("h1{font-size:24px}")
})
Mousetrap.bind('ctrl+shift+2', function() {
	$('style').text("h1{font-size:30px}")
})
Mousetrap.bind('ctrl+shift+3', function() {
	$('style').text("h1{font-size:36px}")
})
Mousetrap.bind('ctrl+shift+4', function() {
	$('style').text("h1{font-size:42px}")
})
Mousetrap.bind('ctrl+shift+5', function() {
	$('style').text("h1{font-size:48px}")
})

function flicker(text, soundID) {
	if(soundID == 'cl1'){
		$('#introText').remove();
		var z = getRandomInt(1,99999).toString()
		$('body').append("<legend id='"+z+"' style='margin-left:auto; margin-right: auto; margin-top:20%'>"+text+"</legend>")
		// $('#'+z).fadeOut($('#cl1')[0].duration * 1000, function() {$(this).remove()})
	} else {
		var x = getRandomInt(0,80)
		var y = getRandomInt(0,85)
		var z = getRandomInt(1,99999).toString()
		if($('#introText')[0]){$('#introText')[0].remove()}
		if (y > 65 && x > 65) {
			x -= 10
		}
		x = x.toString() + "%"
		y = y.toString() + "%"
		$('body').append("<h1 id='"+z+"' style='left:"+x+"; top:"+y+"'>"+text+"</h1>")
	}
	var sound = $('#' + soundID)[0];
	$('#'+z).fadeOut(sound.duration * 1000, function() {$(this).remove()})
	playSound(soundID);
	linearCounter = parseInt(soundID.slice(2))
}
function flickerStart(text){

}
function flickerLong(text) {
	var x = getRandomInt(0,80)
	var y = getRandomInt(0,85)
	var z = getRandomInt(1,99999).toString()
	if (y > 65 && x > 65) {
		x -= 10
	}
	x = x.toString() + "%"
	y = y.toString() + "%"
	$('body').append("<h1 id='"+z+"' style='left:"+x+"; top:"+y+"'>"+text+"</h1>")
	$('#'+z).fadeOut(8000, function() {$(this).remove()})
}




function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

var playSound = function(id) {
    sound = $("#" + id)[0]
    if (sound.ended){sound.currentTime = 0};
    if (sound.currentTime > 0){
        sound.currentTime = 0
    } else {
        sound.play()
    }
}
var linearArray = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "1", "2", "3", "4", "5", "6", "7", "8"]
var endArray = ["shift+q", "shift+w", "shift+e", "shift+t"]
var endCounter = 0;
var ending = false;
var linearCounter = 0;
function playLinear() {
	if(ending){
		playEnding();
	} else 
{		if(linearCounter == linearArray.length){
			Mousetrap.trigger('9');
			ending = true;
			console.log("ending is being set")
		} else{
	    	Mousetrap.trigger(linearArray[linearCounter]);
		}
	}

    // linearCounter++;
}
function playEnding(){
	Mousetrap.trigger(endArray[endCounter])
	endCounter++;
}
function playRandomChord(chordSize){
	for(var i = 0; i < chordSize; i++){
		Mousetrap.trigger(linearArray[getRandomInt(0,linearArray.length)]);
	}
}

function endingFlurry(){
	for(var i = 0; i < 80; i++){
		setTimeout(function(){
			playRandomChord(1);
		}, getRandomInt(20, 75) * i)
		if(i == 79){
			setTimeout(function(){
				flicker("and then it's gone", "clend4")
			}, 75 * i)
		}
	}
}
//in-browser editor
var editorVisible = false;
$(document).ready(function() {
	$('#butttn').click(function () {
    toggleEditorDiv();
})
   $.ajax({
   url : "inthedark.js",
   dataType: "text",
   success : function (data) {
       $("#editor_js").text(data);
          }
})
   var	t1 = $('#clend1')[0].duration;
   var  t2 = t1 + $('#clend2')[0].duration
	var t3 = t2 + $('#clend3')[0].duration
})

Mousetrap.bind('shift+space', function () {
    toggleEditorDiv();
})

function toggleEditorDiv () {
	if(editorVisible == false){
		$('#editorDiv').fadeIn();
		editorVisible = true;
	}
	else {
		var val = $('#editor_js').val();
   		eval(val);
    	$('#editorDiv').fadeOut();
    	editorVisible = false;
	}

}