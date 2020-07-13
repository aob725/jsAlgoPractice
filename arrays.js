var user = ["Adam", "Brady", "adam@adam.com"]
user.push("go bears");
console.log(user);
console.log(user[2]);
user[0] = "Brandon";
console.log(user);
console.log(user.length);

var arr = [2,4,6,8,10];
for (var i = 0; i <arr.length; i++) {
    console.log("Index:" + i);
    console.log("Num:" + arr[i]);
}

//Arrays Predict Output:

//1.
var arr = [8,6,7,5,4,0,9]
for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    //prediction: 8,6,7,5,4,0,9
}

//2.
var arr = [7, 3, 8, 4, 2, 0, 1];
for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
        console.log(arr[i]);
    }
    else {
        console.log("That is odd!");
    }
}

//3.
var arr = [1, 3, 8, -5, 0, -2, 4, -1];
var newArr = [];
for (var i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
        newArr.push(arr[i]);
        arr[i] = arr[i] * -1;
    }
    else if (arr[i] == 0) {
        arr[i] = "Zero";
    }
    else {
        arr[i] = arr[i] * -1;
    }
}
console.log(arr);
console.log(newArr);

//Arrays Algos

//Print Values and Sum
var testArr = [6,3,5,1,2,4];
var sum = 0;
for (var i = 0; i < testArr.length; i++ ) {
    sum += testArr[i];
    console.log("Num " + testArr[i] + ", " + "Sum " + sum);
}

var position = 0;
for (var i = 0; i < testArr.length; i++) {
    position = i;
    testArr[i] = testArr[i] * position;
    console.log(testArr[i]);
}