function inputTextField(id) {
    const text = document.getElementById(id).value;  // Use .value instead of .innerText for input fields
    return text;
}

function inputNumber(id) {
    const pin = document.getElementById(id).value;
    const pinNumber = parseInt(pin);
    return pinNumber;
}

document.getElementById('btn-login').addEventListener('click', function (event) {
    event.preventDefault();
    const inputemail = inputTextField('input-email');  
    const inputpin = inputNumber('input-pin');
    if(inputemail==="digontosikder123@gmail.com" &&  inputpin ===1234){
        
        window.location.href=  '/home.html'

    }
    else{
        alert('invalid email or password')
    }
});