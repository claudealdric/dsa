function smallestTimeInterval(times: string[]): string {
  const convertTimeToMinutes = (time: string): number => {
    const hourComponent = time.slice(0, 2);
    const minuteComponent = time.slice(3, 5);
    return Number(hourComponent) * 60 + Number(minuteComponent);
  };

  const seenMinutes = new Set<number>();

  times.forEach((time) => seenMinutes.add(convertTimeToMinutes(time)));

  const sortedMinutes = [];

  for (let i = 0; i < 1440; i += 1) {
    if (seenMinutes.has(i)) {
      sortedMinutes.push(i);
    }
  }

  let smallestTimeInterval = Number.POSITIVE_INFINITY;

  for (let i = 0; i < sortedMinutes.length - 1; i += 1) {
    const earlier = <number>sortedMinutes[i];
    const later = <number>sortedMinutes[i + 1];
    const timeDifferenceInMinutes = later - earlier;
    smallestTimeInterval = Math.min(
      smallestTimeInterval,
      timeDifferenceInMinutes
    );
  }

  return `${smallestTimeInterval} minutes`;
}
