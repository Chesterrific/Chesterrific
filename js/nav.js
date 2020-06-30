$(document).ready(function () {

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
    else if(!((botOfQuote >= topOfBNav && topOfBNav >= topOfQuote) || (topOfBNav >= topOfAbout)) && botIsWhite === false) {
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
});