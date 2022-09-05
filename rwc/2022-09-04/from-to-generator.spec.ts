import fromTo from './from-to-generator';

describe('fromTo', () => {
	it('returns a generator that produces values in a range', () => {
		const gen = fromTo(5, 7);
		expect(gen()).toBe(5);
		expect(gen()).toBe(6);
		expect(gen()).toBe(7);
		expect(gen()).toBeUndefined();
		expect(gen()).toBeUndefined();
	});

	it('throws an error when supplied with a start number greater than the end number', () => {
		expect(() => fromTo(5, 4)).toThrow();
	});
});
