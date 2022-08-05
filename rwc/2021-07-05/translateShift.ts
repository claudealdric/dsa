// Imagine your users are all typing slightly incorrectly, in that
// they shifted their hands one key to the right. Write a function
// that translates what they mean to say.

export default function translateShift(str: string): string {
	// Create a mapping
	const charMapping: Record<string, string> = {
		w: 'q',
		e: 'w',
		r: 'e',
		t: 'r',
		y: 't',
		u: 'y',
		i: 'u',
		o: 'i',
		p: 'o',
		'[': 'p',
		s: 'a',
		d: 's',
		f: 'd',
		g: 'f',
		h: 'g',
		j: 'h',
		k: 'j',
		l: 'k',
		';': 'l',
		x: 'z',
		c: 'x',
		v: 'c',
		b: 'v',
		n: 'b',
		m: 'n',
		'<': 'm',
	};

	// Create a translated characters array
	// Iterate through the characters of the original string
	// Map each of the characters of the original string
	const translatedChars = str
		.split('')
		.map((char) => (char in charMapping ? charMapping[char] : char));

	// Return the stringified version of the translated characters array
	return translatedChars.join('');
}
