class Calculator {
    add(num1, num2) {
      return num1 + num2;
    }
  
    subtract(num1, num2) {
      return num1 - num2;
    }
  
    multiply(num1, num2) {
      return num1 * num2;
    }
  
    divide(num1, num2) {
      if (num2 === 0) {
        throw new Error("Division by zero is not allowed.");
      }
      return num1 / num2;
    }
  }
  
  class ScientificCalculator extends Calculator {
    square(num) {
      return num * num;
    }
  
    cube(num) {
      return num * num * num;
    }
  
    power(base, exponent) {
      return Math.pow(base, exponent);
    }
  }
  
  const scientificCalc = new ScientificCalculator();
  
  const resultAdd = Calculator.prototype.add.call(scientificCalc, 10, 5);
  console.log("Result of adding 10 and 5:", resultAdd);
  
  const resultSubtract = Calculator.prototype.subtract.apply(scientificCalc, [10, 5]);
  console.log("Result of subtracting 10 and 5:", resultSubtract);
  
  const multiplyByTwo = scientificCalc.multiply.bind(scientificCalc, 2);
  
  const powerOfThree = scientificCalc.power.bind(scientificCalc, 3);
  
  const resultMultiplyByTwo = multiplyByTwo(5);
  console.log("Result of multiplying 5 by 2:", resultMultiplyByTwo);
  
  const resultPowerOfThree = powerOfThree(2);
  console.log("Result of raising 2 to the power of 3:", resultPowerOfThree);