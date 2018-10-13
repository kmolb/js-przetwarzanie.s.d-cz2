[1, 2, 3, 4].forEach(x => console.log(x));
//dla kazdego elementu tablicy wykonaj console.log
//// funkcja wyzszego rzedu


const arr = [1, 2, 3, 4];
function forEach(arr, fn) {
  for (let i = 0; i < arr.length; i++) {
    fn(arr[i]);
  }
}

forEach(arr, (x) => console.log(x));
forEach(["a", "b", "c"], (x) => console.log(x));
