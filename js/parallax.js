var parallax = function(slides, minMargin, maxMargin, scale) {
  $(slides).each(function(index, block) {
    var documentTop = document.body.scrollTop;
    var elementTop  = $(block).offset().top;
    var delta       = documentTop - elementTop;

    $(".text", block).css("top", clamp(delta * scale, minMargin, maxMargin))
    // onscroll, take the distance from each block to the top of the screen
    // take that number, FLIP THAT SHIT, clamp it and make it the text margin
    $(document).on("scroll", function() {
      var documentTop = document.body.scrollTop;
      var elementTop  = $(block).offset().top;
      var delta       = documentTop - elementTop;

      $(".text", block).css("top", clamp(delta * scale, minMargin, maxMargin))
    })
  })
}
