[1, 2, 3, 4].forEach(x => console.log(x));
//dla kazdego elementu tablicy wykonaj console.log
//// funkcja wyzszego rzedu


const arr = [1, 2, 3, 4];
arr.fe = function (fn) {
  for (let i = 0; i < this.length; i++) {
    fn(this[i], i, this);  // this ==arr
  }
}

arr.fe((x) => console.log(x)); // wskaznikiem jest arr
let a2 = ["a", "b", "c"]
a2.fe = arr.fe;
a2.fe ((x) => console.log(x)); // wskaznikiem jest a2
