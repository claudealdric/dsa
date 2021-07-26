const zeroesEndingFactorial = (number: number): number => {
  let zeroes = 0;
  let product = 1;

  for (let i = 1; i <= number; ++i) {
    product *= i;

    while (product % 10 === 0) {
      zeroes += 1;
      product /= 10;
    }

    const lastThreeDigitsOfProduct = product % 1000;
    product = lastThreeDigitsOfProduct;
  }

  return zeroes;
};

export default zeroesEndingFactorial;
