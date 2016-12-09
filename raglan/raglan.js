 var buttonPressedYet = false
 var prevSrc = false
Mousetrap.bind('q', function() {
	showText("On Raglan Road of an autumn day")
	// playSound("1")
	playVideo('onraglanroad')
	linearCounter = 1
})

Mousetrap.bind('w', function() {
	showText("I saw her first and knew")
	playVideo('Isawherfirst_1')
	// playSound("2")
	linearCounter = 2
})

Mousetrap.bind('e', function() {
	showText("she was a fast machine, she kept her motor clean")
	playVideo('1_sexmachine')
	linearCounter = 3
})
Mousetrap.bind('r', function() {
	showText("she was the best damn woman that I ever seen")
	playVideo('2_bestdamnwoman')
	linearCounter = 4
})
Mousetrap.bind('t', function() { 
	showText("she had the sightless eyes, telling me no lies")
	playVideo('3_sightlesseyes')
	linearCounter = 5
})
Mousetrap.bind('y', function() {
	showText("knocking me out with those American thighs")
	playVideo('4_knockinmeout')
	linearCounter = 6
})
Mousetrap.bind('u', function() {
	showText("I saw the danger")
	playVideo('isawthedanger_1')
	linearCounter = 7
})
Mousetrap.bind('i', function() {
	showText("but I was already there")
	playVideo('5_alreadythere')
	linearCounter = 8
})
Mousetrap.bind('o', function() {
	showText("cause the walls start shaking")
	playVideo('6_wallsstartshakin')
	linearCounter = 9
})
Mousetrap.bind('p', function() {
	showText("the earth was quaking")
	playVideo('7_earthquakin')
	linearCounter = 10
})
Mousetrap.bind('[', function() {
	showText("and I said let grief be a fallen leaf")
	playVideo('fllenleaf_1')
	linearCounter = 11
})
Mousetrap.bind(']', function() {
	showText("and you shook me all night long")
	playVideo('8_ysmallnightlong')

	linearCounter = 12
})
Mousetrap.bind('\\', function() {
	showText("Yeah you shook me")
	playVideo('9_youshookme')
	linearCounter = 13
	
})
Mousetrap.bind('a', function() {
	showText("at the dawning of the day")
	playVideo('dawningoftheday_1')
	linearCounter = 14
	
})
Mousetrap.bind('s', function() {
	showText("On Grafton Street in November")
	playVideo('graftonStreet_1')
	linearCounter = 15
})
Mousetrap.bind('d', function() {
	showText("working double time on the seduction line")
	playVideo('10_seductionline')
	linearCounter = 16
	
})
Mousetrap.bind('f', function() {
	showText("she's one of a kind, she's just mine all mine")
	playVideo('11_oneofakind')
	linearCounter = 17
	
})
Mousetrap.bind('g', function() {
	showText("The Queen of Hearts still making tarts")
	playVideo('qoh')
	linearCounter = 18
	
})
Mousetrap.bind('h', function() {
	showText("made a meal outta me and come back for more")
	playVideo('12_madeameal')
	linearCounter = 19
	
})
Mousetrap.bind('j', function() {
	showText("Had to cool me down to take another round")
	playVideo('13_coolherdown')
	linearCounter = 20
	
})
Mousetrap.bind('k', function() {
	showText("(so) I gave her poems to say")
	playVideo('poems2say')
	linearCounter = 21
	
})
Mousetrap.bind('l', function() {
	showText("Now I'm back in the ring to take another swing")
	playVideo('14_anotherswing')
	linearCounter = 22
	
})
Mousetrap.bind(';', function() {
	showText("and I said let grief be a fallen leaf")
	playVideo('fllenleaf_1')
	linearCounter = 23
	
})
Mousetrap.bind('\'', function() {
	showText("and you shook me all night long")
	playVideo('14a_andyou2')
	linearCounter = 24
	
})
Mousetrap.bind('z', function() {
	showText("Ohhh you shook me all night long")
	playVideo('14b_Ohyou')
	linearCounter = 25
	
})
Mousetrap.bind('x', function() {
	showText("Yeah, yeah, you shook me all night long")
	playVideo('15_yeahyeahyou')
	linearCounter = 26
})
Mousetrap.bind('c', function() {
	showText("You really got me")
	playVideo('16_youreallygotme')
	linearCounter = 27
	
})
Mousetrap.bind('v', function() {
	showText("I loved too much")
	playVideo('lovedtomuch')
	linearCounter = 28
	
})
Mousetrap.bind('b', function() {
	showText("and by such by such")
	playVideo('bysuchbysuch')
	linearCounter = 29
	
})
Mousetrap.bind('n', function() {
	showText("is happiness thrown away")
	playVideo('happinessthrownaway')
	linearCounter = 30
	
})

Mousetrap.bind('m', function() {
	if(prevSrc){
		$('#'+prevSrc)[0].pause()
		$('#'+prevSrc)[0].currentTime = 0;
		$('#'+prevSrc).css('display','none')
	}
	playSound("Outro")
	linearCounter = 31

	
})

Mousetrap.bind("space", playLinear)
$(document).ready(function(){$(document).click(playLinear)})

var linearArray = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "="]
var linearCounter = 0;
function playLinear() {
    Mousetrap.trigger(linearArray[linearCounter]);
}
function showText(text) {
	if($('#introText')[0]){$('#introText').remove()}
	$('#thirdH1').text($('#secondH1').text())
	$('#secondH1').text($('#firstH1').text())
	$('#firstH1').text(text);
}

function showGif(fileName){
	$("html").css('background-image', 'url(gifs/'+fileName+'?'+Math.random().toString()+')');
	$('video').css('display','none') 
}
var playSound = function(id) {
    $(".played").each(function(){
        this.pause();
        this.currentTime = 0
    }); 
    sound = $("#raglan" + id).addClass("played")[0]
    if (sound.ended){sound.currentTime = 0};
    if (sound.currentTime > 0){
        sound.currentTime = 0
    } else {
        sound.play()
    }
    showGif("raglan"+id+".gif");
}
var playVideo = function(src){
	if(!buttonPressedYet){
		$('html').css("background-image", "url('')")
		$('#raglanIntro')[0].pause()
		buttonPressedYet = true;
	}
	if(prevSrc){
		$('#'+prevSrc)[0].currentTime = 0;
		$('#'+prevSrc)[0].pause();
		$('#'+prevSrc).css("display", "none")
	}
	$('#'+src).css("display", "block")
	$('#'+src)[0].play();
	prevSrc = src;
}
// $.preloadImages = function() {
//   for (var i = 0; i < arguments.length; i++) {
//     $("<img />").attr("src", arguments[i]);
//   }
// }
// $.preloadVideos = function() {
//   for (var i = 0; i < arguments.length; i++) {
//     $("<video></video>").attr("src", "videos/"+arguments[i]+".mp4");
//   }
// }
// $.preloadImages("gifs/raglan1.gif","gifs/raglan2.gif","gifs/raglan3.gif","gifs/raglan4.gif","gifs/raglan5.gif","gifs/raglan6.gif","gifs/raglan7.gif","gifs/raglan8.gif","gifs/raglan9.gif","gifs/raglan10.gif","gifs/raglan11.gif","gifs/raglan12.gif","gifs/raglan13.gif","gifs/raglan14.gif","gifs/raglan15.gif","gifs/raglan16.gif","gifs/raglan17.gif","gifs/raglan18.gif","gifs/raglan19.gif","gifs/raglan20.gif","gifs/raglan21.gif","gifs/raglan22.gif","gifs/raglan23.gif","gifs/raglan24.gif","gifs/raglan25.gif","gifs/raglan26.gif","gifs/raglan27.gif","gifs/raglan28.gif","gifs/raglan29.gif","gifs/raglan30.gif","gifs/raglanIntro.gif","gifs/raglanOutro.gif");