// Write a recursive function called productOfArray which takes in an array of numbers and returns the product of them all.
const productOfArray = (arr: number[]): number => {
	// Base case
	if (arr.length === 0) return 1;

	// Recurse
	return (arr[0] as number) * productOfArray(arr.slice(1));
};

console.log(productOfArray([1, 2, 3])); // 6
console.log(productOfArray([2, 3, 5])); // 30
