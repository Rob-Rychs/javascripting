# Arrow Functions

```js
//ES5
var sendMessage = function (message, sender) {
    return message + sender;
}
//ES6
var sendMessage = (message, sender) =>  {
    return message + sender;
}
//ES6 Short-Hand (More than one parameter)
var rectangle = (length, width) => length * width;

//ES6 Short-Hand (One parament)
var square = x => x * x;

//Handling Actions Inside an Object
//ES5
var sendMessage = {
  name: "Eddie",
  handleMessage: function(message, handlerCb){
    handlerCb(message);
  },
  sayIt: function () {
    var that = this; // Make a copy of the whole scope, so we can access "name" inside of the callback function.
    this.handleMessage("Good morning ", function (message){
        that.name;
        console.log(message + that.name);
    })
  }
}

//ES6
var sendMessage ={
  name: "John",
  handleMessage: function (message, handler){
    handler(message);
  },
  sayIt: function () {
    this.handleMessage("Hello, ", message => console.log(message +       this.name)) // The arrow functions leave an open door, to access the scope using "this".
  }
}

deliveryBoy.receive();

```

**What it is:** This is a new feature called "Arrow Functions" from the new update on *ECMAScript2015* or *ES6* Version.

**When to apply it:** There's no specification saying when to apply it, but it's always good to keep the code consistent, by following the main web standards such as: If you have a function with more than one parameter and have error, data and a callback, please always folow the order `someFunction(err,  data, callback)`.

**Why:** Because all *Web Developers* will love you forever for not making their life harder 😬