"use strict";
let numbers = [0, 2, 3, 5, 6, 8, 9, 10];
let output = [];
let i = 0;
// for(let i = 0; i <= 10; i++){
//     if(numbers.indexOf(i) == -1){
//         output.push(i);
//         count++;
//     }
// }
while (i < numbers.length) {
    if (numbers.indexOf(i) == -1) {
        output.push(i);
    }
    i++;
}
console.log(output);
