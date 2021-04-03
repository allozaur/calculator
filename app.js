// DOM Elements

const calculatorInput = document.getElementById('calculator-input')
const calculatorOutput = document.getElementById('calculator-output')

const equalBtn = document.getElementById('equal-button')
const addBtn = document.getElementById('add-button')
const subtractBtn = document.getElementById('subtract-button')
const multiplyBtn = document.getElementById('multiply-button')
const divideBtn = document.getElementById('divide-button')

// Calculator data

const initialResult = 0
let result = initialResult
let previousResult = result
let currentOperator
let newValue = true

let firstValue
let secondValue

function clearCalculatorInput () {
  calculatorInput.value = ''
}

function clearCalculatorOutput () {
  calculatorOutput.value = ''
}

function clearCurrentOperator () {
  currentOperator = ''
}

function clearCalculator () {
  clearCalculatorInput()
  clearCalculatorOutput()
  clearCurrentOperator()
  result = 0
  previousResult = 0
  document.getElementById('current-operator').innerHTML = ''
}

function spawnDigit (value) {
  if (newValue === true) {
    clearCalculatorInput()
  }
  calculatorInput.value = calculatorInput.value + value
  console.log(value)
}

function commitDigit (value) {
  if (previousResult !== 0) {
    previousResult = parseInt(value)
  }
  spawnDigit(value)
  newValue = false
}

function calculationResult () {
  // https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_output
}

function commitOperator (operator) {
  currentOperator = operator
}

function calculate (operator) {
  if (isNaN(calculatorInput.value) || calculatorInput.value.length < 1) return alert('Provide valid value!')
  if (!operator) {
    result = parseInt(calculatorInput.value)
    return calculatorOutput.value = `${parseInt(calculatorInput.value)} = ${result}`
  } else {

    if (firstValue && !secondValue) {
      secondValue = parseInt(calculatorInput.value)
      console.log(`secondValue: ${secondValue}`)
    }

    if (!firstValue && !secondValue) {
      firstValue = parseInt(calculatorInput.value)
      console.log(`firstValue: ${firstValue}`)
    }

    previousResult = result
    
    if (operator === '+') {
      result = result + parseInt(calculatorInput.value)
    }

    if (operator === '-') {
      result = result - parseInt(calculatorInput.value)
    }

    if (operator === '*') {
      if (previousResult === 0) {
        previousResult = 1
      }
      result = previousResult * parseInt(calculatorInput.value)
    }

    if (operator === '/') {
      if (previousResult === 0) {
        previousResult = 1
      }
      result = previousResult / parseInt(calculatorInput.value)
    }

    if (!secondValue) {
      secondValue = 0
    }

    calculatorOutput.value = `${previousResult} ${operator} ${parseInt(calculatorInput.value)} = ${result}`
    // calculatorOutput.value = `${firstValue} ${operator} ${secondValue} = ${result}`
    calculatorInput.value = result
    commitOperator(operator)
    // if (firstValue) document.getElementById('first-value').innerHTML = 'First value: ' + firstValue
    if (currentOperator) document.getElementById('current-operator').innerHTML = 'Current operator: ' + currentOperator
    // if (secondValue) document.getElementById('second-value').innerHTML = 'Second value: ' + secondValue
  }
  
newValue = true
}

function equals () {
  calculate(currentOperator)
}
