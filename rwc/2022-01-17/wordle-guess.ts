export default function wordleGuess(
  guessWord: string,
  solutionWord: string
): string {
  const output: string[] = [];
  const solutionLetters: Record<string, Set<number>> = {};

  for (let i = 0; i < solutionWord.length; i += 1) {
    const letter = <string>solutionWord[i];

    if (!solutionLetters[letter]) {
      solutionLetters[letter] = new Set<number>();
    }

    (<Set<number>>solutionLetters[letter]).add(i);
  }

  for (let i = 0; i < guessWord.length; i += 1) {
    const letter = <string>guessWord[i];

    if (!(letter in solutionLetters)) {
      output.push('⬛');
    } else if (solutionLetters[letter]?.has(i)) {
      output.push('🟩');
    } else {
      output.push('🟨');
    }
  }

  return output.join('');
}
