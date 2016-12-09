Mousetrap.bind('q', function(){
    twinkleOut('instructions')
    $('#bgvid')[0].play()
    $('#pathetique')[0].play()
    setTimeout(function(){
        twinkle("For &~", '#intro')
    }, 5000)
})
Mousetrap.bind('w', function(){
    twinkle("who first got me to write poems", '#intro')
})
Mousetrap.bind('e', function(){
    twinkle("and helped make me who I am", '#intro')
})
Mousetrap.bind('r', function(){
    $('#intro').fadeOut(14000,function(){this.remove()})
    twinkle("We Must Have Been Looking for Something", '#title')
})
Mousetrap.bind('t', function(){
    $('#title').fadeOut(14000,function(){this.remove()})
    twinkle("Five years ago", '#stanza1')
})
Mousetrap.bind('y', function(){
    twinkle("we taught each other to find the stars", '#stanza1')
})
Mousetrap.bind('u', function(){
    twinkle("without telescopes", '#stanza1')
})
Mousetrap.bind('i', function(){
    twinkle("without charts", '#stanza1')
})
Mousetrap.bind('o', function(){
    twinkle("like Tycho Brahe did", '#stanza1')
})
Mousetrap.bind('p', function(){
    $('#stanza1').fadeOut(14000,function(){this.remove()})
    twinkle("We would lie on the frozen", '#stanza2')
})
Mousetrap.bind('[', function(){
    twinkle("service lines of the", '#stanza2')
})
Mousetrap.bind(']', function(){
    twinkle("tennis courts", '#stanza2')
})
Mousetrap.bind('\\', function(){
    twinkle("knowing three constellations between us", '#stanza2')
})
Mousetrap.bind('a', function(){
    twinkle("but with enough time", '#stanza2')
})
Mousetrap.bind('s', function(){
    twinkle("to make up the rest.", '#stanza2')
})
Mousetrap.bind('d', function(){
    $('#stanza2').fadeOut(14000,function(){this.remove()})
    twinkle("The next year your girlfriend left", '#stanza3')
})
Mousetrap.bind('f', function(){
    twinkle("and you looked for her", '#stanza3')
})
Mousetrap.bind('g', function(){
    twinkle("at the tip of a needle", '#stanza3')
})
Mousetrap.bind('h', function(){
    twinkle("at the base of a spoon.", '#stanza3')
})
Mousetrap.bind('j', function(){
    twinkle("You told me you were suffering", '#stanza3')
})
Mousetrap.bind('k', function(){
    twinkle("and I looked for a smiling face in the sky,", '#stanza3')
})
Mousetrap.bind('l', function(){
    twinkle("but all I got were the same bears", '#stanza3')
})
Mousetrap.bind(';', function(){
    twinkle("and ladles, and hunters.", '#stanza3')
})
Mousetrap.bind('\'', function(){
    $('#stanza3').fadeOut(14000,function(){this.remove()})
    twinkle("You asked how I was always so damn happy.", '#stanza4')
})
Mousetrap.bind('z', function(){
    twinkle("I smiled.", '#stanza4')
})
Mousetrap.bind('x', function(){
    twinkle("There was nothing else to say.", '#stanza4')
})
Mousetrap.bind('c', function(){
    $('#stanza4').fadeOut(14000,function(){this.remove()})
    twinkle("The next year you were working", '#stanza5')
})
Mousetrap.bind('v', function(){
    twinkle("and I was learning.", '#stanza5')
})
Mousetrap.bind('b', function(){
    twinkle("I looked for pictures", '#stanza5')
})
Mousetrap.bind('n', function(){
    twinkle("in the spaces between words.", '#stanza5')
})
Mousetrap.bind('m', function(){
    $('#stanza5').fadeOut(14000,function(){this.remove()})
    twinkle("The next year it was cloudy.", '#stanza6')
})
Mousetrap.bind(',', function(){
    $('#stanza6').fadeOut(14000,function(){this.remove()})
    twinkle("This year we climbed the staircase", '#stanza7')
})
Mousetrap.bind('.', function(){
    twinkle("to the second floor of", '#stanza7')
})
Mousetrap.bind('/', function(){
    twinkle("the Chinese restaurant", '#stanza7')
})
Mousetrap.bind('1', function(){
    twinkle("and heard the Saxman", '#stanza7')
})
Mousetrap.bind('2', function(){
    twinkle("and the Hornman play.", '#stanza7')
})
Mousetrap.bind('3', function(){
    twinkle("I thought the trombone", '#stanza7')
})

Mousetrap.bind('4', function(){
    twinkle("looked a little like", '#stanza7')
})
Mousetrap.bind('5', function(){
    twinkle("a telescope.", '#stanza7')
})
Mousetrap.bind('6', function(){
    twinkle("We leaned back", '#stanza7')
})
Mousetrap.bind('7', function(){
    twinkle("with our eyes closed", '#stanza7')
})
Mousetrap.bind('8', function(){
    twinkle("and listened for the stars.", '#stanza7')
    $('#pathetique').animate({volume:0}, 16000)
})
Mousetrap.bind("space", playLinear)
$(document).ready(function(){$(document).click(playLinear)})

var lineNum = 1;

function twinkle(string, container) {
    if($(container).length == 0){$('#starsDiv').append("<div id='"+container.slice(1)+"'></div>")}
    $(container).append("<div id='line"+lineNum.toString()+"'></div>")
    var currentNum = lineNum;
    lineNum++;
    linearCounter++;
    var dest = $('#line' + currentNum.toString());
    var c = 0;
    var i = setInterval(function () {
        if (c >= string.length) {
            clearInterval(i);
            var array = $('#line' + currentNum.toString() + ' span');
            var ii = setInterval(function() {  
                if(array.length == 0){
                    clearInterval(ii)
                } else {
                    rand = Math.floor(Math.random()*array.length)
                    array.eq(rand).animate({opacity: 0}, 1000);
                    array.splice(rand, 1);
                }
            }, 400);
        } else {
            $('<span>').text(string[c]).
            appendTo(dest).hide().fadeIn(400);
            c += 1;
        }
    }, 100);
};

function twinkleOut(id){
    var array = $('#'+id+' span');
    var ii = setInterval(function() {  
        if(array.length == 0){
            clearInterval(ii)
        } else {
            rand = Math.floor(Math.random()*array.length)
            array.eq(rand).animate({opacity: 0}, 1000);
            array.splice(rand, 1);
        }
    }, 400);
}

var linearArray = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "="]
var linearCounter = 0;
function playLinear() {
    Mousetrap.trigger(linearArray[linearCounter]);
    // linearCounter++;
}