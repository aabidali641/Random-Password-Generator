const passwordBox = document.querySelector("#password");

const length = 18;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWZYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "1234567890";
const symbol = "!@#$%^&*(){[}]<>?/|\~";

const allChar = upperCase + lowerCase + symbol + number;

function createPassword(){
    let password = "";

    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while( length > password.length){
        password += allChar[Math.floor(Math.random() * allChar.length)];
    }

    passwordBox.value = password;

}

function copyPassword(){
    passwordBox.select();
    document.execCommand("copy");
    alert("YOUR PASSWORD IS COPIED SUCCFULLY");
}

