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

  const firstNumber = parseInt(document.getElementById('user-input1').value);
  const secondNumber = parseInt(document.getElementById('user-input2').value);
  const operator = document.getElementById('user-input.checked: true').value;


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


function reset(event){
  event.preventDefault();
  const resultElement = document.getElementById('result');
  resultElement.setAttribute('hidden', true);
  document.getElementById('user-input1').value = '';
  document.getElementById('user-input2').value = '';


}



window.addEventListener('load', function(event){
  event.preventDefault();
  const calcForm = document.getElementById('user-input');
  const resetButton = document.getElementById('reset');
  calcForm.addEventListener('submit', handleUserSubmit);
  resetButton.addEventListener('click', reset);
});