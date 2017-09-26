function validateShoppingList(...items) {
  if (items.indexOf('milk') < 0) {
    return ['milk', ...items];
  }
  return items;
}

validateShoppingList('oranges', 'bread', 'eggs');