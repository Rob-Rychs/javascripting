// Returns a customized coalesce function that returns the first argument that returns true from the provided argument validation function.

// Use Array.find() to return the first argument that returns true from the provided argument validation function.

const coalesceFactory = valid => (...args) => args.find(valid);

// const customCoalesce = coalesceFactory(_ => ![null, undefined, "", NaN].includes(_))
// customCoalesce(undefined, null, NaN, "", "Waldo") //-> "Waldo"