function testAlert () {
  alert('Test')
}

function inputDigitValue (value) {
  calculatorInput.value = value
  console.log(value);
}

// console.log(calculatorDigit);
calculatorInput.addEventListener('click', testAlert);
