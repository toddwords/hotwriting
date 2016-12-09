$(document).ready(function(){
	vid = $('video')[0];
})
var vid;
var vpauseTimer;
var autoplay = false;
var counter = 1;
var textSizeNum = 100;
var displayString = "";
var lineCounter = 0;
var linesOnScreen = 0;
var lines = [];
// var mic = new p5.AudioIn();
// var level;

var txt = " I fell in love for about 5 minutes once, the car was stopped outside a burned out old mill besides what was a ski hill when it wasn't june and  Bob Dylan's 'girl from the north country' was playing which was extra right because nostalgia and because regret exactly the way that day continues to feel (it knew it was a memory before I did) and in that kiss there was love there and though i don't know it like an old friend i've seen it from a distance enough to know it up close and then I left thinking this was a thing that happened about as often as you wanted it to and that was my crime and still i remember remember me to one who lives there, she once was a true love of mine                  ***            once again i fall into                    my feminine ways         ***                 I am an antique man in a poor river town. I sleep on straw. I eat little. Besides my clothes, my only possession is a clean, tin cup. On most days, after the fieldwork, I stand on the roof of my tiny house with my cup held out toward the sky. My fellow villagers walk by with large clay pots and barrels made of driftwood and sap. They head down to the river, 'Hallo,' they sometimes say, 'Would you like us to bring you backdon some water?'  'No,' I'll say, barely glancing down from the clouds, 'I'd rather drink the rain.'                ***                         The casual daydreams of kisses executed              	by my much more skillful stunt double              standing in his long duster coat              	looking magnanimous and defiant.              I owned a secret once               	took it out for walks on weekends              before always swallowing it whole              								  in some ways              	we are like a suckling pig              		only in death do we become delicious              like anything              			only a small percentage of adjectives              		describe us at any one time and the others              	exist out of reach and invisible              like mosquitoes past the aureole of a smoky fire.              There is no artful way to write down breathing              except to say that when I see your picture              	the ocean enters me              		and in return              			I expel the flesh of my lungs into the dust              	What is it called when humans rust?                                ***            the gradient of the hill is so smooth you could be forgiven for stopping to roll down it a few times even though i am at the top and i am waiting, the clouds are gorgeous and fake-looking and today is not perfect which is important because it means other days have a better chance of being like it, there is no song, there is no song and that is ok, we only need the hill the sun and our bodies and i wish you would hold my body made of water and let it run through your fingers to the soil                i would not mind being rain          i would not mind being the air i am not afraid to die i am not afraid to die             ***                Dancing at the fountain there,               							   yes, you in your white and blue              all ribbons and perfume.              						 I was clumsy              									  but you stayed my hand              and the little boys marched on like soldiers or a marching band              and I felt your breath on my neck              and it was the ocean              and it shattered me              and if I imagined you between clicks of my mouse              	would it change the way you though about              		the twist of my brow              		the nerve damage in my lower lip              	no, you are as imperfect as I              and none of us picks what makes us                  ***              once again                i fall into                my feminine ways            ***             my friend nate says the best moment of his life is when michael jordan hit the game-winning shot in game 6 against the jazz, i don't know the best moment of my life but I suspect that it is something that has already happened hundreds of times because i love the moment when something goes from boring to more beautiful than it ever was even breathing is like this i love breathing i love breathing so much it makes me so happy some days all i want to do is breathe and drink water and look at my hands      also love is like this i think, it is cool when love goes from fun to boring to basically life sustaining  love is a place, love is a place you can go for the rest of your life                 ***                 **KSSSSHHHKKKIT***KACHIK***THIS On? Can you hear me?              The ship's sunk, it's all lost.              		Yes, yes, twas the 'whale' that did it.               	Radio room's the only thing left intact,              hermetically sealed HA! Thank you modern engineering              	for the privilege of drowning in my own breath              rather than the ocean's.              						Yes...well...              	the air's getting a bit thin and I'm not sure how long              this transmission will last              							so I better make good of it.              	Yes, tell my daughter to carve her name               		into the desk in my study,              			there's enough of my blood in there              		I might still feel it.              Tell my wife to buy a telescope and never stand              	for looking at things their proper size again.              Tell them I love them more than breath or time will allow              	and I exhale their names with every gasping breath,              ah yes, just my heart's beating now,               	yes, that's just fine...***KSSSSHHHKICH***KACHIKIT***                                ***                                              A weird silence              	with just enough noise to highlight              the general absence.              	We've each said goodbye before but never              with such obvious cinematic quality as to make              	the lack of a soundtrack so noticeable.              And still, even in our quietest moments,              	somewhere a clock is ticking.          ******             Once again I fall into my feminine ways             once again I fall into my feminine ways                   there is nothing more to say but the Todd who is singing doesn't know this yet because his eyes are closed              yes there is only one way to let him know that the piece is over                    and that is for some/all of you to sing with him                    yes that is the only way                once again i fall into my feminine ways                  don't be shy                once again I fall into my feminine ways                    once again i fall into my feminine ways                once again I fall into my feminine ways              once again i fall into my feminine ways"
Mousetrap.bind(["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "\'", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "="], function(){
	buttonPressed()
	// if(counter >= 6558){
	// 	mic.start()
	// }
}, "keyup")
Mousetrap.bind("space", function(){
	if(!autoplay){
		autoplay = setInterval(buttonPressed,50)
	} else {
		clearInterval(autoplay)
		autoplay = false;
	}
})

function buttonPressed () {
	buttonMash(txt,2);
    if(vid.paused){vid.play(); $('h1').stop(true).animate({opacity:0.75},400)}
    clearTimeout(vpauseTimer);
	if(displayString != txt.slice(1)){
    	vpauseTimer = setTimeout(function(){vid.pause(); $('h1').animate({opacity:0},3000)}, 300)
	}
}
//chunkSize = the number of characters to show on each button press
function buttonMash (sample,chunkSize){
	// if(textWidth(displayString) > windowWidth * windowHeight / textSizeNum / 1.5){
	// 	displayString = displayString.slice(lineCounter);
	// 	console.log("yo");
	// }
	displayString += (sample.substr((counter*chunkSize-1),chunkSize));
	$('h1').text(displayString);
	counter++;
	window.scrollTo(0,document.body.scrollHeight);
}

// function draw(){
// 	level = mic.getLevel() * 2.5
// 	$('h1').css('opacity', level)
// }

// function setup(){
// 	createCanvas(windowWidth, windowHeight);
// 	linesOnScreen = windowHeight/(textSizeNum + textLeading())

// }
// function draw(){
// 	background(0);
// 	fill(255);
// 	noStroke();
// 	textSize(textSizeNum)
// 	text(displayString, 0, 0, windowWidth, windowHeight)
// 	loadPixels();
// 	for (var i = 0; i < pixels.length; i+=4) {
// 	  if(pixels[i] != 0){
// 	  	pixels[i+3] = 0;
// 	  }
// 	}
// 	updatePixels();
// }

// function keyPressed(){
// 	buttonMash(txt, 2);
// 	if(textWidth(displayString) < windowWidth){
// 		lineCounter = displayString.length;

// 	}
// }

function newLine(){

}