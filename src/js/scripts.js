//business logic
function add(a, b){
  return a + b;
}

function subtract(a, b){
  return a - b;
}

function multiply(a, b){
  return a * b;
}

function divide(a, b){
  return a / b;
}


//user interface logic
function handleUserSubmit(event){
  event.preventDefault();
  const firstNumber = document.getElementById('user-input').value;
  const secondNumber = document.getElementById('user-input2').value;
  const operator = document.getElementById('operator').value;


  let result=0;

  if(operator === '+'){
    result = add(firstNumber, secondNumber);
  }
  else if(operator === '-'){
    result = subtract(firstNumber, secondNumber);
  }
  else if(operator === '*'){
    result = multiply(firstNumber, secondNumber);
  }
  else if(operator === '/'){
    result = divide(firstNumber, secondNumber);
  }
  else{
    alert('Invalid operator');
  }

  const resultElement = document.getElementById('result');
  resultElement.removeAttribute('hidden');
  resultElement.innerText = result;
}




window.addEventListenter('load', function(event){
  
  const calcForm = document.getElementById('user-input');

  calcForm.addEventListener('submit', handleUserSubmit);
  
});