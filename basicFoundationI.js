// //1.
// function to255 (num) {
//     var array = [];
//     for (var x = 1; x <= num; x++) {
//         array.push(x);
//     }
//     return array;
// }
// var y = to255(255);
// console.log(y);

//2.
// function evenTo1000 (num) {
//     var sum = 0;
//     for (var x = 1; x <= num; x++) {
//         if (x % 2 == 0) {
//             sum += x;
//         }
//     }
//     return sum;
// }
// var y = evenTo1000(1000);
// console.log(y);

//3.
// function oddTo5000 (num) {
//     var x = 1;
//     var sum = 0;
//     while(x <= num) {
//         sum += x; x = x +2;
//     }
//     return sum;
// }
// var y = oddTo5000(5000);
// console.log(y);

// //4.
// function iterateArray (array) {
//     var sum = 0;
//     for (var x=0; x <= array.length -1; x++) {
//         sum += array[x];
//     }
//     return sum;
// }
// var y = iterateArray([2,4,6]);
// console.log(y);

// //5.
// function findMax (array) {
//     var max = 0;
//     for (var x = 0; x <= array.length -1; x++) {
//         var temp = array[x];
//         if (max <= temp) {
//             max = temp;
//         }
//     }
//     return max;
// }
// var y = findMax([4,4,6,7,3,90,15,35]);
// console.log(y);

// //6.
// function findAvg (array) {
//     var sum = 0;
//     var avg = 0;
//     for (var x = 0; x <= array.length - 1; x++) {
//         sum += array[x];
//         avg = sum / array.length;
//     }
//     return avg;
// }
// var y = findAvg([1,3,5,7,20]);
// console.log(y);

// //7.
// function arrayOdd (num) {
//     var array = [];
//     for (var x = 0; x < num; x++) {
//         x++;
//         array.push(x);
//     }
//     return array;
// }
// var y = arrayOdd(50);
// console.log(y);

// //8.
// function greaterThanY (array) {
//     var y = 3;
//     var count = 0;
//     for (var x = 0; x <= array.length-1; x++) {
//         if (array[x] > y){
//             count += 1;
//         }
//         else {
//             console.log("This number was not greater than Y")
//         }
//     }
//     return count;
// }
// var z = greaterThanY([1,3,5,7,11,304,2,-5,-25]);
// console.log(z);

// //9. Squares
// function squares (array) {
//     var newArray = [];
//     for (var x = 0; x <= array.length-1; x++) {
//         temp = array[x] * array[x];
//         newArray.push(temp);
//     }
//     return newArray;
// }
// var y = squares([1,5,10,-2]);
// console.log(y);

// //10. Negatives
// function negatives (array) {
//     var newArray = []
//     for (var x = 0; x <= array.length-1; x++) {
//         if (array[x] > 0) {
//             newArray.push(array[x]);
//         }
//         else {
//             array[x] = 0;
//             newArray.push(array[x]);
//         }
//     }
//     return newArray;
// }
// var y = negatives([1,5,10,-2,7,-18,202]);
// console.log(y);

//11.
// function maxMinAvg (array) {
//     var max = 0;
//     var min = 0;
//     var sum = 0;
//     var avg = 0;
//     var newArray = [];
//     for (var x = 0; x <= array.length-1; x++) {
//         var temp = array[x];
//         if (max <= temp) {
//             max = temp;
//         }
//         newArray.push(max);
//     }
//     for (var x = 0; x <= array.length - 1; x++) {
//         if (min >= array[x]) {
//             min = temp;
//         }
//         newArray.push(min);
//     }
//     for (var x = 0; x <= array.length - 1; x++) {
//         sum += array[x];
//         avg = sum / array.length;
//         newArray.push(avg);
//     }
//     return newArray;
// }
// var y = maxMinAvg([1,5,10,-2]);
// console.log(y);

// //12.
function swapValues (array) {
    var temp = array[0];
    var temp2 = array[array.length - 1];
    for (var x = 0; x <= array.length-1; x++) {
        array[0] = temp2;
        array[array.length - 1] = temp;
    }
    return array;
}
var y = swapValues([1,5,10,-2]);
console.log(y);

// //13.
// function numToString (array) {
//     for (var x = 0; x <= array.length-1; x++) {
//         if (array[x] < 0) {
//             array[x] = "Dojo";
//         }
//     }
//     return array;
// }
// var y = numToString([-1,-3,2,15,30,-42,28,-250]);
// console.log(y);