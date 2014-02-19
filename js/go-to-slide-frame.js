window.GoToSlideFrame = function(container, value) {
  this.container    = $(container)
  this.valueElement = value

  if(!container)
    throw new Error("Go To Slide Frame must have a container element")

  if(!value)
    throw new Error("Go To Slide Frame must have a value element")

  this.setValue = function(value) {
    var cleanedValue = parseInt(value, 10) || 0
    this.valueElement.attr("data-value", cleanedValue)
    this.valueElement.html(cleanedValue)
  }

  this.makeVisible = function() {
    this.setValue(0)
    this.container.show()
  }

  this.makeInvisible = function() {
    this.container.hide()
  }

  this.addDigit = function(digit) {
    var currentValue = this.valueElement.attr("data-value")
    this.setValue(currentValue + digit)
  }

  this.deleteLastDigit = function() {
    var currentValue = this.valueElement.attr("data-value")
    this.setValue(currentValue.slice(0, -1))
  }

  this.value = function() {
    var currentValue = this.valueElement.attr("data-value")
    return parseInt(currentValue, 10) || 0
  }
}
