// Retrieve a property that indicated by the selector from an object.

// If the property does not exists returns undefined.

const select = (from, selector) =>
  selector.split('.').reduce((prev, cur) => prev && prev[cur], from);

// const obj = {selector: {to: {val: 'val to select'}}};
// select(obj, 'selector.to.val'); -> 'val to select'