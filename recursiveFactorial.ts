// Write a recursive function factorial which accepts a number and returns the factorial of that number. A factorial is the product of an integer and all the integers below it.

function factorial(num: number): number {
  // Base case
  if (num < 1) return 1;
  return num * factorial(num - 1);
}

for (let i = 0; i <= 5; ++i) {
  console.log(factorial(i));
}
