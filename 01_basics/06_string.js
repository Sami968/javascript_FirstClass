const myName= "Sami"
const myNum= 96
console.log("My name is "+myName+" my number in exam is "+myNum); // But this is not good way to concatenate different strings


console.log(`My name is ${myName} My number in exam ${myNum}`); // this is the good way 

// Now i am going to create object function 

const gameName = new String("Samirana")
console.log(gameName);
  
console.log(gameName[0]);             // Value at index at o
console.log(gameName.__proto__);       // prototype of gameName is object
console.log(gameName.charAt(4));         // character at position 4
console.log(gameName.length);            // the length of gameName
console.log(gameName.indexOf('a'));       // the index of a
console.log(gameName.toUpperCase());      // convert to upperCase
console.log(gameName.slice(0,3));        // value between o to 3 index | it also accept - values
console.log(gameName.substring(1, 4));     // value between o to 3 index | it does not  accept - values


const newString='   asadullah_khan     '          
 console.log(newString);
console.log(newString.trim());          // remove extra spaces from string 