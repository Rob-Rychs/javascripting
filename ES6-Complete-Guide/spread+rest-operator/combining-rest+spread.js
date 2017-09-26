// this function takes any number of arguments and adds 'milk' to them if itsn't already there
function validateShoppingList(...items) {
  if (items.indexOf('milk') < 0) {
    return ['milk', ...items];
  }
  return items;
}

validateShoppingList('oranges', 'bread', 'eggs');