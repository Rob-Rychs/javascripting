// Calculates the greatest common divisor between two numbers.

// Use recursion. Base case is when y equals 0. In this case, return x. Otherwise, return the GCD of y and the remainder of the division x/y.

const gcd = (x, y) => !y ? x : gcd(y, x % y);

// gcd (8, 36) -> 4