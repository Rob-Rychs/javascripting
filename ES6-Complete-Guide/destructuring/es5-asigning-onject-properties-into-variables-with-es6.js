// some es5
var expense = {
  type: 'Business',
  amount: '$45 USD'
};
// declaring new variables holding object properties
var type = expense.type;
var amount = expense.amount;
// same thing in es6 with const (variable name must be identical to property name we're handing off)
const { type, amount } = espense;