# Template Strings

```js
//Simple string building
var k3 = "I love you <3";
var lovemessage = ` I just wanna say ${k3}`; //PS: It takes all space you define, even paragraphs.
console.log(lovemessage); //I Just wanna say I love you <3

//Doing Expressions
var x = 4;
var area = `the area is ${ x * x }`;
console.log(area);

//Executing function with String Templates.
var date = new Date;
function check(strings, ...values){ //all strings are casted into array strings, and all values are spread into values array.
    if( values[0] < 9){
      values[2] = "I am getting ready to go to work";
    }else if( values[0] > 17 && values[1] > 30){
     values[2] = ",I am already off work";
    }else{
    values[2] = "and I am still working. :)";
    }
    return `${strings[0]}${values[0]}:${values[1]}${strings[1]} ${values[2]}`
}

var workerstatus = check`It's ${date.getHours()}${date.getMinutes()}${""}`
console.log(workerstatus);
```

**What it is:** This is a very powerful feature that allows us build our own string using logic, operations and even run functions to determine its content. 🤓 🤓

**When to apply it:** Whenever you come up with a requirement where you need to display a string wiith some values of variables or properties. PS: We can also use *Regex* (Regular expressions into it). 🤑 🤑

**Why:**  Because, It's extremly powerful, specially in some cases where you need some live update on the client side, without send a request back to the server 👌 👌