//task1

let password = "qwer";
let i = 4;
while (i >= 0)  {
  let ask = prompt("Введіть ваш пароль:");

  if (password == ask) {
      alert("Запрошуємо на сайт!");

      i = 0;
  } else if (password != ask && i != 0) {
      alert("Неправильний пароль, залишилось " + i + " спроби.");
  } else {
      alert("Будь ласка спробуйте пізніше!");
  }
  i--
}

 


////////////////////////////////////////////////////////////////////////////////////////

// // //task1
let n = prompt('Введіть число')
let res=1;
let i=n;
while (i>0) {
    res=res*i;
    i--;
    console.log(res)
        
}

// //task2
let i=1000; 
while(i<=9999){
    console.log(i)
    i=i+3;
}
   
// //task3
let n=1; 
let i=0;
while( i<+55 ) {
   
    n=2*i+1;
    console.log(n)
    i++;

}

// //task4
let i=90;
do{
    
    console.log(i);
    i=i-5;
}
while(i>0)


// //task5
let n=1;
let i=1; 
while( i<=20 ){
    n=2*i;
    i++
    console.log(n)

}

// //task6
let a=2; 
do{
    console.log(a)
    a=2*a-1;
}
while(a<10000)
        

// //task7
let a=-166;
while ( a < 100 ){
    a=2*a+200;
    if (a>-100 && a<100){
        console.log(a)
    }
        
}


//task 8

let a = prompt('Введи число')
let b = prompt('Введи степінь')
let res
 
let i = 0; 
 
while (i < 1) {
    res = a ** b
    i++;
    console.log('Відповідь:' + res);
}