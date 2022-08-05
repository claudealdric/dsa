import wordleGuess from './wordle-guess';

interface Input {
	guessWord: string;
	solutionWord: string;
}

describe('wordleGuess', () => {
	const testCases: [Input, string][] = [
		[{ guessWord: 'reads', solutionWord: 'fudge' }, '⬛🟨⬛🟨⬛'],
		[{ guessWord: 'lodge', solutionWord: 'fudge' }, '⬛⬛🟩🟩🟩'],
	];

	test.concurrent.each(testCases)('wordleGuess(%s) = %s', (input, expected) => {
		const { guessWord, solutionWord } = input;
		expect(wordleGuess(guessWord, solutionWord)).toBe(expected);
	});
});
