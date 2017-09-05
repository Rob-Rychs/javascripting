//Solution  not only supports numbers but also strings 
//Case 1: IF N = 123  return [123, 321 ...] Array typeof Number
//Case 2: IF N = "123" return [123, 321 ...] Array typeof Number
//Case 3: IF N = "ABC" return ["ABC", "CBA" ... ] Array typeof String.


//Set your value:(Number, String of number, String)
var N =  1234;


function getAllPossibilities(set) {
  var setConverted = set.toString();
  var results = [];

  if (setConverted.length === 1) {
    results.push(setConverted);
    return results;
  }

    for (var i = 0; i < setConverted.length; i++) {
    var first = setConverted[i];
    var remains = setConverted.substring(0, i) + setConverted.substring(i + 1);
    
 
    var innerPossibilities = getAllPossibilities(remains);
    
    for (var j = 0; j < innerPossibilities.length; j++) {
      results.push(first + innerPossibilities[j]);
    }
  }
  
  if(!isNaN(setConverted)){
    return results.map(Number);
  }else{
    return results;
  }
}

console.time("GetAllPossibilitiesTimeProccess");
var resultN = getAllPossibilities(N);
var totalN = resultN.length;
console.timeEnd("GetAllPossibilitiesTimeProccess");

console.log("Total of possibilities: ", totalN);
console.log("All possibilities: ", resultN);

// example of Permutations and conversions 
// open bash > run node AllPossibilities.js