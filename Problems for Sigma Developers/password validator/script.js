// let password = document.getElementById("pass");
// console.log('hello');

// console.log(password.value);
// console.log('hello');

let password = "lovekumarfgstett35H46";

function checkPassword(password){
    
    if(!(password.length>8)){
        console.log('length is less then 8');
        return false;
    }
    
    if(!(/[a-z]/g).test(password)){
        console.log('lowercase not present');
        return false;
    }
    
    if(!(/[A-Z]/g).test(password)){
        console.log('uppercase not present');
        return false;
    }
    
    if(!(/[0-9]/g).test(password)){
        console.log('Number not present');
        return false;
    }

    if((/\s/g).test(password)){
        console.log('whitespace is not allowed');
        return false;
    }

    return true
}

if(checkPassword(password)){
    console.log('password is valid');
}

else{
    console.log('password is invalid');
}