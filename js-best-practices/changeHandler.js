var coins = {
  'p': 1,
  'n': 5,
  'd': 10,
  'q': 25
};

var coinsByAmount = ['q', 'd', 'n', 'p'];

module.exports = {
  getAmount: function(coinType) {
    if(!coins.hasOwnProperty(coinType)){
      throw new Error('Unrecognized coin ' + coinType);
    }
    return coins[coinType];
  },

  convertToChange: function(amount) {
    var change = [];
    for(var i in coinsByAmount){
      var coinType = coinsByAmount[i];
      var coinValue = coins[coinType];

      while(amount >= coinValue){
        change.push(coinType);
        amount -= coinValue;
      }
    }
    return change;
  }
};