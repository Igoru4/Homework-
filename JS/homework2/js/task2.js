//task 2
let user = prompt('Your name')
if (user.toLocaleLowerCase() == 'admin'){
    let pass = prompt('Password?','');

    if (pass == 'LOGOS'){
        alert('Welcome!');
    }else if (pass ==null){
        alert('Login canceled');
    }else{
        alert('Password is incorrect')
    }
}else if (user == null){
    alert ('Login canceled')
}else{
    alert('I do not know you')
}







