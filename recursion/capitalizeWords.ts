// Write a recursive function called capitalizeWords. Given an array of words, return a new array containing each word capitalized.
import _ from 'lodash';

function capitalizeWords(arr: string[]): string[] {
	// Base cases
	if (arr.length === 1) return [(arr[0] ?? '').toUpperCase()];
	if (arr.length === 0) return [];

	// Recursion
	const currentStr: string = arr[0] ?? '';
	const newStr: string = currentStr.toUpperCase();
	return [newStr].concat(capitalizeWords(arr.slice(1)));
}

// Tests
console.log(
	_.isEqual(capitalizeWords(['what', 'is', 'recursion']), [
		'WHAT',
		'IS',
		'RECURSION',
	])
);
console.log(_.isEqual(capitalizeWords([]), []));
