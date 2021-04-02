let result = 0;
let previousResult = result;
let currentOperator;

function addDigitValue (value) {
  calculatorInput.value = calculatorInput.value + value
  console.log(value);
}

function clearCalculatorInput () {
  calculatorInput.value = ''
}

function clearCalculatorOutput () {
  calculatorOutput.value = ''
}

function clearCalculator () {
  clearCalculatorInput()
  clearCalculatorOutput()
  result = 0
  previousResult = 0
}

function calculationResult () {
  // https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_output
}

function calculate (operator) {
  if (isNaN(calculatorInput.value) || calculatorInput.value.length < 1) return alert('Provide valid value!')

  if (operator === '+') {
    result = result + parseInt(calculatorInput.value)
  }

  if (operator === '-') {
    result = result - parseInt(calculatorInput.value)
  }

  if (operator === '*') {
    if (previousResult === 0) {
      previousResult = 1;
    }
    result = previousResult * parseInt(calculatorInput.value)
  }

  if (operator === '/') {
    if (previousResult === 0) {
      previousResult = 1;
    }
    result = previousResult / parseInt(calculatorInput.value)
  }
  
  calculatorOutput.value = `${previousResult} ${operator} ${parseInt(calculatorInput.value)} = ${result}`
  calculatorInput.value = result
  previousResult = result

  clearCalculatorInput()
}
