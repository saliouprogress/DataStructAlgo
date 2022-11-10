class Fobonacci {
  fib = function (n) {
    if (n == 0 || n == 1) {
      return 1;
    }
    let fibpre1 = 1,
      fibpre = 1;
    let result = 0;
    for (let i = 2; i <= n; i++) {
      let cur = fibpre1 + fibpre;
      fibpre1 = fibpre;
      fibpre = cur;
      if (cur % 2 == 0) {
        result += cur;
      }
      if (cur >= 4 * Math.pow(10, 6)) {
        break
      }
    }
    return result;
  };
}

const fib = new Fobonacci()

console.log(fib.fib(1000)) // 4613732
