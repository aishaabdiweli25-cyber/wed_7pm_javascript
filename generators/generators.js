// function listNames() {
//   let names = ["John", "Mary", "David", "Emily", "Michael"];
//   console.log(names[0]);
//   console.log(names[1]);
//   console.log(names[2]);
//   console.log(names[3]);
//   console.log(names[4]);
// }
// listNames()

function* listNames() {
  let names = ["John", "Mary", "David", "Emily", "Michael"];

  yield names[0];
  yield names[1];
  yield names[2];
  yield names[3];
  yield names[4];
}

// Create the generator
const gen = listNames();

// Get values from the generator
console.log(gen.next().value); // John
console.log(gen.next().value); // Mary
console.log(gen.next().value); // David
console.log(gen.next().value); // Emily
console.log(gen.next().value); // Michael
