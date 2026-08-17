//1. Create a func on checkEvenOdd(num) that checks whether a number is even or odd. 





// function check(num){
//     if(num%2==0){
//         return "even"
//     }else{
//         return "odd"
//     }
// }
// console.log(check(1));



// Create a func on findLargest(a, b, c) that returns the largest of three numbers. 


function check(a, b, c) {
    if (a > b) {
        if (a > c) {
            return "a is largest number";
        } else {
            return "c is largest number";
        }
    } else {
        if (b > c) {
            return "b is largest number";
        } else {
            return "c is largest number";
        }
    }
}

console.log(check(10, 20, 15)); 
