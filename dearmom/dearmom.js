//This piece operates a little differently than any other one in the book, which makes me think it'd be a good example to show
//Again we start off by defining our variables at the top
//This all-important variable called 'shortcuts' defines all the text we want to replace over the course of the piece. Later we will be telling the program to replace the text on the left of the colon with the text on the right of the colon whenever that text appears. The curly braces '{}' mean this is an object. Unlike an array, the order of the items in an object don't matter, they are just a set of what's called 'key-value' pairs, a key on the left which is used to lookup a value on the right
var shortcuts = {
    "I am alive" : "everything here is just fine",
    "only the tip of the iceberg" : "completely exaggerated", 
    "allowed to leave" : "in any danger",
    "professors have been thrown in jail" : "buildings need to have asbestos removed",
    "been relocated out of the city" : "decided to take a trip out of the city",
    "being held" : "staying", 
    "Soviet-era detention center" : "nice hostel",
    "the new government" : "an old french couple",
    "detainees" :"guests",
    "foreign nationals" : "international travelers",
    "one of the embassies before long" : "each other",
    "scared, Mom" : "excited, Mom",
    "they're going to do with us" : "sort of adventure life will hand me next",
    "I was home with you, Dad and Lisa" : "I had the words to describe to you, Dad and Lisa how wonderful it is here",
    "They say I can email you once a week" : "I'm thinking about taking a hiking trip with some of the other guests",
    "I will write again as soon as I can": "So don't worry if it's a long time before you hear from me", 
    "You are seated in front of an ancient computer terminal, set atop a makeshift table of drywall and cinder blocks in a windowless room. The guard watches you from his post next to the door, his expression vacant. You enter your mother's email address with the clanking keyboard. Press Space to begin": "Type a letter to your mother:\n"
}
var counter = 0;
    var timer = 0;
//Here is where we define the full text of what the user will type, 'str' is a common abbreviation for 'string', which is what computers call chunks of text
var str = "Dear Mom,\nI know you are worried about me because of what happened here, so I wanted to write you to let you know that I am alive.\nThe stories on the news are only the tip of the iceberg.\nNo one is allowed to leave.\nMy university has closed down because more than half the professors have been thrown in jail.\nSo I have been relocated out of the city and am now being held in a Soviet-era detention center run by the new government.\nMost of the other detainees are foreign nationals like me\nHopefully we will be able to communicate with one of the embassies before long.\nI'm scared, Mom. I don't know what they're going to do with us. I wish I was home with you, Dad and Lisa.\nThey say I can email you once a week.\nI will write again as soon as I can.\n\nLove,\n"
//These are some boolean (true/false) variables that keep track of the state of the program. Has the user started writing the letter? Has the entire letter been typed out?
var writingLetter = false;
var letterWritten = false;

//window.onload basically means we're going to wait until the page loads then do everything inside here
window.onload = function() {
    //Search the HTML document for the textarea and save it as the variable ta
    var ta = document.getElementById("textEnter");
    //I'll be real here, this is some code I copy and pasted from the internet. It is a 'regular expression', which are an advanced way of manipulating strings of text. Basically this line of code takes all the keys (words to the left of the colon) in 'shortcuts' and puts them in one easy-to-search string
    var re = new RegExp("\\b(" + Object.keys(shortcuts).join("|") + ")\\b", "g");
    

    //This update function checks if the user has begun typing, then checks the textarea for any of the keys in shortcuts, then replaces those keys with the corresponding value, while also playing a typewriter sound
    update = function() {
        if(writingLetter){
            ta.value = ta.value.replace(re, function($0, $1) {
            playSound("typewriterReplace");
            return shortcuts[$1]      
            });
        }
    }

    //ta is our main text area, so ta.onkeyup means any time the user presses a key inside that text area, the code below will run.
    ta.onkeydown = function(e) {
        //e.which is the somewhat bizarre way of accessing which key on the keyboard was pressed. 8 corresponds to backspace and 13 is enter. 'return false' is our way of saying that when you press these keys, we want nothing to happen.
        if(counter >= str.length){writingLetter = false; letterWritten = true}
        if (e.which === 27 || e.ctrlKey || e.altKey || e.which == 37 || e.which == 39) {
            if(e.which == 27){
                location.href = "../toc/index.html#dearmom"
            } else if(e.which == 37){
                location.href = "../pickupline/index.html"
            } else if(e.which == 39){
                location.href = "../whoami/index.html"
            }
        }
        else if (e.which === 13 || e.which === 8) {
            return false;
        //both writingLetter and letterWritten start out false, so this code will only run in the very beginning of the piece
        } else if (writingLetter == false && letterWritten == false) {
            //32 is spacebar ("Press Space to Begin")
            if(e.which === 32){
                //if writingLetter is true, the code inside this little block won't run on the next keypress, and instead we'll go down to the 'else' section below
                writingLetter = true;
                update();
                //this sets the update function above to run every 1.2 seconds (1200ms), which creates the feeling of censorship. Running update more often makes the censorship feel less human, while running it more slowly makes it difficult to keep track of.
                setInterval(update, 1200)
                return false
            //ignores all keys but space at the beginning
            } else {
                return false
            }
        //this is the bread and butter of the piece, it runs everytime a key is pressed after the initial space
        }  else {
            //yes i know it's supposed to be a computer but i feel like the typewriter sound does a pretty good job of evoking a really old keyboard
            playSound("typewriterKey");
            if(e.which == 8){
                if(counter > 0){counter--;}
                return false
            } 
            if(writingLetter){
                //Whenever the user presses a key, instead of typing the corresponding letter of that key, we want to add the next letter of our poem text ('str') from the top. This way we can make sure we hit all of our fun text replacements in 'shortcuts'
                $('#textEnter').val($('#textEnter').val() + str[counter])
                // \n signifies a new line, and so plays the typewriter carriage return sound effect. It really makes no sense if you think about it but makes the sound design of the piece a little less monotonous. Surprisingly people never point this out or complain about it. I've grown rather fond of this sound.
                if(str[counter] == "\n"){playSound("typewriterEnter")}
                //advance the counter to get the next letter of str next time
                counter++;
                //checks to see if we've reached the end of the letter, this is how we let the user type their own name at the end
                //this is one way of autoscrolling so the text just typed is always visible on the screen
                ta.scrollTop = ta.scrollHeight;
                //the 'return false' is what keeps the typed letter from sending as well. if this weren't here an you pressed the 'j' key over and over you'd get Djejajr jMjojmj,j etc
                return false;
            }
        }

    }
    //again, 8 is backspace. This little function makes the backspace key work as normal, and correspondingly 'rewinds' the text so if you backspace and then type again it doesn't get messed up
}

//our beloved playSound function which plays the typewriter sounds from the html
var playSound = function(id) {
    sound = $("#" + id)[0]
    if (sound.ended){sound.currentTime = 0};
    if (sound.currentTime > 0){
        sound.currentTime = 0
    } else {
        sound.play()
    }
}

//in-browser editor
var editorVisible = false;
var js = "";
$(document).ready(function() {
    $('#butttn').click(function () {
    toggleEditorDiv();
})
   $.ajax({
   url : "dearmom.js",
   dataType: "text",
   success : function (data) {
       js = data;
          }
})
})

Mousetrap.bind('shift+space', function () {
    toggleEditorDiv();
})

function toggleEditorDiv () {
    if(editorVisible == false){
        $('#textEnter').text(js);
        editorVisible = true;
    }
    else {
        var val = $('#textEnter').val();
        eval(val);
        $('#textEnter').text("");
        editorVisible = false;
    }

}