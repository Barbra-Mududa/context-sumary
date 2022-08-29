//Explicitly Override Context with call and apply
const asgardianBrothers = [
    {
      firstName: "Thor",
      familyName: "Odinsson"
    },
    {
      firstName: "Loki",
      familyName: "Laufeysson-Odinsson"
    }
  ]
  
  function intro(person, line) {
    return `${person.firstName} ${person.familyName} says: ${line}`
}
const phrase = "I like this brown drink very much, bring me another!"
intro(asgardianBrothers[0], phrase) //=> Thor Odinsson says: I like this brown drink very much, bring me another!

function createTimeInEvent(employee, dateStamp){ /* */ }
function createTimeOutEvent(employee, dateStamp){ /* */ }
function hoursWorkedOnDate(employee, soughtDate){ /* */ }

function introWithContext(line){
    return `${this.firstName} ${this.familyName} says: ${line}`
  }
  
introWithContext.call(asgardianBrothers[0], phrase)
//=> Thor Odinsson says: I like this brown drink very much, bring me another!
  
introWithContext.apply(asgardianBrothers[0], [phrase])
//=> Thor Odinsson says: I like this brown drink very much, bring me another!
  
intro(asgardianBrothers[0], phrase) === introWithContext.call(asgardianBrothers[0], phrase) //=> true
intro(asgardianBrothers[0], phrase) === introWithContext.apply(asgardianBrothers[0], [phrase]) //=> true
  
const complaint = "I was falling for thirty minutes!"
intro(asgardianBrothers[1], complaint) === introWithContext.call(asgardianBrothers[1], complaint) //=> true
intro(asgardianBrothers[1], complaint) === introWithContext.apply(asgardianBrothers[1], [complaint]) //=> true

