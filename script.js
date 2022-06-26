function getCopy(list, someFunction) {
    newArray = list.slice();
    if(typeof someFunction === `function`) {
        for(let i = 0; i < newArray.length; i++) {
            if(typeof newArray[i] === `number`) {
                newArray[i] = someFunction(newArray[i]);
            }
        }
    }
    return newArray;
}

function mult(value) {
   return value *= 10;
}

let someList = [1, 2, 3, 4, 5, true, `someString`];
let newList = getCopy(someList, mult);
console.log(newList);