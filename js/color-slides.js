var colorSlides = function(slides, colorClasses) {
  var currentColor = -1

  var nextColorClass = function() {
    currentColor += 1

    if(currentColor >= colorClasses.length)
      currentColor = 0

    return colorClasses[currentColor]
  }

  if(colorClasses.length === 0)
    return

  $(slides).each(function(index, slide) {
    var slide = $(slide)
    if(slide.hasClass("skip-color"))
      return

    slide.addClass(nextColorClass())
  })
}
