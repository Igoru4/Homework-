// let one = 0;
// let two = 1;
// let n = prompt('Введіть число')


// console.log(two + " ")
// for (let i = 1; i <= n-1; i++) {
// 	let numbers = one + two;
	
// 	one = two;
// 	two = numbers;
// 	console.log(numbers);
// }


// ///////////////////////////////////////



// const sumG = (n, g) => {
//     let sum = 0;
//     let lastNum = 1;
//     let str = '';
    
//     for (let i = 0; i < n; i++) {
//       sum += lastNum;
//       str += `${lastNum} `;
//       lastNum *= g;
//     }
//     str = str.slice(0, -1);
    
//     console.log(str);
//     return sum;
//   };
//   console.log(sumG(4,3));


// const sumG = (n, g) => {
//     let sum = 0;
//     let lastNum = 1;
//     let str = '';
//     sum = lastNum * (1-g ** n)/(1-g)
    
//     return sum;
//   }
//   console.log(sumG(5,2));


//   /////////////////////////////////////
//   let num1 = +prompt("vid");
//   let num2 = +prompt("do");

//   nextPrime: for(let i = num1; i<= num2; i++){
//       for(let j=2; j<i; j++){
//           if (i%j == 0)
//           continue nextPrime;
//       }
//       console.log(i);
//   }

