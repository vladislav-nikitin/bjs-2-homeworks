function parseCount(value) {
  let result = Number.parseInt(value);
  if (Number.isNaN(result)) {
    throw new Error("Невалидное значение");
  }
  return result;
}

//parseCount(012)

function validateCount(value) {
  try {
    parseCount(value);
    return Number.parseInt(value);
  } catch (err) {
    return err;
  }
}

//validateCount('10')

// Task 2

class Triangle {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;

    if (a + b < c || a + c < b || b + c < a) {
      throw new Error("Треугольник с такими сторонами не существует");
    }
  }

  getPerimeter() {
    return this.a + this.b + this.c;
  }

  getArea() {
    let P = this.getPerimeter() / 2;
    let S = Math.sqrt(P * (P - this.a) * (P - this.b) * (P - this.c));
    return +S.toFixed(3);
  }
}

function getTriangle(a, b, c) {
  try {
    return new Triangle(a, b, c);
  } catch {
    return {
      getArea: () => "Ошибка! Треугольник не существует",
      getPerimeter: () => "Ошибка! Треугольник не существует",
    };
  }
}
