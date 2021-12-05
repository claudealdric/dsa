import {
  Direction,
  getNewPositionFromCommands1,
  getNewPositionFromCommands2,
} from './find-coordinate';

describe('getNewPositionFromCommands1', () => {
  it('returns the correct position for a forward command', () => {
    const direction = Direction.Forward;
    const magnitude = 5;
    const command = `${direction} ${magnitude}`;

    expect(getNewPositionFromCommands1([command])).toStrictEqual({
      x: magnitude,
      y: 0,
    });
  });

  it('returns the correct position for a downward command', () => {
    const direction = Direction.Down;
    const magnitude = 2;
    const command = `${direction} ${magnitude}`;

    expect(getNewPositionFromCommands1([command])).toStrictEqual({
      x: 0,
      y: -magnitude,
    });
  });

  it('returns the correct position for an upward command', () => {
    const direction = Direction.Up;
    const magnitude = 3;
    const command = `${direction} ${magnitude}`;

    expect(getNewPositionFromCommands1([command])).toStrictEqual({
      x: 0,
      y: magnitude,
    });
  });

  it('returns the correct position for multiple commands', () => {
    const commands = [
      `${Direction.Forward} 1`,
      `${Direction.Down} 3`,
      `${Direction.Up} 5`,
    ];

    expect(getNewPositionFromCommands1(commands)).toStrictEqual({
      x: 1,
      y: 2,
    });
  });
});

describe('getNewPositionFromCommands2', () => {
  it('returns the correct position for a forward command', () => {
    const direction = Direction.Forward;
    const magnitude = 5;
    const command = `${direction} ${magnitude}`;

    expect(getNewPositionFromCommands2([command])).toStrictEqual({
      x: magnitude,
      y: 0,
      aim: 0,
    });
  });

  it('returns the correct position for a downward command', () => {
    const direction = Direction.Down;
    const magnitude = 2;
    const command = `${direction} ${magnitude}`;

    expect(getNewPositionFromCommands2([command])).toStrictEqual({
      x: 0,
      y: 0,
      aim: -2,
    });
  });

  it('returns the correct position for an upward command', () => {
    const direction = Direction.Up;
    const magnitude = 3;
    const command = `${direction} ${magnitude}`;

    expect(getNewPositionFromCommands2([command])).toStrictEqual({
      x: 0,
      y: 0,
      aim: 3,
    });
  });

  it('returns the correct position for multiple commands', () => {
    const commands = [
      `${Direction.Forward} 5`,
      `${Direction.Down} 5`,
      `${Direction.Forward} 8`,
      `${Direction.Up} 3`,
      `${Direction.Down} 8`,
      `${Direction.Forward} 2`,
    ];

    expect(getNewPositionFromCommands2(commands)).toStrictEqual({
      x: 15,
      y: -60,
      aim: -10,
    });
  });
});
