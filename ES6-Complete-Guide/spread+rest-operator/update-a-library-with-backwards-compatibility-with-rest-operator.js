// first renamed calculateProduct to multiply method, then used spread operator to increase the number of arguments that calculateProduct can receive. updating the library this way will help insure backwards-compatibility 
const MathLibrary = {
  calculateProduct(...rest) {
    console.log('Please use the multiply method instead');
    return this.mutiply(...rest);
  },
  multiply(a, b) {
    return a * b;
  }
});