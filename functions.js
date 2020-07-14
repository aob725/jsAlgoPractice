// function sumEven() {
//     sum = 0;
//     for (var x = 0; x <= 20; x++) {
//         if (x % 2 == 0) {
//             sum += x;
//             console.log("Sum Even #'s: " + sum);
//         }
//         else {
//             console.log(x);
//         }
        
//     }
// }
// sumEven();

// function counter(startNum) {    //The function is expecting some PARAMETER in order to run
//     for (var num = startNum; num >= 0; num--) {
//         console.log(num);
//     }
// }
// counter(6);    // Passing in an ARGUMENT of 6, the console would display: 6, 5, 4, 3, 2, 1, 0
// counter(3);

// function createArray(num) {
//     var newArray = [];
//     for (var i = 0; i <= num; i++) {
//         newArray.push(i);
//     }
//     return newArray;        // added the return statement
// }
// var y = createArray(15); 
// console.log(y);

//Function Predict
//1.
// function greeting() {
//     return "Hello";
//     console.log("World");
// }
// var word = greeting();
// console.log(word);
// //Prediction: "Hello"

// //2. 
// function add(num1, num2) {
//     console.log("Summing Numbers!");
//     console.log("num1 is: " + num1);
//     console.log("num2 is: " + num2);
//     var sum = num1 + num2;
//     return sum;
// }
// var result1 = add(3, 5);
// var result2 = add(4, 7);
// console.log(result1);
// console.log(result2);
// //Prediction: "Summing Numbers!", "num 1 is: 3", "num 2 is: 5"
// // "Summing Numbers!", "num 1 is: 4", "num 2 is: 7",
// // "8, 11"

function highFive(num) {
    for (var i = 0; i < num; i++) {
        if (i == 5) {
            console.log("High Five!");
            return;
        }
        else {
            console.log(i);
        }
    }
}
var result1 = highFive(10);
console.log(result1);
//Prediction: nothing - function is not called