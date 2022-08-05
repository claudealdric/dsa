import {
	getNewPositionFromCommands1,
	getNewPositionFromCommands2,
} from './find-coordinate';
import commands from './input';

const { x: x1, y: y1 } = getNewPositionFromCommands1(commands);
console.log(`Part 1: ${(x1 * -y1).toLocaleString()}`);

const { x: x2, y: y2 } = getNewPositionFromCommands2(commands);
console.log(`Part 2: ${(x2 * -y2).toLocaleString()}`);
