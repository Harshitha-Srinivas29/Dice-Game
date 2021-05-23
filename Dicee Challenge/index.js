var randomNumber1 = Math.floor(Math.random() * 6) + 1; //generating random numbers btween 1-6;

var randomDiceImage = "dice"+ randomNumber1 +".png"; //Selecting dice images from dice1.png- dice6.png;

var imageSource1 = "images/"+ randomDiceImage; //images/dice1.png - dice2.png;

var image1 =  document.querySelectorAll('img')[0];

image1.setAttribute("src", imageSource1);

//for second dice;

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var imageSource2 = "images/dice"+randomNumber2 + ".png";

var image2 = document.querySelectorAll('img')[1];

image2.setAttribute("src",imageSource2);

//to check who has won!!!!

if(randomNumber1 === randomNumber2) {
  document.querySelector("h1").innerHTML = "DRAW";
}
else if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩Player 1 wins!!!";
}
else {
    document.querySelector("h1").innerHTML = "🚩Player 2 wins!!!";
}
