//  1. Write a function that takes in a string
// and returns it when reversed
// let food = “eating”
function reverseString(str) {
    return str.split("").reverse().join("");
}
let food= "eating"
console.log(reverseString(food));
// 2.Write a function that takes in the following array
// and consoles the target if it is found else
// null
// let num = [2,8,0,23,5,45,76]
// Target = 23
function merge(array){
    if(array.length <=1){
        return array
    }
    let middle= Math.floor(array.length/2)
    let left = array.slice(0,middle)
    let right =array.slice(middle)
    return mergeSort(merge(left),merge(right))
}
function mergeSort(left,right){
    let emptyArray=[]
    while(left.length && right.length){
        if(left[0]<right[0]){
        emptyArray.push(left.shift())
        }
        else{
            emptyArray.push(right.shift())
        }
    }return[...emptyArray,...left,...right]
}
let num = [2,8,0,23,5,45,76]
console.log(merge(num))
function BinarySearch(num,target){
    let leftIndex =0;
    let rightIndex =num.length-1;
while(leftIndex<=rightIndex){
    let middle = Math.floor(leftIndex+rightIndex/2)
    if(num[middle]===target){
        return target
    }
    else if(num[middle]> target){
        right=middle-1
    }
    else{
        return null
    }
}
}
let num1 = [0,2,5,8,23,45,76]
let target=40
console.log(BinarySearch(num,target));
//3. Given years between 2000 and 2023, console all the leap years in the following
// sentence, i.e “2020 is a leap year” if not console log i.e “2001 is not a leap year”
for (let year =2000; year<=2023; year++){
    if (year%4==0 && (year % 100!==0 ||year%400==0)){
        console.log(year+"is a leap year");
    }
    else{
        console.log(year+"is not a leap year")
    }
}
//4. Given a range of numbers from 0 to 100, console”Fizz” if the numbers are divisible by 3,
// “Buzz” if the numbers are divisible by 5, and “FizzBuzz” if divisible by both 3 and 5.
for (let i = 0; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
// 5.  Write a function that takes in an array of
//  numbers and returns an array that has all
// elements multiplied by 4.
// let numArray = [12,87,45,75,23,64,73]
function multi(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++){
      result.push(arr[i] * 4);
    }
    return result;
  }
  let numArray = [12, 87, 45, 75, 23, 64, 73];
console.log(multi(numArray));
// 6 Write a function that takes in an array of strings
// and returns an array with every element
// turned into a number
// let nums = [“10”,”24”,”45”,”56”,”67”]
function number(){
    return n.map(num=>+num)
}
n= ["10","24","45","56","67"]
console.log(number(n)) 