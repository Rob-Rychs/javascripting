// Removes any properties except the ones specified from a JSON object.

// Use Object.keys() method to loop over given JSON object and deleting keys that are not included in given array. Also if you give it a special key (childIndicator) it will search deeply inside it to apply function to inner objects too.

const cleanObj = (obj, keysToKeep = [], childIndicator) => {
  Object.keys(obj).forEach(key => {
    if (key === childIndicator) {
      cleanObj(obj[key], keysToKeep, childIndicator);
    } else if (!keysToKeep.includes(key)) {
      delete obj[key];
    }
  })
}

/*
  const testObj = {a: 1, b: 2, children: {a: 1, b: 2}}
  cleanObj(testObj, ["a"],"children")
  console.log(testObj)// { a: 1, children : { a: 1}}
*/