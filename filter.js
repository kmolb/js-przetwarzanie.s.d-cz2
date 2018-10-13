// 07 - funkcja filter  (sprawdza warunek logiczny i zwraca wiele elementow)
// Tworzy nową tablicę z wszystkimi elementami, które przechodzą test określony w postaci funkcji.

const people = [
    { name: 'Janek', age: 31 },
    { name: 'Wiola', age: 35 },
    { name: 'Mateusz', age: 29 },
    { name: 'Kamila', age: 25 },
    { name: 'Olaf', age: 33 },
    { name: 'Sylwia', age: 25 }
  ];
  
  people.filter  = function (fn) {
    const newArr = [];  //deklaracja nowej tablicy
    for (let i = 0; i < this.length; i++) {
      if (fn(this[i], i, this)) {
        newArr.push (this[i]);
      }
    }
    return newArr; // zwracamy nowa tablece z wynikami
  }
