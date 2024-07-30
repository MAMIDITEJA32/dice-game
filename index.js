var randomNumber1=Math.floor(Math.random()*6)+1;
var diceImage="dice"+randomNumber1+".png";
var randomImageSource="images/"+diceImage;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource);

var randomNumber2=Math.floor(Math.random()*6)+1;
var diceImage1="dice"+randomNumber2+".png";
var randomImageSource1="images/"+diceImage1;
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImageSource1);

if(randomNumber1>randomNumber2)
{
    document.querySelector("h1").innerHTML="&#128525;Player 1 wins";
}
else if(randomNumber1<randomNumber2)
{
    document.querySelector("h1").innerHTML="&#128525;Player 2 wins";
}
else
{
    document.querySelector("h1").innerHTML="&#128540;Draw";
}