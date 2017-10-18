const items = [
  { belongsto: 1, title: "Item1" },
  { belongsto: 2, title: "Item2" }
];

const users = [
    { userid: 1, name: "Joe" },
    { userid: 2, name: "Jim" }
]

// this is what we want to do with the two data structures, combine them with the userid-belongsto key 
/*
  [
    {
    
      title: "item1",
      user: {
        name: "Joe"
      }
    }
    ...
  ]
*/

// we can do it with a map that accepts a callback and returns the new structure
const combinedList = items.map((item) => {
    return {
      title: item.title,
      user: {
        name: users.find(user => user.userid === item.belongsto).name
      }
    }
});

console.log(combinedList)