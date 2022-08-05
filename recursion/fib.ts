// Write a recursive function called fib which accepts a number and returns the nth number in the Fibonacci sequence.

const fib = (num: number): number => {
	const nthFib = [1, 1];

	const helper = (num: number): number => {
		if (nthFib[num - 1]) {
			// If value exists in lookup table, return it
			return <number>nthFib[num - 1];
		} else {
			// Determine the new value
			const newFib: number = helper(num - 1) + helper(num - 2);
			// Save new entry in lookup table
			nthFib[num - 1] = newFib;
			// Return value
			return newFib;
		}
	};

	return helper(num);
};

console.log(fib(1)); // 1
console.log(fib(2)); // 1
console.log(fib(3)); // 2
console.log(fib(4)); // 3
console.log(fib(6)); // 8
console.log(fib(10)); // 55
console.log(fib(28)); // 317,811
console.log(fib(35)); // 9,227,465
