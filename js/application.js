$(function() {
  var slides             = $(".slide")
  var goToSlideContainer = $(".go-to-slide-frame")
  var goToSlideValue     = $(".go-to-slide-frame .value")
  var goToSlideFrame     = new GoToSlideFrame(goToSlideContainer, goToSlideValue)
  var scrollToSlide      = new ScrollToSlide(slides)

  var goToSlide = function(number) {
    if(number >= slides.length)
      number = slides.length - 1
    else if(number < 0)
      number = 0

    var slide    = slides[number]
    var slideTop = $(slide).offset().top;
    document.body.scrollTop = slideTop;
  }

  dispatch      (goToSlideFrame, goToSlide, scrollToSlide)
  colorSlides   (slides, ["s00", "s01", "s02", "s03", "s04", "s05", "s06", "s07", "s08"])
  numberSlides  (slides)
  parallax      (slides, -400, 400, 0.4)
})
