function getPreviousFibonacci(n: number): number {
  let previousFib = -1;
  let fibs: [number, number] = [1, 1];

  while (n > fibs[1]) {
    fibs = [fibs[1], fibs[0] + fibs[1]];
  }

  if (n === fibs[1]) {
    [previousFib] = fibs;
  }

  return previousFib;
}

export default getPreviousFibonacci;
