$(document).ready(function () {
  /* ------------------Quote JS------------------ */
  // Variables
  var timeBetweenQuotes = 4500;

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
  }, timeBetweenQuotes);

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

  /* ------------------Nav JS------------------ */
  // Variables
  var scrollSpeed = 750,
    topIsWhite = true,
    botIsWhite = true,
    topNav = document.getElementById('top'),
    botNav = document.getElementById('bot'),
    quoteEl = document.getElementById('transition');
  aboutEl = document.getElementById('about');

  $(window).bind('scroll', function () {
    //Transition section's distance from top of window starting from its top.
    var topOfQuote = quoteEl.offsetTop;

    //Transition section's distance from top of window starting from its bottom.
    var botOfQuote = quoteEl.offsetTop + quoteEl.offsetHeight;

    //About section's distance from top of window starting from its top.
    var topOfAbout = aboutEl.offsetTop;

    //About section's distance from top of window starting from its bottom.
    var botOfAbout = aboutEl.offsetTop + aboutEl.offsetHeight;

    //TopNav's distance from top of window + half its height.
    var topOfTNav = window.scrollY + (topNav.offsetTop + topNav.offsetHeight / 2);

    //BotNav's distance from top of window + half its heigt.
    var topOfBNav = window.scrollY + (botNav.offsetTop + botNav.offsetHeight / 2);

    //Top nav color controls.
    if (((botOfQuote >= topOfTNav && topOfTNav >= topOfQuote) || (botOfAbout >= topOfTNav && topOfTNav >= topOfAbout)) && topIsWhite === true) {
      $('#top').css('color', 'black');
      topIsWhite = false;
    }
    else if (!((botOfQuote >= topOfTNav && topOfTNav >= topOfQuote) || (botOfAbout >= topOfTNav && topOfTNav >= topOfAbout)) && topIsWhite === false) {
      $('#top').css('color', 'white');
      topIsWhite = true;
    }

    //Bot nav color controls.
    if (((botOfQuote >= topOfBNav && topOfBNav >= topOfQuote) || (botOfAbout >= topOfBNav && topOfBNav >= topOfAbout)) && botIsWhite === true) {
      $('#bot').css('color', 'black');
      botIsWhite = false;
    }
    else if (!((botOfQuote >= topOfBNav && topOfBNav >= topOfQuote) || (topOfBNav >= topOfAbout)) && botIsWhite === false) {
      $('#bot').css('color', 'white');
      botIsWhite = true;
    }
  });

  // Function Bindings
  $("#projBtn").click(function () {
    $('html, body').animate({
      scrollTop: $('#projects').offset().top
    }, scrollSpeed);
  });

  $("#aboutBtn").click(function () {
    $('html, body').animate({
      scrollTop: $('#about').offset().top
    }, scrollSpeed);
  });

  $("#backBtn").click(function () {
    $('html, body').animate({
      scrollTop: 0
    }, scrollSpeed);
  });

  /* ------------------Cursor Follow JS------------------ */
  let cursor = document.getElementById('cursor');
  let x = 0;
  let y = 0;
  let yscroll = 0;

  let radius = 30;

  // Cursor follow
  document.addEventListener('mousemove', function (mousePos) {
    x = mousePos.clientX;
    y = mousePos.clientY;
    yscroll = $(document).scrollTop();
    cursor.style.left = x + 'px';
    cursor.style.top = (y + yscroll) + 'px';
  });

  document.addEventListener('scroll', function () {
    yscroll = $(document).scrollTop();
    cursor.style.top = (y + yscroll) + 'px';
  });

  // Cursor size changes
  $('a').hover(function () {
    expandMouse();

  }, function () {
    resetMouseSize();
  });

  function expandMouse() {
    $('#cursor').css({
      'height': '100px',
      'width': '100px',
      'border' : '2px dashed #bfbfbf',
      'animation' : 'spin 5s linear infinite'
    });
  }

  function resetMouseSize() {
    $('#cursor').css({
      'height': radius + 'px',
      'width': radius + 'px',
      'border' : '2px solid #bfbfbf',
      'animation' : 'none'
    });
  }
});
