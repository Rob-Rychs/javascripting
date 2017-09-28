// WORKING WITH CONDITIONALS

// Relational Operators : 
'== === != > < >= <='
// Logical Operators : 
'&& || !'

// switch statements for limited specific values or cases, break; in between cases
switch
//Terniary operator : 
(condition)? ifTrue : ifFalse

// while loop:

var i = 1;
while(i<=10){
  document.write(i + "<br />");
  i++;
}

// Do loop:

do{
  var guess = prompt("Guess a number between 1 and 20");
}while(guess != 15)

alert("You guessed 15!);

// For loop:

for(j = 0; j <= 20; j++){
  if((j % 2) === 0){
    continue;
  }
  if(j === 15){
    break;
  }
}

// another kind of for in loop for objects:

var customer = {name : "Bob Thomas", address : "123 Main", balance : 50.50};

for(k in customer){
  document.write(customer[k])
}
