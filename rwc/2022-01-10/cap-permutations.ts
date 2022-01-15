function convertNumberToBinaryString(num: number): string {
  return num.toString(2);
}

export default function capPermutations(str: string): string[] {
  const permutations: Set<string> = new Set();
  const binaryStrings: string[] = [];
  const chars = str.split('');

  for (let i = 0; i < 2 ** str.length; i += 1) {
    let binaryString = convertNumberToBinaryString(i);
    binaryString = binaryString.padStart(str.length, '0');
    binaryStrings.push(binaryString);
  }

  binaryStrings.forEach((binaryString) => {
    const shouldCapitalize = binaryString.split('').map(Number);
    const newChars = chars.map((char, i) =>
      shouldCapitalize[i] ? char.toUpperCase() : char.toLowerCase()
    );
    permutations.add(newChars.join(''));
  });

  return Array.from(permutations);
}
