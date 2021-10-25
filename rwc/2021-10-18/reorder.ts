export function reorderCheck<T>(elements: T[], indices: number[]): T[] {
  const reorderedArray = Array(elements.length);

  for (let i = 0; i < elements.length; i += 1) {
    const element = elements[i];
    const index = indices[i] as number;
    reorderedArray[index] = element;
  }

  return reorderedArray;
}

export function reorder<T>(elements: T[], indices: number[]): T[] {
  let currentIndex = 0;
  let targetIndex = indices[0];

  for (let iteration = 0; iteration < elements.length - 1; iteration += 1) {
    let whileIterations = 0;

    while (currentIndex === targetIndex) {
      currentIndex = (currentIndex + 1) % elements.length;
      targetIndex = indices[currentIndex];

      whileIterations += 1;

      if (whileIterations + 1 >= elements.length) {
        return elements;
      }
    }

    targetIndex = indices[currentIndex] as number;
    [elements[currentIndex], elements[targetIndex]] = [
      elements[targetIndex] as T,
      elements[currentIndex] as T,
    ];

    [indices[currentIndex], indices[targetIndex]] = [
      indices[targetIndex] as number,
      indices[currentIndex] as number,
    ];
  }

  return elements;
}
