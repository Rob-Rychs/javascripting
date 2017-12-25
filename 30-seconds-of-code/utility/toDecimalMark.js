// Use toLocaleString() to convert a float-point arithmetic to the Decimal mark form. It makes a comma separated string from a number.

const toDecimalMark = num => num.toLocaleString("en-US");
// toDecimalMark(12305030388.9087) -> "12,305,030,388.9087"
