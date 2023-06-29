
//  1. print 9th and 10th index of array

// let array = [1,2,3,4,5,6,7,8,9,10]

// console.log(array[9],array[10]) 
// at index of 10 has not exist
// --------------------------------------------------------

// 2. print every element of array by map reduce and for loop

// let array = [,1,2,3,4,5,6,7,8,9,10]

// array.map(e=>{
//     console.log(e)
// })

// using reduce

// let array = [1,2,3,4,5,6,7,8,9,10]
// array.reduce((_, element)=>{
//     console.log(element);
// })

// using for loop

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for(i=0; i<array.length; i++){
//     console.log(array[i])
// }


// 3. change a value of 6th index with 100

// let array = [1,2,3,4,5,6,7,8,9,10]

// array[6]=100
// console.log(array)


// 4. print a array till element value not gratter then 100
let array = [1, 2, 3, 4, 5, 6, 7, 100, 9, 10];

let newarray = array.filter(elements=>{
   return elements < 100
}
)
console.log(newarray)


// 5. pluse 1 in every element of an array

// let array = [1,2,3,4,5,6,7,8,9,10]
// let newarray = array.map(e=>
//      e+1
//  )
//  console.log(newarray)


// 6. add 0 in start of array

// let array = [1,2,3,4,5,6,7,8,9]

// array.unshift(1)
// console.log(array)


// 7. add  99 in end of array

// let Array = [1,2,3,4,5,6,7,8,9]
// Array.push(99)
// console.log(Array)


// 8. remove 1 element from start of  array

// let array = [1,2,3,4,5,6,7,8,9]
// array.shift()
// console.log(array)

// 9. remove 1 element from end of array

// let array = [1,2,3,4,5,6,7,8,9]
// array.pop()
// console.log(array)

// 10. do sum of all value of an array with use of map, reduce and for-loop

// let array = [1,2,3,4,5,6,7,8,9,10]

// sum = 0 ;
// for(i=0; i<array.length; i++){
//     sum = sum + array[i]
// }
// console.log(sum)

// let sum = eval(array.join("+"))
// console.log(sum)


// 11. sort a array in acending decending

// let array = [4,6,3,6,4,9,6,55,0]

// array.sort()
// console.log(array)
// array.sort(function(a,b){
//     return b-a
// })
// console.log(array)

// 12. reverce an array with use of method

// let array = [4, 6, 3, 6, 4, 9, 6, 55, 0];

// array.reverse()
// console.log(array)

// 13. reverce an array with use of for-loop

//  let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//  let length = array.length;

//  for (let i = 0; i < length / 2; i++) {
//    let temp = array[i];
//    array[i] = array[length - 1 - i];
//    array[length - 1 - i] = temp;
//  }
//  console.log("Reversed array:", array);


// task-2
// [1,2,3,6,7,9,3,56,8]

// 1. give all value which can devided by 2 - not use filter

// let array = [1, 2, 3, 6, 7, 9, 3, 56, 8];
// for(i=0; i<array.length; i++){
//     if(array[i]%2 == 0){
//         console.log(array[i])
//     }
// }

// 2. give all value above 3 by use of filter

// let array = [1, 2, 3, 6, 7, 9, 3, 56, 8];

// let newarray = array.filter(e=>{
//     return e>3
// })
// console.log(newarray)

// 3. give index of 56

// let array = [1, 2, 3, 6, 7, 9, 3, 56, 8];
// let index = array.indexOf(56)
// console.log(index)

// 4. give true/false result when check given vale is exists in array or not

// function checkvalue(x){
//     let array = [1, 2, 3, 6, 7, 9, 3, 56, 8];
//     if(array.includes(x)){
//         console.log("true")
//     }else{
//         console.log("false")
//     }
// }
// checkvalue(5);

// ___________________________________________________________________________________

// task-3
// 1. ['i','am', 'urvish'] ==> want ['urvish','am','i']

// let array = ["i", "am", "urvish"];

// let newarray = array.map(e=>{
//     return array.reverse()
// })
// console.log(newarray)

// using loop
// let array = ['i','am', 'urvish']
// for(i=0; i<array.length; i++){
//     console.log(array[i])
// }
// by use of map, loop and reducer 

// ___________________________________________________________________________________;

// task-4

// 2. want "i am urvish" without use join method

// let array = ["i", "am", "urvish"];
// let concatenatedString = "";

// for (let i = 0; i < array.length; i++) {
//   concatenatedString = concatenatedString + array[i];
// }

// console.log(concatenatedString);

// ___________________________________________________________________________________
