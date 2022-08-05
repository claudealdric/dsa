import translateShift from './translateShift';

test('The function returns the correct translated value', () => {
	expect(translateShift(';p; epe')).toBe('lol wow');
	expect(translateShift('vtsmnrttu')).toBe('cranberry');
});
