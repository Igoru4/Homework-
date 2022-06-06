//task 1
function getArea(radius) {
    if (typeof radius == 'number' ) {
      result = Math.trunc(Math.PI * (radius ** 2)) ;    
      return console.log( `Площа дорівнює ${result} квадратних одиниць` );
    } else if (typeof radius == 'string') {
      console.log('Повинно бути числове значення.')
    } else (
      console.log('Будь ласка, введіть радіус!')
    )  
      
  }
  
getArea(12)

  //task 2
  function getSqrt(number) {
    if (number < 0) {
      console.log('Введіть додатнє число.');
    } else if (typeof number == 'string') {
      console.log('Повинно бути числове значення.');
    } else if (typeof number == 'number') {
      result = Math.sqrt(number);
      return console.log(`Квадратний корінь з ${number} дорівнює ${result}`);
    }  else {
      console.log('Будь ласка, введіть число!');
    }
   
  }
  
  getSqrt(9)


//   //task 3
  let getMath = {
    PI: console.log(3.14),
  
    pow(number, degree) {
      if (typeof number == 'number') {
        result = number ** degree;
        console.log(result);
      } else if (typeof number == 'string') {
        console.log('Повинно бути числове значення.');
      } else {
      console.log('Будь ласка, введіть число!');
    }
    },
  
    abs(number) {
      if (typeof number == 'string') {
        console.log('Повинно бути числове значення.');
      } else if (number > 0) {
         console.log(number + ` або -` + number);
      } else if (number == 0) {
        console.log(number);
      } else if (number < 0) {
        console.log('Таких значень немає,тому що модуль будь якого числа дорівнює додатному числу або нулю.');
      } else {
      console.log('Будь ласка, введіть число!');
    }
    },
     
    max() {
      numbers = arguments;
      min = minValue(numbers);
      function minValue(numbers) {
      let min = numbers[0];
      for (let i = 0; i < numbers.length; i++){
        if (min < numbers[i])
          min = numbers[i];
      }
      return min;
    }
    console.log(min);
    },  
  
  min() {
    numbers = arguments;
      min = minValue(numbers);
      function minValue(numbers) {
      let min = numbers[0];
      for (let i = 0; i < numbers.length; i++){
        if (min > numbers[i])
          min = numbers[i];
      }
      return min;
    }
    console.log(min);
    }   
    
  }
  getMath.PI
  getMath.pow(5, 3)
  getMath.abs(5)
  getMath.max(1, 5, 8, 10)
  getMath.min(10, 500, 66, 3)
  