// //task1
let n = prompt('Введіть число')
let res=1;
for(let i=n; i>0; i--){
    res=res*i;
    console.log(res)
        
}

//task2 
for (let i=1000; i<=9999; i=i+3){
    console.log(i)
}
   
//task3
let n=1; 
for(let i=0; i<+55;  i++){
    n=2*i+1;
    console.log(n)

}

//task4
for (let i=90; i>0; i=i-5){
        console.log(i)
}


//task5
let n=1; 
for(let i=1; i<=20;  i++){
    n=2*i;
    console.log(n)

}

//task6

for (let a=2; a<10000; a=2*a-1){
        console.log(a)
}

//task7

for (let a=-166; a<100; a=2*a+200){
    if (a>-100 && a<100){
        console.log(a)
    }
        
}


//task 8

let a = prompt('Введи число')
let b = prompt('Введи степінь')
let res
 
 
 
for (let i = 0; i < 1; i++) {
    res = a ** b
 
    console.log('Відповідь:' + res);
}