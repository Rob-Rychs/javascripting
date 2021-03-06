// Returns the scroll position of the current page.

// Use pageXOffset and pageYOffset if they are defined, otherwise scrollLeft and scrollTop. You can omit el to use a default value of window.

const getScrollPosition = (el = window) =>
  ({x: (el.pageXOffset !== undefined) ? el.pageXOffset : el.scrollLeft,
    y: (el.pageYOffset !== undefined) ? el.pageYOffset : el.scrollTop});\

// getScrollPosition() -> {x: 0, y: 200}