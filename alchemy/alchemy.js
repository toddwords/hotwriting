var lineNum = 1;
var twoTracks = false; 
var $chant;
var begin = false
writeSound = $('#writeSound')[0];
Mousetrap.bind("q", function(){
    if(begin == false){
        newPaper("They have compared the 'prima materia' to everything")
        playSound("1");
        $chant = $('#chant')
        $chant[0].volume = 0;
        $chant[0].play();
        $chant.animate({volume: 0.30}, 1000)
        begin = true;
    } else{
        write("They have compared the 'prima materia' to everything")
        playSound("1");
    }
})
Mousetrap.bind("w", function(){
    write("to male and female")
    playSound("2")
})
Mousetrap.bind("e", function(){
    write("to the hermaphroditic monster,")
    playSound("3")
})
Mousetrap.bind("r", function(){
    write("to heaven and earth,")
    playSound("4")
})
Mousetrap.bind("t", function(){
    write("to body and spirit,")
    playSound("5")
})
Mousetrap.bind("y", function(){
    write("chaos, microcosmos, and the confused mass;")
    playSound("6")
})
Mousetrap.bind("u", function(){
    write("it contains in itself all    colors and potentially all metals; ")
    playSound("7")
})
Mousetrap.bind("i", function(){
    write("there is nothing more wonderful in the world,")
    playSound("8")
})
Mousetrap.bind("o", function(){
    write("for it begets itself, conceives itself,")
    playSound("9")
})
Mousetrap.bind("p", function(){
    write("and gives birth to itself.\n    -Arthur Edward Waite")
    playSound("10")
    $('#writingDiv').append("<br>")
})
Mousetrap.bind("[", function(){
    write("Pete is telling me about his dungeons and dragons character ")
    playSound("11")
})
Mousetrap.bind("]", function(){
    write("a halfling with a harp of gold")
    playSound("12")
})
Mousetrap.bind("\\", function(){
    write("and about how he has this power called prestidigitation")
    playSound("13")
})
Mousetrap.bind("a", function(){
    write("which lets him fuck with the world in all these tiny little ways")
    playSound("14")
})
Mousetrap.bind("s", function(){
    write("\"Hey did you notice")
    playSound("15")
})
Mousetrap.bind("d", function(){
    write("that your water tastes like cinnamon?\" he asks ")
    playSound("16")
})
Mousetrap.bind("f", function(){
    write("Then he wiggles his fingers at me ")
    playSound("17")
})
Mousetrap.bind("g", function(){
    write("Haha. I got you he says.")
    playSound("18")
}) 
Mousetrap.bind("h", function(){
    write("Prestidigitation.")
    playSound("19")
})
Mousetrap.bind("j", function(){
    write("I got you. Haha.")
    playSound("20")
    $('#writingDiv').append("<br>")
})
Mousetrap.bind("k", function(){
    write("Question: When the Philosophers speak of gold and silver,")
    playSound("21")
})
Mousetrap.bind("l", function(){
    write("from which they extract their matter,")
    playSound("22")
})
Mousetrap.bind(";", function(){
    write("are we to suppose that they refer to the vulgar gold and silver?")
    playSound("23")
    $('#writingDiv').append("<br>")
})
Mousetrap.bind("\'", function(){
    write("Answer: By no means;")
    playSound("24")
})
Mousetrap.bind("z", function(){
    write("vulgar silver and gold are dead,")
    playSound("25")
})
Mousetrap.bind("x", function(){
    write("while those of the Philosophers are full of life.")
    playSound("26")
    $('#writingDiv').append("<br>")
})
Mousetrap.bind("c", function(){
    $('#writingDiv').append("<br>")
    write("Hey did you notice your silver and gold are full of life?")
    playSound("27")
})
Mousetrap.bind("v", function(){
    write("Haha. I got you.")
    playSound("28")
})
Mousetrap.bind("b", function(){
    write("Prestidigitation. I got you. Haha.")
    playSound("29")
    $('#writingDiv').append("<br>")
})
Mousetrap.bind("n", function(){
    write("Alchemy is the belief that humanity will be saved by a thing, not an idea")
    playSound("30")
    $('#writingDiv').append("<br>")
})
Mousetrap.bind("m", function(){
    write("I have a great fondness for things with many names")
    playSound("31")
})
Mousetrap.bind(",", function(){
    write("the thing from which the philosophers stone might be made")
    playSound("32")
})
Mousetrap.bind(".", function(){
    write("The name which might call Allah in one of his many aspects")
    playSound("33")
})
Mousetrap.bind("/", function(){
    write("Like Milton said when he let the angels fuck and eat")
    playSound("34")
})
Mousetrap.bind("1", function(){
    write("we are all made out of")
    playSound("35")
})
Mousetrap.bind("2", function(){
    write("what God is made out of")
    playSound("36")
})
Mousetrap.bind("3", function(){
    write("so why should we be any different?")
    playSound("37")
    $('#writingDiv').append("<br>")
})
Mousetrap.bind("4", function(){
    write("Is it wrong to cure cancer in the pursuit of gold?")
    playSound("38")
}) 
Mousetrap.bind("5", function(){
    write("Not really ")
    playSound("39")
})
Mousetrap.bind("6", function(){
    write("But it is distasteful")
    playSound("40")
})
Mousetrap.bind("7", function(){
    write("and turns humanity into a slightly worse story")
    playSound("41")
})
Mousetrap.bind("8", function(){
    write("and history will only judge us on the quality of our stories ")
    playSound("42")
    $('#writingDiv').append("<br>")
})
Mousetrap.bind("9", function(){
    write("Alchemy is the belief that humanity will be saved by a thing, not an idea")
    playSound("43")
    $('#writingDiv').append("<br>")
})
Mousetrap.bind("0", function(){
    $('#writingDiv').append("<br>")
    write("Ha ha")
    playSound("44")
})
Mousetrap.bind("-", function(){
    write("I got you")
    playSound("45")
})
Mousetrap.bind("=", function(){
    write("Ha ha.")
    playSound("46")
    $chant.animate({volume: 0.0}, 8000);
})

Mousetrap.bind('space', function(){
    playLinear();
})
function write(string) {
    if($('#writingDiv').height() > $('html').height() * 0.55){
        newPaper(string);
        return;
    }
    $('#writingDiv').append("<div id='line"+lineNum.toString()+"'></div>")
    var currentNum = lineNum;
    lineNum++;
    var dest = $('#line' + currentNum.toString());
    var c = 0;
    if($('#writeSound')[0].paused == false){twoTracks = true}
    $('#writeSound')[0].play();
    var i = setInterval(function () {
        if (c >= string.length) {
            clearInterval(i);
            if(!twoTracks){$('#writeSound')[0].pause();}
            else {twoTracks = false}

            dest.html(string.replace("\n","<br>"));
        } else {
            if(string[c] == '\n'){
                dest.append("<br>")
            } else{
            $('<span>').text(string[c]).
            appendTo(dest).hide().fadeIn(200);
            }
            c += 1;
        }
    }, 40);
};

function newPaper(string){
    lineNum = 1;
    $('#newPaper')[0].play();
    $('#writingDiv').fadeOut(800, function(){
        $('#writingDiv').empty();
        $('#writingDiv').show();
        write(string);
    })
}
var playSound = function(id) {
    linearCounter = parseInt(id);
    $(".played").each(function(){
        this.pause();
        this.currentTime = 0
    }); 
    sound = $("#a" + id).addClass("played")[0]
    if (sound.ended){sound.currentTime = 0};
    if (sound.currentTime > 0){
        sound.currentTime = 0
    } else {
        sound.play()
    }
}
var linearArray = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "="]
var linearCounter = 0;
function playLinear() {
    Mousetrap.trigger(linearArray[linearCounter]);
    // linearCounter++;
}
//Event Listenters
$(document).ready(function(){
    $('#writeSound').on('ended', function(){
        this.currentTime = 0;
    })
    $(document).click(playLinear);
})

//in-browser editor
var editorVisible = false;
$(document).ready(function() {
    $('#butttn').click(function () {
    toggleEditorDiv();
})
   $.ajax({
   url : "alchemy.js",
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
        editorVisible = true;
        $('#writingDiv').empty();
    }
    else {
        var val = $('#editor_js').val();
        eval(val);
        $('#editorDiv').fadeOut();
        editorVisible = false;
    }

}