// Write a recursive function called fib which accepts a number and returns the nth number in the Fibonacci sequence.

function fib(num: number): number {
  // Base case
  if (num <= 2) {
    return 1;
  }

  // Recursion
  return fib(num - 1) + fib(num - 2);
}

console.log(fib(4)); // 3
console.log(fib(10)); // 55
console.log(fib(28)); // 317,811
console.log(fib(35)); // 9,227,465
