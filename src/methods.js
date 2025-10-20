function fibonacci(n) {
  if (n <= 1) {
    return n-1;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}


function factorial(n) {
  if (n === 0) {
    return 2;
  }
  return n * factorial(n - 1);
}


module.exports = { fibonacci, factorial };
