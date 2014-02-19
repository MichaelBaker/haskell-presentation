var ScrollToSlide = function(slides) {
  var self              = this
  var targetSlide       = null
  var currentSlide      = 0
  var minSlide          = 0
  var maxSlide          = slides.length - 1
  var swallowScroll     = false
  var maxScrollDistance = 15

  var setTargetSlide = function(slideNumber) {
    targetSlide = clamp(slideNumber, minSlide, maxSlide)
  }

  this.retreat = function() {
    if(!targetSlide)
      setTargetSlide(currentSlide - 1)
    else
      setTargetSlide(targetSlide - 1)
  }

  this.advance = function() {
    if(!targetSlide)
      setTargetSlide(currentSlide + 1)
    else
      setTargetSlide(targetSlide + 1)
  }

  this.halt = function() {
    targetSlide = null
  }

  var findClosestSlide = function() {
    var documentTop       = document.body.scrollTop;
    var closestSlide      = 0
    var closestSlideDelta = Number.MAX_VALUE

    $(slides).each(function(number, slide) {
      var elementTop = $(slide).offset().top;
      var delta      = Math.abs(documentTop - elementTop)

      if(delta < closestSlideDelta) {
        closestSlide      = number
        closestSlideDelta = delta
      }
    })

    return closestSlide
  }

  var haltForUser = function(e) {
    if(swallowScroll) {
      swallowScroll = false
      return
    }

    self.halt()
    currentSlide = findClosestSlide()
  }

  var scrollToTargetSlide = function() {
    var documentTop
    var elementTop
    var delta

    if(targetSlide !== null) {
      documentTop = document.body.scrollTop;
      elementTop  = $(slides[targetSlide]).offset().top;
      delta       = elementTop - documentTop;

      if(delta === 0) {
        self.halt()
      } else {
        swallowScroll           = true
        document.body.scrollTop = documentTop + clamp(delta, -maxScrollDistance, maxScrollDistance)
        currentSlide            = findClosestSlide()
      }
    }

    setTimeout(scrollToTargetSlide, 5)
  }

  setTimeout(scrollToTargetSlide, 0)
  $(document).on("scroll", haltForUser)
}
