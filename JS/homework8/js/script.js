
//task 1
let text = prompt('Введіть текст');
console.log(`Кількість пробілів ${text.split(" ").length-1}`);


//task 2
let email = 'logos@info.ua';
let check = function () {
  if (email.endsWith('@') || email.startsWith('@')) {
    console.log('Your email does not correct');

  } else if (email.includes('@')) {
    console.log('Welcome');  
    
  } else {
    console.log('Your email does not correct');
  } 
}
check()


// task 3
let text = "Text html javascript html css";
console.log(`Кількість слів ${text.split("html").length-1}`);


//task 4
let userText = prompt('Enter link');
let func = function () {     
    if (userText.includes('http://')) {
      console.log(userText.substring(7));
      
  } if (userText.includes('https://')) {
    console.log(userText.substring(8));
  } 
  }
func()

