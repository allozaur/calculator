function testAlert () {
  alert('Test')
}

function addDigitValue (value) {
  calculatorInput.value = calculatorInput.value + value
  console.log(value);
}

function clearInputValue () {
  calculatorInput.value = null
}

// calculatorInput.addEventListener('click', testAlert);
