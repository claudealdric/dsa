import convertTime from './time-conversion';

describe('convertTime', () => {
	const testCases = [
		['12:01:00PM', '12:01:00'],
		['12:01:00AM', '00:01:00'],
		['12:59:59PM', '12:59:59'],
		['12:59:59AM', '00:59:59'],
		['09:10:11PM', '21:10:11'],
		['09:10:11AM', '09:10:11'],
	];

	test.concurrent.each(testCases)('convertTime(%s) = %s', (arg, expected) => {
		expect(convertTime(arg)).toBe(expected);
	});
});
