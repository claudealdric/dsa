import {
  convertToDecimal,
  getBinaryDiagnostic,
  getEpsilonFromGammaBinary,
  getGammaInBinary,
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
