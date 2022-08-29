// Implicity conditions
     //1.  "bare" function calls
     // 2. calling a function expression that's a property of an object

//Functions as Properties of Objects
const byronPoodle = {
    name: "Byron",
    ageInYears: 2,
    warn: function() {
      console.log(`Bark bark bark`);
    }
};
console.log(byronPoodle.name);
console.log(byronPoodle.warn());

const arr = [1,2,3];
console.log(arr.pop());
console.log(arr);


//The Execution Context of Methods
const blakeDoodle = {
    name: "Blake",
    breed: "Labradoodle",
    sonicAttack: "ear-rupturing atomic bark",
    mostHatedThing: "noises in the apartment hallway",
    warn: function() {
      console.log(`${this.name} the ${this.breed} issues an ${this.sonicAttack} when he hears ${this.mostHatedThing}`);
    }
};
blakeDoodle.warn();

const frog = { name: "Kermit" };
const pig = { name: "Miss Piggy" };
const speak = function() { return `It ain't easy being ${this.name}`};
//speak function as a property to each of our objects
frog.speak = speak;
pig.speak = speak;
frog.speak === pig.speak;

console.log(frog.speak());
console.log(pig.speak());




