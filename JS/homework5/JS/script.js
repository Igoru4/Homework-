//task 1

const season = prompt("enter number");

switch(season.toLowerCase()) {
case '1':
    case '2':
        case '12':  
    alert('Winter');
    break;
case '3':
    case '4':
        case '5':  
    alert('Spring');
    break;
case '6':
    case '7':
        case '8':  
    alert('Summer');
    break;
case '9':
    case '10':
        case '11':  
    alert('Autumn');
    break;
  default: 
    alert('Error');
}

//task 2
 const number = parseInt(prompt("Введіть число")); 
 let isPrime = true; 
 
    if (number> 1) { 
         for (let i = 2; i < number; i++) 
             if (number % i == 0) { 
                 isPrime = false; 
                break;  } 
                if (isPrime) { 
                    console.log(`${number} є простим числом`);
                 
                  }  else  
                      console.log(`${number} не є простим числом`);}
                      if (number<=1) { 
                        console.log(`${number} не є простим числом`);
                     
                      } 
            

            







//task 3
function maxiElements() {
    let maxi = 0;
  for( let i = 0; i < arguments.length; i++) {
    if (arguments[i] > maxi) {
        maxi = arguments[i];    
    }
  }
  console.log(maxi);
}
maxiElements(10, 20, 90, 80, 55, 10005, 0, 1546844)


