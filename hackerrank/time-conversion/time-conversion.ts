export default function convertTime(time: string): string {
  let hour = Number(time.slice(0, 2));
  const middle = time.slice(2, 8);
  const amPm = time.slice(8, 10);
  hour = amPm === 'AM' ? hour % 12 : (hour % 12) + 12;
  return `${hour.toString().padStart(2, '0')}${middle}`;
}
