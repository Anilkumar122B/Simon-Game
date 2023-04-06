
var buttonColor = ["green" , "red" , "yellow" ,"blue"];

var gamePattern = [];
var userPattern = [];
var started = false;
var level = 0;

$(document).keypress(function(){
  if(!started){
    $(".Heading").text("Level" + level);
    gameStart();
    started = true ;
  }
});
$(".btn").click(function(){
  var userClicked = $(this).attr("id");
  userPattern.push(userClicked);
  var audio = new Audio("sounds/" + userClicked + ".mp3");
  audio.play();
  $("#" + userClicked).addClass("clicked");
  setTimeout(function(){
    $("#" + userClicked).removeClass("clicked")
  } , 100);
  checkAnswer(userPattern.length - 1);
});
function checkAnswer(currentLevel){
  if(gamePattern[currentLevel] === userPattern[currentLevel]){
    if(gamePattern.length === userPattern.length){
      setTimeout(function(){
        gameStart();
      } , 1000)

    }
  }else{
    var audio = new Audio("sounds/wrong.mp3");
    audio.play();
    $("body").addClass("game-over");
    $(".Heading").text("Game Over, Press Any Key to Restart");
    setTimeout(function(){
      $("body").removeClass("game-over");
    } , 1000);
    restartGame();
  }
}

function gameStart(){
  userPattern = [];
  level++;
  $(".Heading").text("Level "  +  level);
  var randomNumber = Math.floor((Math.random() * 4) );
  var randomColor = buttonColor[randomNumber];
  gamePattern.push(randomColor);
  $("#" + randomColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  var audio = new Audio("sounds/" + randomColor + ".mp3");
  audio.play();
}
function restartGame() {
  level = 0 ;
  gamePattern = [];
  started = false ;
}
