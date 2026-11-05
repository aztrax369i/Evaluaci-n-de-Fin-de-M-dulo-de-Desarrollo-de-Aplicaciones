const calculator = require('./calculator');

test('adds 1 + 2 to equal 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('adds -4 + 8 to equal 4', () => {
  expect(calculator.add(-4, 8)).toBe(4);
});

test('subtract 5 - 4 to equal 1', () => {
  expect(calculator.subtract(5, 4)).toBe(1);
});

test('subtract -5 - -10 to equal 5', () => {
  expect(calculator.subtract(-5, -10)).toBe(5);
});

describe('Pruebas para la función promedio', () => {
  test('Calcula el promedio de 5 números positivos (10, 20, 30, 40, 50) = 30', () => {
    expect(calculator.promedio(10, 20, 30, 40, 50)).toBe(30);
  });

  test('Calcula el promedio incluyendo números negativos y cero (-5, 0, 5, 10, 15) = 5', () => {
    expect(calculator.promedio(-5, 0, 5, 10, 15)).toBe(5);
  });
});

describe('Pruebas para la función factorial', () => {
  test('Calcula el factorial de 5 = 120', () => {
    expect(calculator.factorial(5)).toBe(120);
  });

  test('El factorial de 0 debe ser 1', () => {
    expect(calculator.factorial(0)).toBe(1);
  });

  test('Retorna null para números negativos (-3)', () => {
    expect(calculator.factorial(-3)).toBeNull();
  });
});

describe('Pruebas para la función sumaNaturales', () => {
  test('Suma 5 números naturales (1, 2, 3, 4, 5) = 15', () => {
    expect(calculator.sumaNaturales(1, 2, 3, 4, 5)).toBe(15);
  });

  test('Retorna null si incluye un número negativo o cero (1, 0, 3, 4, 5)', () => {
    expect(calculator.sumaNaturales(1, 0, 3, 4, 5)).toBeNull();
  });

  test('Retorna null si incluye decimales (1.5, 2, 3, 4, 5)', () => {
    expect(calculator.sumaNaturales(1.5, 2, 3, 4, 5)).toBeNull();
  });
});

describe('Pruebas para la función formulaGeneral', () => {
  test('Resuelve x² - 5x + 6 = 0 con raíces x1 = 3, x2 = 2', () => {
    expect(calculator.formulaGeneral(1, -5, 6, 0, 0)).toEqual({ x1: 3, x2: 2 });
  });

  test('Retorna null cuando el discriminante es negativo (raíces imaginarias)', () => {
    expect(calculator.formulaGeneral(1, 1, 1, 0, 0)).toBeNull();
  });

  test('Retorna null cuando el coeficiente a es 0 (división por cero)', () => {
    expect(calculator.formulaGeneral(0, 5, 6, 0, 0)).toBeNull();
  });
});