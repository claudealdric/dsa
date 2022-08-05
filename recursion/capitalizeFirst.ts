// Write a recursive function called capitalizeFirst. Given an array of strings, capitlize the first letter of each string in the array.
import _ from 'lodash';

function capitalizeFirst(arr: string[]): string[] {
	// Base case
	if (arr.length === 0) return [];
	// Recursion
	const str: string = <string>arr[0];
	const newStr: string = (str[0] ?? '').toUpperCase() + str.slice(1);
	return [newStr, ...capitalizeFirst(arr.slice(1))];
}

console.log(_.isEqual(capitalizeFirst([]), []));
console.log(
	_.isEqual(capitalizeFirst(['car', 'taco', 'banana']), [
		'Car',
		'Taco',
		'Banana',
	])
);
