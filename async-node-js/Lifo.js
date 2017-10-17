// this Lifo class represents a Last In First Out call stack.... cooooool
class Lifo {

  constructor() {
    this.stack = []
  }

  push() {
    this.stack.push(item);
  }

  pop() {
    // if pop was assigned to a variable, it would return that pop'd element from the array as that variable
    this.stack.pop(item);
    // const instruction = this.stack.pop();
    // console.log('Running:', instruction, "Here's the new stck", this.currentStack)
  }

  // get is a computed property and it must return a value
  get nextInstruction() {
    return this.stack[this.stack.length-1];
  }
  get currentStack() {
    return JSON.stringify(this.stack);
  }
}

const mylifo = new Lifo();

mylifo.push('1');
mylifo.push('2');
mylifo.push('3');

mylifo.pop()

console.log(mylifo.currentStack);
console.log(mylifo.nextInstruction);

