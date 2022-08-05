interface Coordinate {
	x: number;
	y: number;
}

interface CoordinateWithAim extends Coordinate {
	aim: number;
}

export enum Direction {
	Forward = 'forward',
	Down = 'down',
	Up = 'up',
}

function getVectorFromCommand(command: string): [string, number] {
	const [direction, magnitudeString] = <[Direction, string]>command.split(' ');
	const magnitude = Number(magnitudeString);

	return [direction, magnitude];
}

export function getNewPositionFromCommands1(
	commands: string[],
	initialPosition: Coordinate = { x: 0, y: 0 }
): Coordinate {
	const currentPosition = <Coordinate>{ ...initialPosition };

	commands.forEach((command) => {
		const [direction, magnitude] = getVectorFromCommand(command);

		switch (direction) {
			case Direction.Forward:
				currentPosition.x += magnitude;
				break;
			case Direction.Down:
				currentPosition.y -= magnitude;
				break;
			case Direction.Up:
				currentPosition.y += magnitude;
				break;
			default:
				throw new Error(`Invalid direction: ${direction}`);
		}
	});

	return currentPosition;
}

export function getNewPositionFromCommands2(
	commands: string[],
	initialParameters: CoordinateWithAim = { x: 0, y: 0, aim: 0 }
): CoordinateWithAim {
	const currentParameters = <CoordinateWithAim>{ ...initialParameters };

	commands.forEach((command) => {
		const [direction, magnitude] = getVectorFromCommand(command);

		switch (direction) {
			case Direction.Forward:
				currentParameters.x += magnitude;
				currentParameters.y += magnitude * currentParameters.aim;
				break;
			case Direction.Down:
				currentParameters.aim -= magnitude;
				break;
			case Direction.Up:
				currentParameters.aim += magnitude;
				break;
			default:
				throw new Error(`Invalid direction: ${direction}`);
		}
	});

	return currentParameters;
}
