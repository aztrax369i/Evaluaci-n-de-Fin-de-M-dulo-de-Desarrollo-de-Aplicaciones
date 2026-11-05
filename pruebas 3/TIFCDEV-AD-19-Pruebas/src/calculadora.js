const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

function divide(a, b) {
  return a / b;
}

function multiply(a, b) {
  return a * b;
}

// 1. Promedio de 5 números
function promedio(a, b, c, d, e) {
  return (a + b + c + d + e) / 5;
}

// 3. Factorial de un número
function factorial(n) {
  if (n < 0 || !Number.isInteger(n)) {
    return null;
  }
  if (n === 0 || n === 1) {
    return 1;
  }
  let resultado = 1;
  for (let i = 2; i <= n; i++) {
    resultado *= i;
  }
  return resultado;
}

// 5. Suma de números naturales (enteros positivos > 0)
function sumaNaturales(a, b, c, d, e) {
  const numeros = [a, b, c, d, e];
  for (let num of numeros) {
    if (num <= 0 || !Number.isInteger(num)) {
      return null;
    }
  }
  return a + b + c + d + e;
}

// 7. Fórmula general cuadrática: x = (-b ± √(b² - 4ac)) / 2a
function formulaGeneral(a, b, c, d = 0, e = 0) {
  if (a === 0) {
    return null;
  }
  const discriminante = Math.pow(b, 2) - 4 * a * c;
  if (discriminante < 0) {
    return null;
  }
  const x1 = (-b + Math.sqrt(discriminante)) / (2 * a);
  const x2 = (-b - Math.sqrt(discriminante)) / (2 * a);
  
  return {
    x1: x1 === 0 ? 0 : x1,
    x2: x2 === 0 ? 0 : x2
  };
}

// Un solo export al final con TODAS las funciones
module.exports = {
  add,
  subtract,
  divide,
  multiply,
  promedio,
  factorial,
  sumaNaturales,
  formulaGeneral
};