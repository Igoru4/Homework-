//task 3
let month = prompt('Введіть число')
if (month== 1 || month== 2 || month== 12 ){
    alert('Зима')
}
if (month== 3 || month== 4 || month== 5) {
    alert('Весна')
}
if (month== 6 || month== 7 || month== 8) {
    alert('Літо')
}
if (month== 9 || month== 10 || month== 11 ){
    alert('Осінь')
}
if (month<1 || month>12 ){
    alert('Операція неможлива! Вкажіть число від 1 до 12.')
}  