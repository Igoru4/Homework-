

///task 1
const person = {
    firstName: 'Ivan',
    secondName: "Ivanov",
}
console.log(person)
const newPerson = Object.assign({}, person)
newPerson.firstName = "Petro"
newPerson.secondName = "Petriv"
console.log(person);
console.log(newPerson)

///task 2
const MyMath = {
    a: 5,
    b: 2,
    sum: () => {
      console.log( MyMath.a + MyMath.b)
    },
    multiplication: () => {
      console.log(MyMath.a * MyMath.b)
    },
    division: () => {
        console.log(MyMath.a / MyMath.b)
    },
    subtraction: () => {
      console.log(MyMath.a - MyMath.b)
    }
  }
  MyMath.sum()
  MyMath.multiplication()
  MyMath.division()
  MyMath.subtraction()








