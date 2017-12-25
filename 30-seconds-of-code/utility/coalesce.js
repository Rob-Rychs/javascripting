// Returns the first non-null/undefined argument.

// Use Array.find() to return the first non null/undefined argument.

const coalesce = (...args) => args.find(_ => ![undefined, null].includes(_))

// coalesce(null,undefined,"",NaN, "Waldo") -> ""