// Select an element by ID

// getElementById - a fast and cross browser safe way for selecting DOM elements.

// The method getElementById() is supported in all major browsers and returns the first element with the specified ID. It is the fastest way for accessing DOM tree elements. Example:

var el = document.getElementById('foo');
el.innerHTML = 'Hello World!';
// The method is blazingly fast, but due to the limitation of selecting elements only by id, its usefulness is limited. The linked reference shows a performance comparison between getElementById() and querySelectorAll(). The latter is a convenient method for accessing DOM elements by almost arbitrary CSS selectors.