function* generatorFunction() {
  for (var i = 0; i < 5; i++) {
    yield i;
  }
}

const iter = generatorFunction();

console.log(iter.next());
console.log(iter.next());
console.log(iter.return());
console.log(iter.next());
console.log(iter.throw({ message: "error" }));
