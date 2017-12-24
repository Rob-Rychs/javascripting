// Converts an asynchronous function to return a promise.

// Use currying to return a function returning a Promise that calls the original function. Use the ...rest operator to pass in all the parameters.

// In Node 8+, you can use util.promisify

const promisify = func =>
  (...args) =>
    new Promise((resolve, reject) =>
      func(...args, (err, result) =>
        err ? reject(err) : resolve(result))
    );

// const delay = promisify((d, cb) => setTimeout(cb, d))
// delay(2000).then(() => console.log('Hi!')) -> Promise resolves after 2s