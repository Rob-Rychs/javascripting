const names = ["Jim", "Rose", "Mack", "Mandi", "Eddie", "Jim", "Mack"]


const result = names.reduce((allNames, name) => {
  if(allNames[name]){
    allNames[name]++
  } else {
    allNames[name] = 1;
  }
  return allNames
}, {})

console.log(result)


const filter = names.reduce((filtered, name) => {
   
}, [])



const getSurvey = (arr) => {
  const survey = {}

//    arr.map(name => {
//     if(name in survey){
//       survey[name]++
//     } else {
//       survey[name] = 1
//     }
//   })
  
   
//   arr.forEach(name => {
//      if(survey[name]){
//       survey[name]++
//     } else {
//       survey[name] = 1
//     }
//   })
  
  
  for(let i = 0; i < arr.length; i++){
    if(survey[arr[i]]){
      survey[arr[i]]++
    } else {
      survey[arr[i]] = 1
    }
  }
  
  
   
  return survey
}

const result = getSurvey(names)

console.log(result)