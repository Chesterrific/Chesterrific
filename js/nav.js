$(document).ready(function () {

  // setInterval(function(){
  //   console.log(window.scrollY);
  // }, 1000);

  // Variables
  var scrollSpeed = 750,
    isWhite = true,
    topNav = document.getElementById('top'),
    botNav = document.getElementById('bot'),
    quoteEl = document.getElementById('transition');

  $(window).bind('scroll', function () {
    //Transition section's distance from top of window starting from its top.
    var topOfQuote = quoteEl.offsetTop;
    console.log(topOfQuote);

    //Nav's distance from top of window + half its height.
    var topOfNav = window.scrollY + (topNav.offsetTop + topNav.offsetHeight / 2);
    console.log(topOfNav);

    //Transition section's distance from top of window starting from its bottom.
    var botOfQuote = quoteEl.offsetTop + quoteEl.offsetHeight;
    console.log(botOfQuote);

    if (botOfQuote >= topOfNav && topOfNav >= topOfQuote && isWhite === true) {
      $('#top').css('color', 'black');
      isWhite = false;
    }
    else if (!(botOfQuote >= topOfNav && topOfNav >= topOfQuote) && isWhite === false) {
      $('#top').css('color', 'white');
      isWhite = true;
    }
  });



  // Function Bindings
  $(".projBtn").click(function () {
    $('html, body').animate({
      scrollTop: $('#projects').offset().top
    }, scrollSpeed);
  });

  $(".aboutBtn").click(function () {
    $('html, body').animate({
      scrollTop: $('#about').offset().top
    }, scrollSpeed);
  });

  // $(window).bind('scroll',updatePos);


  // // Functions
  // function updatePos(){
  //   topOffset = $(this).scrollTop();
  // }
});