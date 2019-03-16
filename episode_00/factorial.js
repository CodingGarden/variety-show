// non-recursive
function factorial(n) {
  // place to store the result - initialized to n
  let result = n;
  // iterate from n - 1 down to 1
  for (let i = n - 1; i >= 1; i--) {
    // set result to itself times i
    result = result * i;
  }
  return result;
}

console.log(factorial(5), 120);

// recursive
function factorialRecursive(n) {
  if (n === 1) return 1;
  return n * factorialRecursive(n - 1);
}

console.log(factorialRecursive(5), 120);