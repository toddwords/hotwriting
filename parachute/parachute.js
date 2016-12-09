var lineCounter = 1;
var funcBlock = {
line1: function (){
	showText("There's been a time when I wished to see the world alone from above")
},
line2: function (){
	showText("to be a part of something I didn't deserve")
},

line3: function (){
	showText("to see the world")
},

line4: function (){
	showText("as God might have seen it as he left it behind,")
},

line5: function (){
	showText("and if you saw me,")
},
line6: function (){
	showText("looking straight at the sun")
},
line7: function (){
	showText("would you go blind")
},

line8: function (){
	showText("except for my silhouette on your iris")
},

line9: function (){
	showText("yes it would be fine for you to see me everywhere")
},

line10: function (){
	showText("to see my shape in all things")
},
line11: function (){
	showText("because this is surely the way the breeze")
},
line12: function (){
	showText("whispers your touch across all the short hairs of my body")
},

line13: function (){
	showText("every time i look at the ocean, every time.")
},

line14: function (){
	showText("<br>Fuck let me just float forever in a sea of light")
},

line15: function (){
	showText("and dissolve the ozone like an alkaseltzer")
},
line16: function (){
	showText("so when i burn alive it feels like passing in my sleep")
},
line17: function (){
	showText("and the sun in its trombone choir")
},

line18: function (){
	showText("won't it just tear up your insides with that music")
},

line19: function (){
	showText("I've been on top of mountains and gotten bored")
},

line20: function (){
	showText("and the things that mattered to me then only matter to me")
},
line21: function (){
	showText("in that i haven't been able to articulate the things that have replaced them")
},
line22: function (){
	showText("Just like Rhys said after he walked across the rockies")
},

line23: function (){
	showText("Being with people in nature")
},

line24: function (){
	showText("is greater than being with people")
},

line25: function (){
	showText("is greater than being in nature")
},
line26: function (){
	showText("<br>and this is what I think")
},
line27: function (){
	showText("as the toe of my boot touches")
},

line28: function (){
	showText("the golden strand where the")
},

line29: function (){
	showText("ocean sun horizon tie together")
},
line30: function (){
	showText("I think about this because I think")
},
line31: function (){
	showText("this is something you would have liked to see,")
},
line32: function (){
	showText("and that is why I like it,")
},

line33: function (){
	showText("it has nothing to do with me")
}
}


Mousetrap.bind("space", function(){
	playLinear();
});

function showText(text) {
	if($('#bgvid')[0].currentTime > 53){
		$('#textHerePlz').append("<h1 class='line' id='line"+lineCounter.toString()+"'>"+text+"</h1>")
		$('#line' + (lineCounter-2).toString()).flyOut(14000);
		lineCounter++;
		$('#bottom')[0].scrollIntoView(false);
	}
}
function playLinear() {
	if($('#bgvid')[0].currentTime == 0){
		$('#bgvid')[0].play();
		$('#introText').fadeOut(2000)
	} else{
		funcBlock["line"+lineCounter.toString()]()
	}
}
$(document).ready(function(){
    $('#bgvid').on('timeupdate',function(){
      if(this.currentTime > 48 && this.currentTime <= 52){
      	$('#introText').text("Press Space when poem starts")
      	$('#introText').fadeIn(1000)
      } else if(this.currentTime > 52 && this.currentTime <= 53){
      	$('#introText').fadeOut(1000)
      } else if(this.currentTime > 142){
      	$('.line').flyOut(8000);
      }
    });
    $(document).click(playLinear);
   });

$.fn.flyOut = function(t){
	this.animate({'top':'-300px', 'margin-left': '10%', opacity: 0, 'font-size': '10px'},t, function(){})
}

