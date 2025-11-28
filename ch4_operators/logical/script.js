// AND examples
console.log(true && true); // true
console.log(true && false); // false
console.log(5 > 2 && 10 > 5); // true

// Logical OR (||)
console.log(true || false); // true
console.log(false || false); // false
console.log(5 > 10 || 10 > 5); // true

// Logical NOT (!)
console.log(!true); // false
console.log(!false); // true
console.log(!(5 > 3)); // false

// Combined examples
var age = 20;
var hasTicket = true;

if (age >= 18 && hasTicket)
 {
  console.log("You can enter the stadium");
} 
if (age < 18 ||hasTicket) {
  console.log("You can enter the stadium with a ticket");
}


