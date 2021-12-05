export function getGammaInBinary(binaryNumbers: string[]): string {
  const bits = (<string>binaryNumbers[0]).length;
  const countThreshold = Math.floor(binaryNumbers.length / 2) + 1;
  const gammaInBinary: string[] = new Array(bits);

  for (let digitIdx = 0; digitIdx < bits; digitIdx += 1) {
    let zeroes = 0;
    let ones = 0;

    for (let numberIdx = 0; numberIdx < binaryNumbers.length; numberIdx += 1) {
      const binaryNumber = <string>binaryNumbers[numberIdx];
      const digit = <string>binaryNumber[digitIdx];

      switch (digit) {
        case '0':
          zeroes += 1;
          break;
        case '1':
          ones += 1;
          break;
        default:
          throw new Error('Invalid bit');
      }

      if (zeroes === countThreshold) {
        gammaInBinary[digitIdx] = '0';
        break;
      } else if (ones === countThreshold) {
        gammaInBinary[digitIdx] = '1';
        break;
      }
    }
  }

  return gammaInBinary.join('');
}

export function getEpsilonFromGammaBinary(binaryNumber: string): string {
  return binaryNumber
    .split('')
    .map((digit) => (digit === '0' ? '1' : '0'))
    .join('');
}

export function convertToDecimal(binaryNumber: string): number {
  return parseInt(binaryNumber, 2);
}

export function getBinaryDiagnostic(binaryNumbers: string[]): [number, number] {
  const gammaBinary = getGammaInBinary(binaryNumbers);
  const epsilonBinary = getEpsilonFromGammaBinary(gammaBinary);

  const gammaRate = convertToDecimal(gammaBinary);
  const epsilonRate = convertToDecimal(epsilonBinary);

  return [gammaRate, epsilonRate];
}
