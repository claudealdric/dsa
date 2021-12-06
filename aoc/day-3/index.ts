import binaryNumbers from './input';
import { getBinaryDiagnostic, getLifeSupportRating } from './binary-diagnostic';

const [gamma, epsilon] = getBinaryDiagnostic(binaryNumbers);
console.log(`Part 1: ${(gamma * epsilon).toLocaleString()}`);

console.log(`Part 2: ${getLifeSupportRating(binaryNumbers).toLocaleString()}`);
