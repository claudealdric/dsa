function smallestTimeInterval(times: string[]): string {
  const convertTimeToMinutes = (time: string): number => {
    const hourComponent = time.slice(0, 2);
    const minuteComponent = time.slice(3, 5);
    return Number(hourComponent) * 60 + Number(minuteComponent);
  };

  const seenMinutes: boolean[] = Array(24 * 60).fill(false);

  times.forEach((time) => (seenMinutes[convertTimeToMinutes(time)] = true));

  let left = 0;
  let right = 0;
  let smallestTimeInterval = Number.POSITIVE_INFINITY;

  while (right < seenMinutes.length) {
    while (seenMinutes[left] === false) {
      left += 1;
    }

    right = left + 1;

    while (seenMinutes[right] === false) {
      right += 1;
    }

    if (right < seenMinutes.length) {
      const timeDifferenceInMinutes = right - left;
      smallestTimeInterval = Math.min(
        smallestTimeInterval,
        timeDifferenceInMinutes
      );

      left = right;
    }
  }

  return `${smallestTimeInterval} minutes`;
}
