// Logs the name of a function.

// Use console.debug() and the name property of the passed method to log the method's name to the debug channel of the console.

const functionName = fn => (console.debug(fn.name), fn);

// functionName(Math.max) -> max (logged in debug channel of console)
