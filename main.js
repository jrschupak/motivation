window.onload=function(){
  console.log('main.js is up and running');

}

var affArray = ["If you do what you have alway done, you will get what you have always gotten", "A closed mouth never gets fed", "The best way to predict the future is to create it", "Difficult roads often lead to beautiful destinations", "Build your own dreams or someone else will hire you to build theirs", "What you do today can improve all of your tomorrows", "Wake up, kick ass, Repeat", "Mistakes are proof that you are trying", "It is better to live one day as a lion then 1000 days as a sheep", "Winners are not people who never fail, but are people who never quit"]

var affirmationContainer = document.querySelector('.affirmation');

affirmationContainer.innerText = affArray[Math.floor(Math.random()*(10-0)+0)];
// var name = prompt("hey what's your name?")
//     alert(name)
