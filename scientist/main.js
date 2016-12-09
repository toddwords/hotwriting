var c;
var tint = 0;
var hasBegun = false;
var hasEnded = false;
var vid = false;
Mousetrap.bind(['q','a','z','1'], function() { 
    foley(0);
})
Mousetrap.bind(['w','s','x','2'], function() { 
    foley(1);
})
Mousetrap.bind(['e','d','c','3'], function() { 
    foley(2);
})
Mousetrap.bind(['r','f','v','4'], function() { 
    foley(3);
})
Mousetrap.bind(['t','g','b','5'], function() { 
    foley(4);
})
Mousetrap.bind(['y','h','n','6'], function() { 
    foley(5);
})
Mousetrap.bind(['u','j','m','7'], function() { 
    foley(6);
})
Mousetrap.bind(['i','k',',','8'], function() { 
    foley(7);
})
Mousetrap.bind(['o','l','.','9'], function() { 
    foley(8);
})
Mousetrap.bind(['p',';','/','0'], function() { 
    foley(9);
})
Mousetrap.bind(['-','[','\''], function() { 
    foley(10);
})
Mousetrap.bind(['=',']'], function() { 
    foley(11);
})
Mousetrap.bind('\\', function() { 
    foley(12);
})
Mousetrap.bind(['space','enter'], function(){
    foley(Math.floor(Math.random() * 13))
})
//bind same function to multiple keys

//some useful functions, we'll talk about these later
function foley(index){
    if(!vid){vid = $('#bgvid')[0]}
    if(!hasBegun && vid.currentTime == 0){startTextAndVoice()}
    if(vid.currentTime < 8){
        playSoundEl('lab', index);
    }
    if(vid.currentTime >= 8 && vid.currentTime < 11){
        $('.lab').animate({volume: 0}, 1000)
        playSoundEl('gm', index);
    }
    if(vid.currentTime >= 11 && vid.currentTime < 21){
        if($('#rain')[0].currentTime == 0){$('#rain')[0].play();}
        $('.gm').animate({volume: 0}, 1000)
        playSoundEl('rain',index)
    }
    if(vid.currentTime >= 21 && vid.currentTime < 33){
        $('#rain').animate({volume: 0}, 1000)
        if($('#wyb')[0].currentTime == 0){
            $('#wyb')[0].play()
            $('#tintDiv').css("opacity", "0.65");
        }
        else{
            tint += 10 * index;
            $('#tintDiv').css("filter", "hue-rotate("+tint.toString()+"deg)")
            $('#tintDiv').css("-webkit-filter", "hue-rotate("+tint.toString()+"deg)")
        }
    }
    if(vid.currentTime >= 33 && vid.currentTime < 44){
        tint += 3 * index;
        $('#tintDiv').css("transition", '1s')
        $('#tintDiv').css("filter", "hue-rotate("+tint.toString()+"deg)")
        $('#tintDiv').css("-webkit-filter", "hue-rotate("+tint.toString()+"deg)")
        playSoundEl('tone', index)
    }
    if(vid.currentTime >= 44 && vid.currentTime < 50){
        $('#tintDiv').css({transition: '0s', display:'none' })
        $('.tone').animate({volume: 0}, 1000)
        playSoundEl("gun", index)
    }
    if(vid.currentTime >= 50 && vid.currentTime < 56){
        $('#tintDiv').css({transition: '0s', display:'none' })
        playSoundEl("quadcopter", index)
    }
    if(vid.currentTime >= 56 && vid.currentTime < 60){
        $('.quadcopter').animate({volume: 0}, 1000)
        $('.lab').css("volume", "1.0")
        playSoundEl("lab", index)
    }
    if(vid.currentTime >= 60 || vid.currentTime == 0 && hasEnded == true){
        playSoundEl('ha', index)
    }
}
//multiple lines

function startTextAndVoice(){
    setTimeout(function(){
        $('#bgvid')[0].play();
        // typeText("I'm gonna invent an Mp3 player that stores 3 megabytes (one song), and the only thing on it is a hot track of every child in America saying good morning (lossless), and the only way to change the song is to walk a quarter of a mile in the rain to an old schoolhouse gymnasium, and when everyone shows up the device will synchronously download and play that cut of Jackson 5, I want you back that will have you check you checking your fingers for dust from the vinyl, and then you will have your little dance party with the included Tangle-Free headphones all knockin together, producing ambient harmonic tones much in the style of six angels floating through the center of the atoms of the strings of a celestial guitar, and as Michael's parting screams fade the plastic explosive in each earbud will explode, preserving the pose of your ecstatic limbs, and the players will unfold their quad-copter blades and fly from your pockets to the nearest Best Buy, to be repackaged and resold because I am a very evil scientist ha ha ha ha ha ha ha.", 57)
        // playSound("main");
    }, 4000);
    vid = $('#bgvid')[0]
    $('legend').fadeOut(1000)
    $('.lab')[0].play()
    $('.lab')[1].play()
    hasBegun = true;
}
function showText (text){
    $('#textDiv').append("<h1>"+text+"</h1>");
    //scrolls to the bottom
    $('#bottom')[0].scrollIntoView(false);

}

//single line
function showText2 (text){
    if($('#mainText').length == 0){
        $('#textDiv').append("<h1 id='mainText'>"+text+"</h1>");
    }
    else {
        $('#mainText').text(text);
    }
}
function typeText(string, speed) {
    $('#textDiv').append('<h1></h1>');
    $('#textDiv').append('<span id="bottom"></span>');
    var dest = $('h1:last')[0]; 
    var i = setInterval(function () { //basically a while loop with a delay between each iteration
        if (c >= string.length) {
            $(dest).html(string);
            clearInterval(i);
            // c = 0;
        } else {
            $('<span>').text(string[c]).
            appendTo(dest);
            c += 1;
            window.scrollTo(0,document.body.scrollHeight);
        }
    }, speed); //this is the delay in milliseconds between each character, increase to slow down, decrease to speed up
};
//all sounds at once
function playSound (id) {
    sound = $("#" + id)[0]
    if (sound.ended){sound.currentTime = 0};
    if (sound.currentTime > 0){
        sound.currentTime = 0
    } else {
        sound.play()
    }
}
//one sound at a time
var playSound2 = function(id) {
    $(".played").each(function(){
        this.pause();
        this.currentTime = 0
    }); 
    sound = $("#" + id).addClass("played")[0]
    if (sound.ended){sound.currentTime = 0};
    if (sound.currentTime > 0){
        sound.currentTime = 0
    } else {
        sound.play()
    }

}
function playSoundEl (cl, index) {
    var sound = $('.'+cl)[(100 + index) % $('.'+cl).length]
    if(cl == "wyb"){
        $('.wyb').each(function(){
            this.pause();
            this.currentTime = 0
        }); 
    }
    if (sound.ended){sound.currentTime = 0};
    if (sound.currentTime > 0){
        sound.currentTime = 0
    } else {
        sound.play()
    }
}

function setBgImage(fileName){
    $("html").css('background-image', 'url(images/'+fileName+')'); 
}
function setBgColor(color){
    $("html").css('background-color', color); 
    //image overrides color so we need to clear any background images
    $('html').css('background-image', "")
}
function setTextColor(color){
    $('html').css('color', color)
}

function speak(str){
    meSpeak.speak(str, {speed:155, amplitude:150, variant:"f5"});
}
function speakNType(str,speed){
    //meSpeak.speak(str, {speed:155, amplitude:150, variant:"f5"});
    responsiveVoice.speak(str, "Australian Female", {rate: 0.9})
    typeText(str,speed)
}

$.fn.random = function() {
  return this.eq(Math.floor(Math.random() * this.length));
}

$(document).ready(function(){
    $('#bgvid').on('ended',function(){
        hasEnded = true
    })
});