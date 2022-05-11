//task 1
const ask1 = prompt('На якій планеті ми живемо?')
const ask2 = prompt('Який океан є найбільшим у світі??')
const ask3 = prompt('Число IX, записане за римською системою, арабськими цифрами позначає:')
const ask4 = prompt('Перший Презедент України?')
const ask5 = prompt('Яка столиця України?')
const ask6 = prompt('Яка температура тіла людини вважається нормою?')
const ask7 = prompt('Скільки хвилин в 2 годинах?')
const ask8 = prompt('Яка хімічна формула води?​')
const ask9 = prompt('Хто написав Кобзар?')
const ask10 = prompt('Де найкращі курси?')


let res = 0;
if (ask1.toLocaleLowerCase() === 'земля'){
    res++;
}
if (ask2.toLocaleLowerCase() === 'тихий'){
    res++;
}

if (ask3.toLocaleLowerCase() === '9'){
    res++;
}

if (ask4.toLocaleLowerCase() === 'кравчук'){
    res++;
}

if (ask5.toLocaleLowerCase() === 'київ'){
    res++;
}

if (ask6.toLocaleLowerCase() === '36'){
    res++;
}

if (ask7.toLocaleLowerCase() === '120'){
    res++;
}

if (ask8.toLocaleLowerCase() === 'h2o'){
    res++;
}

if (ask9.toLocaleLowerCase() === 'шевченко'){
    res++;
}

if (ask10.toLocaleLowerCase() === 'логос'){
    res++;
}

if (res>=0 && res<=3){
    alert('Низький рівень знань')
}
if (res>3 && res<=7){
    alert('Середній рівень знань')
}
if (res>7 && res<=10){
    alert('Високий рівень знань')
}

console.log(res +'з 10');