//Hotkeys
Mousetrap.bind(['q','t','o'], function() { 
	$("html").css('background-image', 'url(images/Ballmer1.jpg)'); 
	playSound("dev1")
})
Mousetrap.bind(['w','y','p'], function() { 
	$("html").css('background-image', 'url(images/Ballmer2.jpg)'); 
	playSound("dev2")
})
Mousetrap.bind(['e','u','['], function() { 
	$("html").css('background-image', 'url(images/Ballmer3.jpg)'); 
	playSound("dev3")
})
Mousetrap.bind(['r','i',']'], function() { 
	$("html").css('background-image', 'url(images/Ballmer4.jpg)'); 
	playSound("dev4")
})
Mousetrap.bind(['a','g','l'], function() { 
	$("html").css('background-image', 'url(images/Ballmer5.jpg)'); 
	playSound("dev5")
})
Mousetrap.bind(['s','h',';'], function() { 
	$("html").css('background-image', 'url(images/Ballmer6.jpg)'); 
	playSound("dev6")
})
Mousetrap.bind(['d','j','\''], function() { 
	$("html").css('background-image', 'url(images/Ballmer7.jpg)'); 
	playSound("dev7")
})
Mousetrap.bind(['f','k'], function() { 
	$("html").css('background-image', 'url(images/Ballmer8.jpg)'); 
	playSound("dev8")
})
Mousetrap.bind(['z','b','.'], function() { 
	$("html").css('background-image', 'url(images/Ballmer1.jpg)'); 
	playSound("dev9")
})
Mousetrap.bind(['x','n','/'], function() { 
	$("html").css('background-image', 'url(images/BC.jpg)'); 
	playSound("dev10")
})
Mousetrap.bind(['c','m'], function() { 
	$("html").css('background-image', 'url(images/Ballmer2.jpg)'); 
	playSound("dev11")
})
Mousetrap.bind(['v',','], function() { 
	$("html").css('background-image', 'url(images/Ballmer6.jpg)'); 
	playSound("dev12")
})
Mousetrap.bind('-', function() { 
	playSound("savant1")
})
Mousetrap.bind('=', function() { 
	playSound("savant2")
})
Mousetrap.bind('space', function() { 
	$('#bgvid1').fadeIn();
	$('#bgvid1')[0].play();
})
//Event listeners
$(document).ready(function(){
    $('#bgvid1').on('ended',function(){
      $('html').css("background-image","url(images/Background2.png)")
      this.remove();
      setTimeout(function(){playSound("savant1")},5000)
      setTimeout(function(){
		Mousetrap.bind(['y','k','/','['], function() { 
			$("html").css('background-image', 'url(images/Ballmer2.jpg)'); 
			playSound("yes")
		})
		Mousetrap.bind(['u','l','n',']'], function() { 
			$("html").css('background-image', 'url(images/Ballmer5.jpg)'); 
			playSound("getUp")
		})
		Mousetrap.bind(['i',';','m'], function() { 
			$("html").css('background-image', 'url(images/Ballmer4.jpg)'); 
			playSound("sitdown")
		})
		Mousetrap.bind(['h','o',',','\''], function() { 
			$("html").css('background-image', 'url(images/BC.jpg)'); 
			playSound("cmon")
		})
		Mousetrap.bind(['j','p','.'], function() { 
			$("html").css('background-image', 'url(images/Ballmer8.jpg)'); 
			playSound("giveItUp")
		})
      }, 16350)
    });
    $('#savant1').on('timeupdate',function(){
      if(this.currentTime > 42 && $('#bgvid2')[0].currentTime == 0){
		  $('#bgvid2').fadeIn();
	      $('#bgvid2')[0].play();
	  }
    });

    $('#bgvid2').on('timeupdate',function(){
      if(this.currentTime > 14 && $('#savant2')[0].currentTime == 0){
      	$('#bgvid2').fadeOut(1000);
      	playSound("savant2");
      }
    });

});



var playSound = function(id) {
	sound = $("#" + id)[0]
	if (sound.ended){sound.currentTime = 0};
	if (sound.currentTime > 0){
		sound.currentTime = 0
	} else {
		sound.play()
	}
}