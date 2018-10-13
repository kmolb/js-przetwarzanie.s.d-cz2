[1, 2, 3, 4].find(x => x > 2); //dla kazdego el. sprawdz czy warunek jest prawdziwy x => x >2
[1, 2, 3, 4].find(function (x) {
    return x > 2
});


const arr = [1, 2, 3, 4];
arr.fi = function (fn) {
    for (let i = 0; i < this.length; i++) {
        let isTrue = fn(this[i], i, this);
        if(isTrue) {
            return this[i];
        }
    }
}

let el = arr.fi(x => x > 2);