export default function containedItems(
  s: string,
  start: number,
  end: number
): number {
  const wall = '|';
  const item = '*';
  let left = start;
  let right = end - 1;
  let totalItems = 0;

  while (s[left] !== wall && left < right) {
    left += 1;
  }

  while (s[right] !== wall && left < right) {
    right -= 1;
  }

  for (let i = left + 1; i < right; i += 1) {
    const char = s[i];
    totalItems += char === item ? 1 : 0;
  }

  return totalItems;
}
