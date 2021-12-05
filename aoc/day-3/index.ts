import binaryNumbers from './input';
import { getBinaryDiagnostic } from './binary-diagnostic';

const [g1, e1] = getBinaryDiagnostic(binaryNumbers);
console.log(`Part 1: ${(g1 * e1).toLocaleString()}`);
