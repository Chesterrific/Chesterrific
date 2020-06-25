$(document).ready(function () {

  var quotes = ["quote1", "quote2", "quote3"];
  var author = ["a1", "a2", "a3"];

  fetchQuote(quotes, author);

  setInterval(function () {
    $("#quoteBody").fadeOut("slow");
    
    setTimeout(function(){
      fetchQuote(quotes, author);
    }, 500);
  }, 4000);

  function fetchQuote(q, a) {
    quoteNum = Math.floor(Math.random() * quotes.length);
    $("#quoteBody").text('"' + q[quoteNum] + '"');
    $("#authorBody").text('-' + a[quoteNum]);
    $("#quoteBody").fadeIn("slow");
  }
});
