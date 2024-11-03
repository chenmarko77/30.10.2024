// const printMessage = function (message) {
//     console.log(message);
//   };
//   const higherOrderFunction = function (callback) {
//     const string = 'HOCs are awesome';
//     callback(string);
//   };

//   higherOrderFunction(printMessage);

// const names = ['dana','vova','lada','masha','dana','vova','lada','masha','dana','vova','lada','masha']
// const filter = function (array) {
//   let filterNames = []
//   for (const element of array) {
//       if (element.includes('d')) {
//         console.log(element)
//       }
//   }
//   return console.log(filterNames)
// };
// filter(names)

// const randomNumber = [10,56,34,90,23,56,45,12,34,56]

// const filterNumber = function(num){
//     let numberFixed = []
//     for(const number of num){
//         if(number > 50){
//             numberFixed.push(number)
//         }
//     }
//     return console.log(numberFixed)
// }
// filterNumber(randomNumber)

// // Звичайний функціональний вираз
// const add = function(a, b, c) {
//   let g = 10
//   return a + b + c + g
// };
// console.log(add(2,3,4))
// // Теж саме записано, як стрілкова функція
// const add2 = (a, b, c) =>{
//   let g = 10
//  return a + b + c + g
// } ;
// console.log(add2(2,3,4))

// const hello1 =()=> "Hello JavaScrypt"

// console.log(hello1())

// const hello2 =(name)=> `hello ${name}`
// console.log(hello2("Vasyl"));

// const mul = (n, m) => ({

// })
// console.log(hello2("Vasyl"));

// const hello1 = () => 'hello JavaScript'
//     console.log(hello1());

// const hello2 = (name) => `hello ${name}`;
// console.log(hello2("Vasyl"));

// const mull = (n, m) => {
// let mul = n*m;
// let sum = n+m;
// let div = n - m;
// return console.log(mul,sum,div);

// }
// mull(2,5)

// const myAverageScore = (aray) => {
//   let i = 0;
//   for (const element of aray) {
//       i = i + element;
//   }
//   console.log(i / aray.length);
// };

// myAverageScore([100, 75, 81, 96]);
// myAverageScore([45, 63, 85, 70]);
// myAverageScore([77, 82, 60, 58]);
// myAverageScore([93, 99, 93, 96])

// const myAverageScore = function(...arg) {
//   let avarage = 0
//   let sum = 0
//   for (let index = 0; index < arg.length; index++) {
//       sum = sum + arg[index];

//   }
//   avarage=sum/arg.length
// let message = 0
// if (avarage >=91 && avarage<=100) {
//   message = 'Myaveragescore: A'
// }

//  else if (avarage >=81 && avarage<=90) {
//   message = 'Myaveragescore: B'
// }

// else if (avarage >=71 && avarage<=80) {
//   message = 'Myaveragescore: C'

// }

// else if (avarage <=70) {
//   message = 'Myaveragescore: D'

// }
// return console.log(message);

// }
// myAverageScore (100,75,81,96)
// myAverageScore (45,63,85,70)
// myAverageScore (77,82,60,58)
// myAverageScore (93,99,93,96)

// const sumAray = (array) => {
//   let sum = 0;
//   for (let i = 0; i < array.length;i++) {
//       sum += array[i];
//   }
//   console.log(sum);
// };

// sumAray([100, 75, 81, 96]);
// sumAray([45, 63, 85, 70]);
// sumAray([77, 82, 60, 58]);
// sumAray([93, 99, 93, 96])

// const multiplyByTwo = (array) => {
//   let newAr = []
//   for (let i = 0; i < array.length;i++) {
//       newAr.push(array[i]*2);
//   }
//   return console.log(newAr);

// };

// multiplyByTwo([100, 75, 81, 96]);
// multiplyByTwo([45, 63, 85, 70]);
// multiplyByTwo([77, 82, 60, 58]);
// multiplyByTwo([93, 99, 93, 96])

// const findMax = (array) => {
//   let newAr = array[0];
//   for (let i = 1; i < array.length;i++) {
//       if (array[i] > newAr) {
//         newAr = array[i];
//       }
//   }
//   return console.log(newAr);

// };

// findMax([100, 75, 81, 96]);

// const filterEvenNumbers = (array) => {
//   let newAr = []
//   for (let i = 0; i < array.length;i++) {
//     if (array[i]% 2 === 0) {
//       newAr.push(array[i]);
//     }

//   }
//   return console.log(newAr);

// };

// filterEvenNumbers([100, 75, 81, 96]);
// filterEvenNumbers([45, 63, 85, 70]);
// filterEvenNumbers([77, 82, 60, 58]);
// filterEvenNumbers([93, 99, 93, 96])

// 5#

// const sortArrayAscending = (array) => {
//   let result = 0
//   for (let index = 0; index < array.length; index++) {
//     result = result +1
//   }

//   return result
// }
// console.log(sortArrayAscending([100, 75, 81, 96]));

// 6#

// function sortArrayAscending(arr) {
//   let n = arr.length;
//   let swapped;

//   // Проходимо через масив n-1 разів
//   for (let i = 0; i < n - 1; i++) {
//       swapped = false; // Скидаємо прапорець заміни

//       // Проходимо через масив, до n-i-1, оскільки останні i елементів вже відсортовані
//       for (let j = 0; j < n - i - 1; j++) {
//           // Якщо елемент знайдений більший, ніж наступний, міняємо їх місцями
//           if (arr[j] > arr[j + 1]) {
//               // Міняємо місцями arr[j] і arr[j + 1]
//               let temp = arr[j];
//               arr[j] = arr[j + 1];
//               arr[j + 1] = temp;

//               swapped = true; // Встановлюємо прапорець, оскільки був обмін
//           }
//       }

//       // Якщо за проходження не було обміну, масив вже відсортований
//       if (!swapped) {
//           break;
//       }
//   }

//   return arr;
// }

// let numbers= [53,53,432,4322,4,6,7,1]
// console.log("Відсортований масив:",
//   sortArrayAscending(numbers));

// 7
// const containsValue = (array, x) => {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === x) {
//       return true;  
//     }
//   }
//   return false;  
// };

// console.log(containsValue([100, 7, 81, 96],7))
//8#

// const findIndex = (array, x) => {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === array[x]) {
//       return i;  
//     }
//   }
//   return -1;  
// };

// console.log(findIndex([100, 7, 81, 96],7))
//9
// function reverseArray(arri) {
//   let arrinew =[]
//   for (let index = arri.length - 1; index >= 0; index--) {
// arrinew.push(arri[index])

//   }
//   return arrinew
//   }
  
//   console.log(reverseArray([233,4433,45,1,4,5,9]));

  //10
  // function addElements(arr,arr2) {
  //   let arrnew =[]
  //   for (let index = 0 ; index < arr.length; index++) {
  // arrnew.push(arr[index]+arr2[index])
  
  //   }
  //   return arrnew
  //   }
    
  //   console.log(addElements([4,5,9],[2,3,5]));
  