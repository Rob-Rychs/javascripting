const welcome = [
  {text: "yo"},
  {text: "whaddup"},
  {text: "holler"},
  {text: "hi bruh"}
]

console.log(welcome);

function removeListItem(item) {
  this.welcome = welcome.filter(li => li !==item )
  
//   let position =welcome.indexOf(item);
//   welcome.splice(position, 1);
}

removeListItem(welcome[1]);

console.log(welcome);