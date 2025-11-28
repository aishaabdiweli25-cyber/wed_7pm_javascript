// Basic assignment =
var  x = 10;
console.log(x); // 10

// Addition assignment +=
x = x + 5;

console.log(x); // 15

// Subtraction assignment -=
x -= 3; // x = x - 3
console.log(x); // 12

// Multiplication assignment *=
x *= 2; // x = x * 2
console.log(x); // 24

// Division assignment /=
x /= 4; // x = x / 4
console.log(x); // 6

// Modulus assignment %=
x %= 4; // x = x % 4
console.log(x); // 2

// Exponent assignment **=
x **= 3; // x = x ** 3
console.log(x); // 8

// Bitwise AND assignment &=
x &= 5; // x = x & 5
console.log(x);

// Bitwise OR assignment |=
x |= 2; // x = x | 2
console.log(x);

// Bitwise XOR assignment ^=
x ^= 3; // x = x ^ 3
console.log(x);

// Logical assignment operators
let y = null;
y ??= 10; // nullish coalescing assignment
console.log(y); // 10

let z = false;
z ||= true; // OR assignment
console.log(z); // true

let w = true;
w &&= false; // AND assignment
console.log(w); // false
