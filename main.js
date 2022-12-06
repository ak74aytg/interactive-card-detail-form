'use strict'

const inputName = document.querySelector('#name');
const inputNumber = document.querySelector('#cardNumber');
const inputMonth = document.querySelector('#month');
const inputYear = document.querySelector('#year');
const submit = document.querySelector('#submitBTN');
const reset = document.querySelector('.reset');
const inputCvc = document.querySelector('#cvc');


const nameHelp1 = document.getElementById('nameHelp');
const nameHelp2 = document.getElementById('nameHelp1');
const numberHelp1 = document.getElementById('numHelp');
const numberHelp2 = document.getElementById('numHelp1');
const numberHelp3 = document.getElementById('numHelp2');
const dateHelp1 = document.getElementById('monthHelp');
const dateHelp2 = document.getElementById('monthHelp1');
const cvcHelp = document.getElementById('cvcHelp');


const cardName = document.querySelector('.atmName');
const cardNumber = document.querySelector('.atm');
const cardMonth = document.querySelector('.mon');
const cardYear = document.querySelector('.yea');
const cardCvc = document.querySelector('.card-text');

const form = document.querySelector('.detail');
const success = document.querySelector('.success');


inputCvc.addEventListener('input', function(e){
    let cvc = inputCvc.value;
    cardCvc.textContent = cvc;
})
inputName.addEventListener('input', function(e){
    let name = inputName.value;
    cardName.textContent = name;
})
inputMonth.addEventListener('input', function(){
    let mon = inputMonth.value;
    if(mon.length == 1){
        mon = 0 + mon;
    }
    else if(mon.length >2){
        mon = mon.slice(-2);
    }
    cardMonth.textContent = mon;
})
inputMonth.addEventListener('change', function(e){
    let mon = inputMonth.value;
    if(mon.length == 1){
        mon = 0 + mon;
    }
    else if(mon.length >2){
        mon = mon.slice(-2);
    }
    inputMonth.value = mon;
})
inputYear.addEventListener('change', function(e){
    let yea = inputYear.value;
    if(yea.length == 1){
        yea = 0 + yea;
    }
    else if(yea.length >2){
        yea = yea.slice(-2);
    }
    inputYear.value = yea;
})
inputYear.addEventListener('input', function(e){  
    let yea = inputYear.value;
    if(yea.length == 1){
        yea = 0 + yea;
    }
    else if(yea.length >2){
        yea = yea.slice(-2);
    }
    cardYear.textContent = yea;
})
inputNumber.addEventListener('input', function(){
    let number = inputNumber.value;
    if(number == ""){
        number = "0000 0000 0000 0000"
        cardNumber.textContent = number;
        return;
    }
    let first = number.slice(0,4);
    let second = number.slice(4,8);
    let third = number.slice(8,12);
    let fourth = number.slice(12,17);
    number = first + "  " + second + "  " + third + "  " + fourth;
    cardNumber.textContent = number;
})




function checkName(text){
    if(text == ""){
        nameHelp1.classList.remove('hidden');
        return false;
    }
    let pattern = /\d+/g;
    let pattern2 = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    let result = pattern.test(text);
    if(!result && !pattern2.test(text)){
        nameHelp1.classList.add('hidden');
        nameHelp2.classList.add('hidden');
        return true;
    }
    nameHelp2.classList.remove('hidden');
    return false;
}

function checkNumber(text){
    if(text.length != 16){
        numberHelp3.classList.remove('hidden');
        return false;
    }
    if(text == ""){
        numberHelp1.classList.remove('hidden');
        return false;
    }
    let pattern2 = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    let pattern = /[a-zA-Z]/g;
    let result = pattern.test(text);
    if(!result && !pattern2.test(text)){
        numberHelp1.classList.add('hidden');
        numberHelp2.classList.add('hidden');
        return true;
    }
    numberHelp2.classList.remove('hidden');
    return false;
}

function checkDate(text, text1){
    if(text == "" || text1 == ""){
        dateHelp1.classList.remove('hidden');
        return false;
    }
    dateHelp1.classList.add('hidden');
    let num = parseInt(text);
    if(num > 12 || num == 0){
        dateHelp2.classList.remove('hidden');
        return false;
    }
    if(text1.length > 2 && parseInt(text1) < 22){
        dateHelp2.classList.remove('hidden');
        return false;
    }
    dateHelp2.classList.add('hidden');
    return true;
}

function checkCvc(text){
    if(text.length == 0){
        cvcHelp.classList.remove('hidden');
        return false;
    }
    cvcHelp.classList.add('hidden');
    return true;
}



submit.addEventListener('click', function(e){
    e.preventDefault();
    let a = checkName(inputName.value);
    let b = checkNumber(inputNumber.value);
    let c = checkCvc(inputCvc.value);
    let d = checkDate(inputMonth.value, inputYear.value);
    if(a && b && c && d){
        form.classList.add('hidden');
        success.classList.remove('hidden');
    }
})
reset.addEventListener('click', function(e){
    e.preventDefault();
    inputCvc.value = inputMonth.value = inputName.value = inputNumber.value = inputYear.value = "";
    cardCvc.textContent = '000';
    cardMonth.textContent = '00';
    cardName.textContent = 'Jane Appleseed';
    cardNumber.textContent = '0000 0000 0000 0000';
    cardYear.textContent = '00';
    success.classList.add('hidden');
    form.classList.remove('hidden');
})