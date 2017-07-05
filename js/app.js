// wait for the DOM to finish loading
$(document).ready(function() {
  // all code to manipulate the DOM
  // goes inside this function
console.log("Sanity Check: DOM is Ready!");

// Is it Player X's turn, if false it is Palyer O's turn
turnX = false;

// Initiatlized variables to determine if a box has an X[true] or an O[false]
boxOne = null;
boxTwo = null;
boxThree = null;
boxFour = null;
boxFive = null;
boxSix = null;
boxSeven = null;
boxEight = null;
boxNine = null;
// turnO = false;

//let myBoard = document.getElementById("board");

//myBoard.addEventListener("click", taco);
$('#top-left').click(function (event) {
  let currentTurn = $(this);

  if (turnX) {
  $(currentTurn).append("X");
  $(currentTurn).toggleClass("box-x");
  boxOne = true;

  }
  else {
    $(currentTurn).append("O");
    $(currentTurn).toggleClass("box-o");
    boxOne = false;
  }
  $(currentTurn).off();
  turnX = !turnX;
  console.log(boxOne);
  hasWon();
});

$('#top-mid').click(function (event) {
  let currentTurn = $(this);

  if (turnX) {
  $(currentTurn).append("X");
  $(currentTurn).toggleClass("box-x");
  boxTwo = true;

  }
  else {
    $(currentTurn).append("O");
    $(currentTurn).toggleClass("box-o");
    boxTwo = false;
  }
  $(currentTurn).off();
  turnX = !turnX;
  console.log(boxTwo);
  hasWon();
});

$('#top-right').click(function (event) {
  let currentTurn = $(this);

  if (turnX) {
  $(currentTurn).append("X");
  $(currentTurn).toggleClass("box-x");
  boxThree = true;
  }
  else {
    $(currentTurn).append("O");
    $(currentTurn).toggleClass("box-o");
    boxThree = false;
  }
  $(currentTurn).off();
  turnX = !turnX;
  console.log(boxThree);
  hasWon();
});

$('#mid-left').click(function (event) {
  let currentTurn = $(this);

  if (turnX) {
  $(currentTurn).append("X");
  $(currentTurn).toggleClass("box-x");
  boxFour = true;
  }
  else {
    $(currentTurn).append("O");
    $(currentTurn).toggleClass("box-o");
    boxFour = false;
  }
  $(currentTurn).off();
  turnX = !turnX;
  console.log(boxFour);
  hasWon();
});

$('#mid-mid').click(function (event) {
  let currentTurn = $(this);

  if (turnX) {
  $(currentTurn).append("X");
  $(currentTurn).toggleClass("box-x");
  boxFive = true;
  }
  else {
    $(currentTurn).append("O");
    $(currentTurn).toggleClass("box-o");
    boxFive = false;
  }
  $(currentTurn).off();
  turnX = !turnX;
  console.log(boxFive);
  hasWon();
});
$('#mid-right').click(function (event) {
  let currentTurn = $(this);

  if (turnX) {
  $(currentTurn).append("X");
  $(currentTurn).toggleClass("box-x");
  boxSix = true;
  }
  else {
    $(currentTurn).append("O");
    $(currentTurn).toggleClass("box-o");
    boxSix = false;
  }
  $(currentTurn).off();
  turnX = !turnX;
  console.log(boxSix);
  hasWon();
});

$('#bot-left').click(function (event) {
  let currentTurn = $(this);

  if (turnX) {
  $(currentTurn).append("X");
  $(currentTurn).toggleClass("box-x");
  boxSeven = true;
  }
  else {
    $(currentTurn).append("O");
    $(currentTurn).toggleClass("box-o");
    boxSeven = false;
  }
  $(currentTurn).off();
  turnX = !turnX;
  console.log(boxSeven);
  hasWon();
});

$('#bot-mid').click(function (event) {
  let currentTurn = $(this);

  if (turnX) {
  $(currentTurn).append("X");
  $(currentTurn).toggleClass("box-x");
  boxEight = true;
  }
  else {
    $(currentTurn).append("O");
    $(currentTurn).toggleClass("box-o");
    boxEight = false;
  }
  $(currentTurn).off();
  turnX = !turnX;
  console.log(boxEight);
  hasWon();
});
$('#bot-right').click(function (event) {
  let currentTurn = $(this);

  if (turnX) {
  $(currentTurn).append("X");
  $(currentTurn).toggleClass("box-x");
  boxNine = true;
  }
  else {
    $(currentTurn).append("O");
    $(currentTurn).toggleClass("box-o");
    boxNine = false;
  }
  $(currentTurn).off();
  turnX = !turnX;
  console.log(boxNine);
  hasWon();
});



});
// this is the end of the .ready function.


function hasWon () {

  if (boxOne && boxTwo && boxThree === true){
    // add variables for win
    console.log("Player X has Won!");
    $('body').append("Player X Wins!");
    $('#board').children().off();
  }

  else if (boxOne && boxTwo && boxThree === false){
    // add variables for win
    console.log("Player O has Won!");
    $('body').append("Player O Wins!");
    $('#board').children().off();

  }

};
