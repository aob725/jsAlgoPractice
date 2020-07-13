//Random JS Practice / Loops Predict / Loops Algo

console.log(1 % 2) 

var num1 = Math.floor(2.5)   //num1 is 2
var num2 = Math.floor(2.4)   //num2 is 2*
var num3 = Math.ceil(-2.9)  //num3 is -3
var num4 = Math.trunc(-2.1)  //num4 is -3
console.log(num1)
console.log(num2)
console.log(num3)
console.log(num4)

if (num4 >= num3) {
    console.log("num 4 is greater than or equal to num 2")
}
else {
    console.log("num 4 is not greater than or equal to num 2")
}
x = 0;
while (x <= 10) {
    console.log(x);
    x++;
}

for (var num = 0; num < 15; num++) {
    console.log(num);
}

for (var i = 1; i < 10; i += 2) {
    if (i % 3 == 0) {
        console.log(i);
    }
}

for (var j = 1; j <= 15; j++) {
    if (j % 2 == 0) {
        j += 2;
    }
    else if (j % 3 == 0) {
        j++;
    }
    console.log(j);
}

//Loops Algo

//Print odds 1-20
var x = 1;
while(x < 19){
    x+= 2;
    console.log(x);
}

for (var x = 1; x <20; x+=2){
    console.log(x);
}

//Sum and Print 1-5
var sum = 0;

var x = 1;
while(x <= 5) {
    console.log("Num:" + x);
    sum += x;
    console.log("Sum:" + sum);
    x++;
}

for (var x = 1; x <= 5; x++){
    console.log("Num:" + x);
    sum += x;
    console.log("Sum:" + sum);
}
