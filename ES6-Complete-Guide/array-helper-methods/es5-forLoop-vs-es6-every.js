var computers = [
  { name: 'Apple', ram: 24 },
  { name: 'Compaq', ram: 4 },
  { name: 'Acer', ram: 32 }
];
// intialize boolean values to test conditions in for loop... nasty es5 mess
var allComputersCanRunProgram = true;
var onlySomeComputersCanRunProgram = false;

for (var i = 0; i < computers.length; i++) {
  var computer = computers[i];
  
  if (computer.ram < 16) {
    allComputersCanRunProgram = false;
  } else {
    onlySomeComputersCanRunProgram = true;
  }
}

'---'
allComputersCanRunProgram
onlySomeComputersCanRunProgram
'+++'

//es6 .every
computers.every(function(computer) {
  return computer.ram > 16;
});