var level=1;
var arr=[];
var userClickPattern=[];
var started="false";
var playerTurn=0;
//for the begining of game....
    $(document).on("keypress",function(item){
        if(started==="false"){
        
        console.log("value of"+level);
        $("h1").text("level  "+level);
        //finding random numbers...
            nextSequence();
         started="true";
         //chance by chance variable 
         playerTurn=1;
        }
    });
   
    $(".btn").on("click",function(){
       var clickedColour = this.id;
       buttonClick(clickedColour);
       animatePress(clickedColour);
       userClickPattern.push(clickedColour);
       checkFunction(userClickPattern.length-1);
    });




      function checkFunction(length)
      {

                if(userClickPattern[length]===arr[length])
                {
                    if(userClickPattern.length===arr.length)
                    {
                        setTimeout(function(){
                            nextSequence()
                        },1000);
                    }
                    console.log("true");
                    
                }
               else
               {
                 buttonClick("wrong");
                  playerTurn=0;
                  started="false";
                  arr=[];
                  level=1; 
                  $("h1").text("you lost the game, press any key to start");  
                  $("body").addClass("game-over");
                  setTimeout(function () {
                    $("body").removeClass("game-over");
                  }, 100);          
               }  
           
          
      }

function nextSequence() {
    $("h1").text("level  "+level);
    randomFind();
    var arraySize = arr.length;
    //new button after each level
    buttonClick(arr[arraySize - 1]);
    level++;
    userClickPattern=[];
}

function randomFind() {
    var element = Math.floor((Math.random() * 4) + 1);
    console.log("random" + element);
    //adding elements to array    
    if (element == 1) {
        arr.push("blue");
    }
    else if (element == 2) {
        arr.push("green");
    }
    else if (element == 3) {
        arr.push("red");
    }
    else {
        arr.push("yellow");
    }
}

//function to play sound on click



function buttonClick(idRefernce)
{
if(idRefernce==="blue")
{ 
     $("#blue").fadeOut(10).fadeIn(10).addClass("pressed").removeClass("pressed");

     var audio=new Audio("sounds/blue.mp3");
     audio.play();
}
else if(idRefernce==="green")
{
    $("#green").fadeOut(10).fadeIn(10).addClass("pressed",1000).removeClass("pressed",1000);
 var audio=new Audio("sounds/green.mp3");
 audio.play();
}
else if(idRefernce==="red")
{
    $("#red").fadeOut(10).fadeIn(10).addClass("pressed",1000).removeClass("pressed",1000);
 var audio=new Audio("sounds/red.mp3");
 audio.play();
}
else if(idRefernce==="yellow")
{
    $("#yellow").fadeOut(10).fadeIn(10).addClass("pressed",1000).removeClass("pressed",1000);
 var audio=new Audio("sounds/yellow.mp3");
 audio.play();
}
else{
    var audio=new Audio("sounds/wrong.mp3");
    audio.play();
}
console.log(arr);
}

function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");
    setTimeout(function () {
      $("#" + currentColor).removeClass("pressed");
    }, 100);
  }


