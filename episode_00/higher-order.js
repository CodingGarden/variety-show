function makeAdder(a) {
  // closure!!!
  return (b) => a + b;
}

const tenAdder = makeAdder(10);

const result = tenAdder(20);
console.log(result);

const result2 = tenAdder(40);
console.log(result2);

const fiveAdder = makeAdder(5);

const result3 = fiveAdder(20);
console.log(result3);

const result4 = tenAdder(40);
console.log(result4);
