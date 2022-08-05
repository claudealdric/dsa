import getPreviousFibonacci from './get-previous-fibonacci';

describe('getPreviousFibonacci', () => {
	describe('valid Fibonacci number inputs', () => {
		const testCases = [
			[1, 1],
			[2, 1],
			[3, 2],
			[5, 3],
			[8, 5],
			[13, 8],
			[21, 13],
		];

		test.concurrent.each(testCases)(
			'getPreviousFibonacci(%s) = %s',
			(input, expected) => {
				expect(getPreviousFibonacci(input)).toBe(expected);
			}
		);
	});

	describe('invalid Fibonacci number inputs', () => {
		const nonFibonacciNumbers = [-10, -1, 0, 4, 6, 7, 9, 10, 11, 12];
		const testCases = nonFibonacciNumbers.map((num) => [num, -1]);

		test.concurrent.each(testCases)(
			'getPreviousFibonacci(%s) = %s',
			(input, expected) => {
				expect(getPreviousFibonacci(input)).toBe(expected);
			}
		);
	});
});
