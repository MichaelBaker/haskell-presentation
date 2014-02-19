var numberSlides = function(slides) {
  $(slides).each(function(page, slide) {
    var slideNumber = $("<div>").addClass("slide-number").html(page)
    $(slide).prepend(slideNumber)
  })
}
