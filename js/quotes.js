
var quotesObj = {
  quotesArr: [
    {
      quote: "'If you do what you have alway done, you will get what you have always gotten'"
    },
    {
      quote: "'A closed mouth never gets fed'"
    },
    {
      quote: "'The best way to predict the future is to create it'"
    },
    {
      quote: "'Difficult roads often lead to beautiful destinations'"
    },
    {
      quote: "'Build your own dreams or someone else will hire you to build theirs'"
    },
    {
      quote:"'What you do today can improve all of your tomorrows'"
    },
    {
      quote: "'Wake up, kick ass, Repeat'"
    },
    {
      quote: "'Mistakes are proof that you are trying'"
    },
    {
      quote: "'It is better to live one day as a lion then 1000 days as a sheep'"
    },
    {
      quote: "'Winners are not people who never fail, but are people who never quit'"
    }
  ]
}


var source = document.getElementById('quotes-template').innerHTML;

//compile the source and turn it into a function
var template = Handlebars.compile(source);

//pass the object to the function and will return computerHTML
var computedHTML = template(quotesObj);

var quotesContainer = document.getElementById('quotes-container');
quotesContainer.innerHTML = computedHTML;
