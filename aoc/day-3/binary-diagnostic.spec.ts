import {
  convertToDecimal,
  getBinaryDiagnostic,
  getBits,
  getCo2ScrubberRating,
  getEpsilonFromGammaBinary,
  getGammaInBinary,
  getMostCommonValue,
  getNthDigitFromBinaries,
  getO2GeneratorRating,
} from './binary-diagnostic';

const binaryNumbers = [
  '00100',
  '11110',
  '10110',
  '10111',
  '10101',
  '01111',
  '00111',
  '11100',
  '10000',
  '11001',
  '00010',
  '01010',
];

describe('getBits', () => {
  it('returns the correct number of bits', () => {
    expect(getBits(binaryNumbers)).toBe(5);
  });
});

describe('getNthDigitFromBinaries', () => {
  it('returns the nth digit of all binary numbers in the array', () => {
    expect(getNthDigitFromBinaries(0, binaryNumbers)).toStrictEqual([
      '0',
      '1',
      '1',
      '1',
      '1',
      '0',
      '0',
      '1',
      '1',
      '1',
      '0',
      '0',
    ]);
  });
});

describe('getMostCommonValue', () => {
  describe('when the counts are not equal', () => {
    it('returns the most common value', () => {
      expect(getMostCommonValue(['1', '1', '1', '0', '0'])).toBe(1);
    });
  });

  describe('when the counts are equal', () => {
    it('returns an invalid number', () => {
      expect(getMostCommonValue(['1', '1', '0', '0'])).toBe(-1);
    });
  });
});

describe('getGammaInBinary', () => {
  it('returns the correct gamma rate', () => {
    expect(getGammaInBinary(binaryNumbers)).toBe('10110');
  });
});

describe('getEpsilonFromGammaBinary', () => {
  it('returns the correct epsilon rate', () => {
    expect(getEpsilonFromGammaBinary('10110')).toBe('01001');
  });
});

describe('convertToDecimal', () => {
  it('converts a binary number to its decimal representation', () => {
    expect(convertToDecimal('10110')).toBe(22);
  });
});

describe('getBinaryDiagnostic', () => {
  it('returns the correct gamma and epsilon rates', () => {
    expect(getBinaryDiagnostic(binaryNumbers)).toStrictEqual([22, 9]);
  });
});

describe('getOxygenGeneratorRating', () => {
  it('returns the correct oxygen generator rating', () => {
    expect(getO2GeneratorRating(binaryNumbers)).toBe(23);
  });
});

describe('getCo2ScrubberRating', () => {
  it('returns the correct CO2 scrubber rating', () => {
    expect(getCo2ScrubberRating(binaryNumbers)).toBe(10);
  });
});
