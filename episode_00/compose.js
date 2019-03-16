function compose(...fns) {
  return (a) => {
    if (!fns.length) return a;
    fns.reverse();
    let result = fns[0](a);
    for (let i = 1; i < fns.length; i++) {
      result = fns[i](result);
    }
    return result;
  };
}

const addOne = (a) => a + 1;
const multTwo = (b) => b * 2;

console.log(compose(multTwo, addOne)(5), 12)
console.log(compose(addOne, multTwo, addOne, addOne)(2), 9)
console.log(compose(addOne)(3), 4)
console.log(compose()(10), 10)
