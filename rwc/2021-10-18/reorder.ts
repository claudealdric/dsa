export default function reorder<T>(elements: T[], indices: number[]): T[] {
  const reorderedArray = Array(elements.length);

  for (let i = 0; i < elements.length; i += 1) {
    const element = elements[i];
    const index = indices[i] as number;
    reorderedArray[index] = element;
  }

  return reorderedArray;
}
