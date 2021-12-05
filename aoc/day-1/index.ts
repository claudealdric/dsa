import depthIncreaseCount from './depth-increase-count';
import depths from './input';
import threeDepthsSum from './three-depths-sum';

console.log('Part 1:', depthIncreaseCount(depths));
console.log('Part 2:', depthIncreaseCount(threeDepthsSum(depths)));
