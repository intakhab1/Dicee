var randomNumber1 = Math.floor(Math.random()*6) +1 ; // 1-6
var randomImage1 = 'dice' + randomNumber1 +'.png';    //dice1-6.png
var randomImageSource1 = 'images/' + randomImage1 ;    //image/dice1-6.png

// selecting element
var image1 = document.querySelectorAll('img')[0];

// selecting attribute
image1.setAttribute('src', randomImageSource1 );


var randomNumber2 = Math.floor(Math.random()*6) +1 ; // 1-6
var randomImage2 = 'dice' + randomNumber2 +'.png';    //dice1-6.png
var randomImageSource2 = 'images/' + randomImage2 ;    //image/dice1-6.png

// selecting element
var image2 = document.querySelectorAll('img')[1].setAttribute('src', randomImageSource2 );
// selecting attribute
// image2.setAttribute('src', randomImageSource2 );
if (randomNumber1 > randomNumber2) {
  document.querySelector('h1').innerHTML = 'Player 1 wins'
} else if (randomNumber1 < randomNumber2) {
  document.querySelector('h1').innerHTML = 'Player 2 wins'
} else {
  document.querySelector('h1').innerHTML = ' draw'
}
