// generating a number from 1 to 6 
var randomNumber1 = Math.floor(Math.random() * 6 ) + 1 ;
// setting a variable for the first diceimage
var diceimage1 = document.querySelector("img.img1");
// Adding the random number to image name so as to select the images from 1 to 6.
diceimage1.setAttribute("src", "images/dice"+randomNumber1+".png");


//generating a number from 1 to 6
var randomNumber2 = Math.floor(Math.random() * 6 )+ 1;
//setting a variable for the second diceimage
var diceimage2 = document.querySelector("img.img2");
//addidng the random number to the image name so as to select the image from 1 to 6.
diceimage2.setAttribute("src","images/dice"+randomNumber2+".png");


//adding an if statement controlling the innderhtmnl of the page deepending on the game score;

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player1 won!!!";
}else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "Player2 won!!!";
}else{
    document.querySelector("h1").innerHTML = "Draw!!!";
}