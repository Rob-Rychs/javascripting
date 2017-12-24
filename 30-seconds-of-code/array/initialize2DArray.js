// Initializes a 2D array of given width and height and value.

// Use Array.map() to generate h rows where each is a new array of size w initialize with value. If the value is not provided, default to null.

const initialize2DArray = (w, h, val = null) => Array(h).fill().map(() => Array(w).fill(val));

// initializeArrayWithRange(2, 2, 0) -> [[0,0], [0,0]]
