const fib = (n) => {
  // Terminate early if n = 0 or n = 1
  if (n < 2) return n;

  // Set up variables for n = 2
  let secondPrevious = 0;
  let firstPrevious = 1;
  let nextFib = secondPrevious + firstPrevious;

  // Loop won't run for n = 2
  for (let i = 3; i <= n; ++i) {
    [secondPrevious, firstPrevious] = [firstPrevious, nextFib];
    nextFib = secondPrevious + firstPrevious;
  }

  return nextFib;
};

for (let n = 0; n <= 10; ++n) {
  console.log(fib(n));
}
