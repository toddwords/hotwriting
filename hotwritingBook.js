var lastKey = ""
var pages = [
"toc",
"introduction",
"jamesbrown",
"pickupline",
"dearmom",
"whoami",
"scientist",
"alchemy",
"inthedark",
"ballmer",
"parachute",
"judy",
"stars",
"explosionbear",
"vcr",
"raglan",
"lake",
"feminineways",
"wasteland",
"credits"
]
var keyOrder = {
"toc": "Press key in { } to go to that piece, or just click with mouse",
"introduction": "No special controls",
"credits": "No special controls",
"jamesbrown": "Press Space or Key Order: q w e r t y u i o p [ ] \ a s d f g h j k l ; ' z x c v b n m , . /",
"pickupline": "Press any keys",
"dearmom": "Press any keys",
"whoami": "Key Order: q w e r t y: play multiple times like a musical instrument ",
"scientist": "Press keys throughout the piece to make sounds",
"alchemy": "Press Space or Key Order: q w e r t y u i o p [ ] \ a s d f g h j k l ; ' z x c v b n m , . / 1 2 3 4 5 6 7 8 9 0 - =",
"inthedark": "Press Space or Key Order: q w e r t y u i o p [ ] \ a s d f g h j k l ; ' z x c v b n m , . / 1 2 3 4 5 6 7 8 9 Space Space Space Space",
"ballmer": "Press any keys",
"parachute": "Press Space in time with the audio recording",
"judy": "Press any key each time you hear a 'doo' in the song",
"stars": "Press Space or Key Order: q w e r t y u i o p [ ] \ a s d f g h j k l ; ' z x c v b n m , . / 1 2 3 4 5 6 7 8",
"explosionbear": "Press any keys",
"vcr": "Alternate between Space to play and Enter to rewind",
"raglan": "Press Space or Key Order: q w e r t y u i o p [ ] \ a s d f g h j k l ; ' z x c v b n m , . /",
"lake": "Press Space or Key Order: q w e r t y u i o p [ ] \ a s d f g h j k l ; ' z",
"feminineways": "Press any keys or Space to autoplay",
"wasteland": "Press Space and enjoy"
}
var current = location.href.split("/").slice(-2,-1)[0]
var next = pages[pages.indexOf(current)+1]
var prev = pages[pages.indexOf(current)-1]
if(!next){next="toc"}
if(!prev){prev="toc"}
Mousetrap.bind("esc", function(){
	location.href = "../toc/index.html"
})
Mousetrap.bind("right", function(){
	location.href ="../" + next + "/index.html"
})
Mousetrap.bind("left",function(){
	location.href ="../" + prev + "/index.html"
})
if(current != "introduction" && current != "credits"){
	Mousetrap.bind("down",function(){
		if($('#bottomMenu').css('opacity')==0){$('#bottomMenu').animate({'opacity':'1'},800)}
		else if($('#bottomMenu').css('opacity')==1){$('#bottomMenu').animate({'opacity':'0'},800)}
	})
}

Mousetrap.bind("ctrl+q",function(){
	window.close()
})
Mousetrap.bind("ctrl+t",function(){
	location.href = "../index.html"
})
Mousetrap.bind("ctrl+r",function(){
	location.href = "./index.html"
})
Mousetrap.bind("f2",function(){
	location.href = "../console/index.html"
})
$(document).ready(function(){
	if(pages.indexOf(current) < 0){
			$('body').append("<div id='topMenu'><a class='menuLink' href='toc/index.html'>Table of Contents {Esc}</a><a class='menuLink' href='' onclick='window.close()'>Quit {Ctrl+Q}</a></div>");
			$('body').append("<div id='bottomMenu'><span class='keyOrder'>"+"You can also view controls by mousing over the bottom of the screen"+"</span></div>");

	} else {
			$('body').append("<div id='topMenu'><a class='menuLink' href='../toc/index.html'>Table of Contents {Esc}</a><a class='menuLink' href='../"+prev+"/index.html'>Previous Piece { &larr; }</a><a class='menuLink' href='../"+next+"/index.html'>Next Piece { &rarr; }</a><a class='menuLink' href='../index.html'>Title Page {Ctrl+T}</a><a class='menuLink' href='' onclick='window.close()'>Quit {Ctrl+Q}</a></div>");
			$('body').append("<div id='bottomMenu'><span class='keyOrder'>"+keyOrder[current]+"</span></div>");			
	}
	$('#topMenu').mouseenter(function(){if($(this).css('opacity')==0){$(this).animate({'opacity':'1'},800)}})
	$('#topMenu').mouseleave(function(){if($(this).css('opacity')>0){$(this).animate({'opacity':'0'},800)}})
	$('#bottomMenu').mouseenter(function(){if($(this).css('opacity')==0){$(this).animate({'opacity':'1'},800)}})
	$('#bottomMenu').mouseleave(function(){if($(this).css('opacity')>0){$(this).animate({'opacity':'0'},800)}})
	// $(document).keypress(function(event){
 //  		lastKey = String.fromCharCode(event.which); 
 //  		console.log(lastKey)
	// });
})