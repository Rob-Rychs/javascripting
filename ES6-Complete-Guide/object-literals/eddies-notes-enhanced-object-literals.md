# Enhanced Object Literals

```js
let gender = "male";
let legs = 4;
function walk(){
console.log("Walking..");
}

let healthAnimal = {gender, legs, walk} //because the properties are the same name, the object treats as if it was  {color: color, doors: doors}(ES5 way !)
console.log(house.color);
console.log(house.doors);
healthAnimal.walk(); // "male", 4, "Walking.."


//Different ways of constructing Objects.
let healthAnimal = { gender,
                    legs,
                    walk(){   //In ES5 would be  walk: function() { }
                    console.log("Walking..");
                    }
console.log(house.color);
console.log(house.doors);
healthAnimal.walk(); // "male", 4, "Walking.."

//Another way, through computed properties ["property"]

let healthAnimal = { gender,
                    legs,
                     ["walk"]: function {
                    console.log("Walking..");
                    }
console.log(house.color);
console.log(house.doors);
healthAnimal.walk(); // "male", 4, "Walking.."

```

**What it is:** That's the new and beautiful several ways of construct an object in the new ECMAScript2015(ES6)

**When to apply it:** It'll depend on your requirements. One thing we know, it facilitates very much on how to design our application with ES6 .

**Why:** Because It's just awesome 😂 😂