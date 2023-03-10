let array = [3, 85, 48, 6, 30, 15, 19];
let arr = [0];
function largeNumber(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] > arr[0]) {
            arr[0] = array[i];
        }
    }
    return arr;
}
console.log(largeNumber(array));
document.write('The Largest Number:' + arr);