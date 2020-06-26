$(document).ready(function () {

  var quotes = ["Whatever the mind of man can conceive and believe, it can achieve.",
    "Strive not to be a success, but rather to be of value.",
    "Two roads diverged in a wood, and I took the one less traveled by, And that has made all the difference.",
    "I attribute my success to this: I never gave or took any excuse.",
    "You miss 100% of the shots you don’t take.",
    "The most difficult thing is the decision to act, the rest is merely tenacity."];

  var author = ["Napoleon Hill", "Albert Einstein", "Robert Frost", "Florence Nightingale", "Wayne Gretzky", "Amelia Earhart"];

  var lastnum;

  fetchQuote(quotes, author);

  setInterval(function () {
    $("#quoteBody").fadeOut("slow");
    $("#authorBody").fadeOut("slow");

    setTimeout(function () {
      fetchQuote(quotes, author);
    }, 550);
  }, 4500);

  function fetchQuote(q, a) {
    quoteNum = Math.floor(Math.random() * quotes.length);
    while (quoteNum === lastnum) {
      quoteNum = Math.floor(Math.random() * quotes.length);
    }
    $("#quoteBody").text('"' + q[quoteNum] + '"');
    $("#authorBody").text('-' + a[quoteNum]);
    $("#quoteBody").fadeIn("slow");
    $("#authorBody").fadeIn("slow");
    lastnum = quoteNum;
  }
});
