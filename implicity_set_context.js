//class 
//describes a group or category of some sort and specifies the characteristics 
//that all instances of the class
class Poodle{
    constructor(name, pronoun){
      this.name = name;
      this.pronoun = pronoun;
      this.sonicAttack = "ear-rupturing atomic bark";
      this.mostHatedThing = "noises in the apartment hallway";
    }
  
    warn() {
      console.log(`${this.name} issues an ${this.sonicAttack} when ${this.pronoun} hears ${this.mostHatedThing}`);
    }
}
const byron = new Poodle("Byron", "he");
console.log(byron.warn()); 
