// Number to String (a function that takes an array and changes the array value to string if it is negative)
function change(array) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            array[i] = 'Dojo';
        }
    }
    return array;
}
console.log(change([1, 2, 3, -4, 6, -3]));