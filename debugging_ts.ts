// 1)
var myString: string;
// I can assign myString like this:
myString = "Bee stinger"
// Why is there a problem with this? What can I do to fix this?
myString = "9";
//myString was assigned to be type string, therefore could not be equal to an integer.

// 2)
function sayHello(name: string){
    return `Hello, ${name}!`;
 }
 // This is working great:
 console.log(sayHello("Kermit"));
 // Why isn't this working? I want it to return "Hello, 9!"
 console.log(sayHello("9"));
 //an integer could not be entered as the argument.

//  3)
 function fullName(firstName: string, lastName: string, middleName: string){
    let fullName = `${firstName} ${middleName} ${lastName}`;
    return fullName;
 }
 // This works:
 console.log(fullName("Mary", "Moore", "Tyler"));
 // What do I do if someone doesn't have a middle name?
 console.log(fullName("Jimbo", "", "Jones"));
 //The function has three parameters, and so must take three arguments. Even if the string is empty.

//  4)
interface Student {
    firstName: string;
    lastName: string;
    belts: number;
 }
 function graduate(ninja: Student){
    return `Congratulations, ${ninja.firstName} ${ninja.lastName}, you earned ${ninja.belts} belts!`;
 }
 const christine = {
    firstName: "Christine",
    lastName: "Yang",
    belts: 2
 }
 const jay = {
    firstName: "Jay",
    lastName: "Patel",
    belts: 4
 }
 // This seems to work fine:
 console.log(graduate(christine));
 // This one has problems:
 console.log(graduate(jay));
 // belts was misspelled as the singular "belt"

//  5)
class Ninja {
    fullName: string;
    constructor(
       public firstName: string,
       public lastName: string){
          this.fullName = `${firstName} ${lastName}`;
       }
    debug(){
       console.log("Console.log() is my friend.")
    }
 }
 // This is not making an instance of Ninja, for some reason:
 const shane = new Ninja("shane", "");
 // Since I'm having trouble making an instance of Ninja, I decided to do this:
 const turing = new Ninja("alan", "turing");
 
 // Now I'll make a study function, which is a lot like our graduate function from above:
 function study(programmer: Ninja){
    return `Ready to whiteboard an algorithm, ${programmer.fullName}?`
 }
 // Now this has problems:
 console.log(study(turing));
//  I re-wrote both ninja instances to include "new" and both arguments in the constructor.

//  6)
var increment = x => x + 1;
// This works great:
console.log(increment(3));
var square = x => { x * x };
// This is not showing me what I want:
console.log(square(4));
// This is not working:
var multiply = (x,y) => x * y;
// Nor is this working:
var sum = (x, y) => x + y;
var product = (x, y) => x * y;
var difference = (x, y) => Math.abs(x - y);
// Since the function was taking the same parameters and wanting three different results, I made three seperate functions instead; each with the desired variable.
// I also removed the return statement at the bottom as it was redundant.

// 7)
class Elephant {
    constructor(public age: number){}
     birthday =  ()=> {
        this.age++;
    }
 }
 const babar = new Elephant(8);
 setTimeout(babar.birthday, 1000)
 setTimeout(function(){
    console.log(`Babar's age is ${babar.age}.`)
    }, 2000)
 // Why didn't babar's age change? Fix this by using an arrow function in the Elephant class.
 // ES5 function syntax was referring to the window, where the ES6 => refers to the Elephant class.