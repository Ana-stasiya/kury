
// // объект
// const options= {
//     name:'test',
//     width:1024,
//     colors:{
//         border:'black',
//         bg:'red'
//     }
// };

// console.log(Object.keys(options).length);

// let counter=0;

// for (let key in options){
//     if (typeof(options[key])==='object'){
//         for (let i in options[key]){
//         console.log(`Свойство ${i} имеет значение ${options[key][i]}`)
//         counter++;
//     }}else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`)
//     counter++;
//     }
// }

// console.log(counter);

// //  массив

// const arr=[2,3,4,5,6];

// arr.forEach(function(item, i, arr){
//  console.log(`${i}:${item} в массиве ${arr}`)
// });

// const str=prompt("","");
// const product=str.split(", ");


// function Copy(mainObj){
//     let objCopy={};
//     let key;
//     for (key in mainObj){
//         objCopy[key]=mainObj[key]
//     }
//     return objCopy;
// }

// const numbers={
//     a:2,
//     b:5,
//     c:{
//         x:7,
//         y:4
//     }
// }

// let newNum = Copy(numbers);

// newNum.a=10;
// console.log(newNum);
// console.log(numbers);

let i, j;
let smallest, largest;
let num;
num = 100;
smallest = largest = 1;
for (i=2,j=num/2; (i<=num/2) & (j>=2); i++, j--)
{
    if ((smallest == 1) & ((num % i) == 0)) smallest = 1;
    if ((largest == 1) & ((num % j) == 0)) largest = j;
}
console.log("Наибольший множитель: "+ largest);
console.log("Наименьший множитель: " + smallest);