export function getBits(binaryNumbers: string[]): number {
  return (<string>binaryNumbers[0]).length;
}

export function getNthDigitsFromBinaries(
  index: number,
  binaryNumbers: string[]
): (0 | 1)[] {
  return binaryNumbers.map(
    (binaryNumber) => <0 | 1>Number(binaryNumber[index])
  );
}

export function getMostCommonValue(digits: (0 | 1)[]): -1 | 0 | 1 {
  const countThreshold = Math.floor(digits.length / 2) + 1;
  let zeroes = 0;
  let ones = 0;

  for (let i = 0; i < digits.length; i += 1) {
    const digit = digits[i];

    switch (digit) {
      case 0:
        zeroes += 1;
        break;
      case 1:
        ones += 1;
        break;
      default:
        throw new Error('Invalid bit');
    }

    if (zeroes === countThreshold) {
      return 0;
    }

    if (ones === countThreshold) {
      return 1;
    }
  }

  return -1;
}

export function getGammaBinary(binaryNumbers: string[]): string {
  const bits = getBits(binaryNumbers);
  const gammaInBinary: string[] = new Array(bits);

  for (let digitIdx = 0; digitIdx < bits; digitIdx += 1) {
    const currentDigits = getNthDigitsFromBinaries(digitIdx, binaryNumbers);
    const mostCommonValue = getMostCommonValue(currentDigits);

    if (mostCommonValue === -1)
      throw new Error('There were an equal number of zeroes and ones');

    gammaInBinary[digitIdx] = mostCommonValue.toString();
  }

  return gammaInBinary.join('');
}

export function getEpsilonBinaryFromGammaBinary(gammaBinary: string): string {
  return gammaBinary
    .split('')
    .map((digit) => (digit === '0' ? '1' : '0'))
    .join('');
}

export function convertToDecimal(binaryNumber: string): number {
  return parseInt(binaryNumber, 2);
}

export function getBinaryDiagnostic(binaryNumbers: string[]): [number, number] {
  const gammaBinary = getGammaBinary(binaryNumbers);
  const epsilonBinary = getEpsilonBinaryFromGammaBinary(gammaBinary);

  const gammaRate = convertToDecimal(gammaBinary);
  const epsilonRate = convertToDecimal(epsilonBinary);

  return [gammaRate, epsilonRate];
}

export function getO2GeneratorRating(binaryNumbers: string[]): number {
  const bits = getBits(binaryNumbers);
  let binaryNumbersCopy = [...binaryNumbers];

  for (let i = 0; i < bits; i += 1) {
    const digits = getNthDigitsFromBinaries(i, binaryNumbersCopy);
    let mostCommonValue = getMostCommonValue(digits);
    mostCommonValue = mostCommonValue === -1 ? 1 : mostCommonValue;

    binaryNumbersCopy = binaryNumbersCopy.filter(
      (binaryNumber) => <0 | 1>Number(binaryNumber[i]) === mostCommonValue
    );

    if (binaryNumbersCopy.length === 1) break;
  }

  const oxygenGeneratorRatingInBinary = <string>binaryNumbersCopy[0];

  return convertToDecimal(oxygenGeneratorRatingInBinary);
}

export function getCo2ScrubberRating(binaryNumbers: string[]): number {
  const bits = getBits(binaryNumbers);
  let binaryNumbersCopy = [...binaryNumbers];

  for (let i = 0; i < bits; i += 1) {
    const digits = getNthDigitsFromBinaries(i, binaryNumbersCopy);
    let mostCommonValue = getMostCommonValue(digits);
    mostCommonValue = mostCommonValue === -1 ? 1 : mostCommonValue;

    binaryNumbersCopy = binaryNumbersCopy.filter(
      (binaryNumber) => <0 | 1>Number(binaryNumber[i]) !== mostCommonValue
    );

    if (binaryNumbersCopy.length === 1) break;
  }

  const co2ScrubberRating = <string>binaryNumbersCopy[0];

  return convertToDecimal(co2ScrubberRating);
}

export function getLifeSupportRating(binaryNumbers: string[]): number {
  const o2GeneratorRating = getO2GeneratorRating(binaryNumbers);
  const co2ScrubberRating = getCo2ScrubberRating(binaryNumbers);

  return o2GeneratorRating * co2ScrubberRating;
}
