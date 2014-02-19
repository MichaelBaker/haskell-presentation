var dispatch = function(snapToSlideFrame, snapToSlide, scrollToSlide) {
  /*
   * State transitions
   */
  key("shift+;", "default", function() {
    key.setScope("snap-to-slide-frame-visible")
    scrollToSlide.halt()
    snapToSlideFrame.makeVisible()
  })

  /*
   * Snap to frame
   */
  key("0, 1, 2, 3, 4, 5, 6, 7, 8, 9",
      "snap-to-slide-frame-visible",
      function(event, handler) { snapToSlideFrame.addDigit(handler.shortcut) })

  key("backspace",
      "snap-to-slide-frame-visible",
      function(event) {
        event.preventDefault()
        snapToSlideFrame.deleteLastDigit()
      })

  key("enter, return, esc",
      "snap-to-slide-frame-visible", function() {
    key.setScope("default")
    snapToSlideFrame.makeInvisible()
    var slide = snapToSlideFrame.value()
    snapToSlide(slide)
  })

  /*
   * Scroll to frame
   */
  key("left, up",    "default", function() { scrollToSlide.retreat() })
  key("right, down", "default", function() { scrollToSlide.advance() })

  key.setScope("default")
}
