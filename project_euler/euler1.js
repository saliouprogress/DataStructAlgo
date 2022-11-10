class Euler1 {
  multiple_of_3_or_5 = function (range) {
    let total = 0;

    for (let number = 1; number < range; number++) {
      if (number % 3 == 0 || number % 5 == 0) {
        total += number;
      }
    }
    return total;
  };
}

const euler1 = new Euler1();
console.log(euler1.multiple_of_3_or_5(1000)); // 233168
