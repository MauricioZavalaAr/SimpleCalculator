// PEER REVIEW - ZAC

let inputBar = document.getElementById('inputBar');
// let secondNumber = document.getElementById('secondNumber');
// let operator = document.getElementById('operator');
let addBtn = document.getElementById('addBtn');
let substractionBtn = document.getElementById('substractionBtn');
let multiplyBtn = document.getElementById('multiplyBtn');
let divideBtn = document.getElementById('divideBtn');
// let answer = document.getElementById('answer');
let counter = 0;


num0.addEventListener('click', function(e){
    if(counter == 0){
        firstNum.innerText = firstNum.innerText+ '0';
        inputBar.value = firstNum.innerText;
    }
    else{
        secondNum.innerText = secondNum.innerText+ '0';
        
    }
})
num1.addEventListener('click', function(e){
    if(counter == 0){
        firstNum.innerText = firstNum.innerText+ '1';
        inputBar.value = firstNum.innerText;
    }
    else{
        secondNum.innerText = secondNum.innerText+ '1';
        inputBar.value = secondNum.innerText;
    }
})
num2.addEventListener('click', function(e){
    if(counter == 0){
        firstNum.innerText = firstNum.innerText+ '2';
        inputBar.value = firstNum.innerText;
    }
    else{
        secondNum.innerText = secondNum.innerText+ '2';
        inputBar.value = secondNum.innerText;
    }
})
num3.addEventListener('click', function(e){
    if(counter == 0){
        firstNum.innerText = firstNum.innerText+ '3';
        inputBar.value = firstNum.innerText;
    }
    else{
        secondNum.innerText = secondNum.innerText+ '3';
        inputBar.value = secondNum.innerText;
    }
})
num4.addEventListener('click', function(e){
    if(counter == 0){
        firstNum.innerText = firstNum.innerText+ '4';
        inputBar.value = firstNum.innerText;
    }
    else{
        secondNum.innerText = secondNum.innerText+ '4';
        inputBar.value = secondNum.innerText;
    }
})
num5.addEventListener('click', function(e){
    if(counter == 0){
        firstNum.innerText = firstNum.innerText+ '5';
        inputBar.value = firstNum.innerText;
    }
    else{
        secondNum.innerText = secondNum.innerText+ '5';
        inputBar.value = secondNum.innerText;
    }
})
num6.addEventListener('click', function(e){
    if(counter == 0){
        firstNum.innerText = firstNum.innerText+ '6';
        inputBar.value = firstNum.innerText;
    }
    else{
        secondNum.innerText = secondNum.innerText+ '6';
        inputBar.value = secondNum.innerText;
    }
})
num7.addEventListener('click', function(e){
    if(counter == 0){
        firstNum.innerText = firstNum.innerText+ '7';
        inputBar.value = firstNum.innerText;
    }
    else{
        secondNum.innerText = secondNum.innerText+ '7';
        inputBar.value = secondNum.innerText;
    }
})
num8.addEventListener('click', function(e){
    if(counter == 0){
        firstNum.innerText = firstNum.innerText+ '8';
        inputBar.value = firstNum.innerText;
    }
    else{
        secondNum.innerText = secondNum.innerText+ '8';
        inputBar.value = secondNum.innerText;
    }
})
num9.addEventListener('click', function(e){
    if(counter == 0){
        firstNum.innerText = firstNum.innerText+ '9';
        inputBar.value = firstNum.innerText;
    }
    else{
        secondNum.innerText = secondNum.innerText+ '9';
        inputBar.value = secondNum.innerText;
    }
})


addBtn.addEventListener('click', function(e){
    if(answerF.innerText != ''){
        firstNum.innerText = answerF.innerText;
        operatorF.innerText = '+';
        secondNum.innerText = '';
        answerF.innerText = '';
        equalSign.innerText = '';
        inputBar.value = operatorF.innerText;
    }
    else if(firstNum.innerText == ''){

    }
    else{
        // let sum = parseFloat(firstNumber.value) + parseFloat(secondNumber.value);
        operatorF.innerText = '+';
        inputBar.value = operatorF.innerText;
        // answer.innerText = sum;
        // console.log(sum);
        counter++;
    }
    
})


substractionBtn.addEventListener('click', function(e){
    if(answerF.innerText != ''){
        firstNum.innerText = answerF.innerText;
        operatorF.innerText = '-';
        secondNum.innerText = '';
        answerF.innerText = '';
        equalSign.innerText = '';
        inputBar.value = operatorF.innerText;
    }
    else if(firstNum.innerText == ''){

    }
    else{
        // let substraction = parseFloat(firstNumber.value) - parseFloat(secondNumber.value);
        operatorF.innerText = '-';
        inputBar.value = operatorF.innerText;
        // answer.innerText = substraction;
        // console.log(substraction);
        counter++;
    }
    
})

multiplyBtn.addEventListener('click', function(e){
    if(answerF.innerText != ''){
        firstNum.innerText = answerF.innerText;
        operatorF.innerText = '*';
        secondNum.innerText = '';
        answerF.innerText = '';
        equalSign.innerText = '';
        inputBar.value = operatorF.innerText;
    }
    else if(firstNum.innerText == ''){

    }
    else{
        // let multiply = parseFloat(firstNumber.value) * parseFloat(secondNumber.value);
        operatorF.innerText = '*';
        inputBar.value = operatorF.innerText;
        // answer.innerText = multiply;
        // console.log(multiply);
        counter++;
    }
    
})

divideBtn.addEventListener('click', function(e){
    if(answerF.innerText != ''){
        firstNum.innerText = answerF.innerText;
        operatorF.innerText = '/';
        secondNum.innerText = '';
        answerF.innerText = '';
        equalSign.innerText = '';
        inputBar.value = operatorF.innerText;
    }
    else if(firstNum.innerText == ''){

    }
    
    else{
        // let divide = parseFloat(firstNumber.value) / parseFloat(secondNumber.value);
        operatorF.innerText = '/';
        inputBar.value = operatorF.innerText;
        // answer.innerText = divide;
        // console.log(divide);
        counter++;
    }
    
})

numEqual.addEventListener('click', function(e){
    if(firstNum.innerText != '' || secondNum.innerText != '' || operatorF.innerText != ''){
        if(operatorF.innerText == '+'){
            equalSign.innerText = '=';
            answerF.innerText = parseFloat(firstNum.innerText) + parseFloat(secondNum.innerText);
            inputBar.value = parseFloat(firstNum.innerText) + parseFloat(secondNum.innerText);
        }
        else if(operatorF.innerText == '-'){
            equalSign.innerText = '=';
            answerF.innerText = parseFloat(firstNum.innerText) - parseFloat(secondNum.innerText);
           
            inputBar.value = parseFloat(firstNum.innerText) - parseFloat(secondNum.innerText);;
        }
        else if(operatorF.innerText == '/'){
            equalSign.innerText = '=';
            answerF.innerText = parseFloat(firstNum.innerText) / parseFloat(secondNum.innerText);
            
            inputBar.value =parseFloat(firstNum.innerText) / parseFloat(secondNum.innerText);
        }
        else if(operatorF.innerText == '*'){
            equalSign.innerText = '=';
            answerF.innerText = parseFloat(firstNum.innerText) * parseFloat(secondNum.innerText);
            inputBar.value = parseFloat(firstNum.innerText) * parseFloat(secondNum.innerText);
            
        }
        else{

        }
        
        
    }
    else{
        
    }
})

numC.addEventListener('click', function(e){
    firstNum.innerText = '';
    operatorF.innerText = '';
    secondNum.innerText = '';
    answerF.innerText = '';
    equalSign.innerText = '';
    counter = 0;
    inputBar.innerText = '';
    inputBar.value = '';

})
