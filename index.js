// 1.Print all the numbers in the given range.
// function num(num1, num2) {
//   if (num1 <= num2) {
//     console.log(num1);
//     return num(num1 + 1, num2);
//   }
// }
// num(41, 50);

//2.Print all the numbers in descending order in the given range.
// function num(num1, num2) {
//   if (num1 <= num2) {
//     console.log(num2);
//     return num(num1, num2 - 1);
//   }
// }
// num(41, 50);

//3.Print all the even numbers in the given range.
// function num(num1, num2) {
//   if (num1 <= num2) {
//     if (num1 % 2 == 0) {
//       console.log(num1);
//     }
//     return num(num1 + 1, num2);
//   }
// }
// num(41, 50);

//4.Find the factorial of a given number n.
// function factorial(n,fact) {
//     if(n>0){
//         fact*=n;
//         return factorial(n-1,fact);
//     }
//     return fact;
// }
// console.log(factorial(6,1));

//5.Find the nth digit of the fibonacci series.
// function fibo(a,b,counter){
//     if(counter<=12){
//         let c = a+b;
//         return fibo(b,c,counter+1);
//     }
//     console.log(a);
// }
// fibo(0,1,1);

//6.Print sum of all the numbers in the given range.
// sum=0;
// function addition(n1,n2) {
//     if(n1<=n2){
//         sum += n1;
//         return addition(n1+1,n2);
//     }
//     return sum;
// }
// console.log(addition(1,5));

//7.Print the product of all the numbers in given range.
// pro = 1;
// function product(a,b) {
//         if(a<=b){
//             pro *=a;
//             return product(a+1,b);
//     }
//     return pro;
// }
// console.log(product(41,50));

// 8.Write the recursive function to check whether a given number is prime or not.

//9.Print sum of all the first 10 even numbers.
// sum = 0;
// function s(a) {
//   if (a <= 10) {
//     sum += a;
//     return s(a + 2);
//   }
//   return sum;
// }
// console.log(s(2));

//10.Write a recursive program to find the power of given number and exponent. (without using Math.pow and exponent operator(**)).
