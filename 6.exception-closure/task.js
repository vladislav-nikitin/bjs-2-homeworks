// task 1
function parseCount(value) {
  let result = Number.parseInt(value);
  if (Number.isNaN(result)) {
    throw new Error("Невалидное значение");
  } else return result;
}

parseCount('10');

function validateCount(value) {
  try {
    parseCount(value);
    return value;
  } catch (err) {
    console.log(err);
    return err;
  }
}

validateCount('10');

// Task 2

class Triangle {
    constructor(a, b, c) {
      this.a = a;
      this.b = b;
      this.c = c;
  
      if ((a + b) < c || (a + c) < b || (b + c) < a) {
      throw new Error("Треугольник с такими сторонами не существует");
      }
    }
  
    getPerimeter(a, b, c) {
      return (this.a + this.b + this.c);
    }
  
    getArea(a, b, c) {
      let P = ((this.a + this.b + this.c) / 2);
      let S = Math.sqrt(P * (P - this.a) * (P - this.b) * (P - this.c));
      let result = +(S.toFixed(3));
      return result;
    }
  }
  
  function getTriangle(a, b, c) {
    try {
      return new Triangle;
    } catch { 
      return {
        getArea = () => {
          ("Ошибка! Треугольник не существует");
        },
        getPerimeter = () => {
          ("Ошибка! Треугольник не существует");
        }
      };
    } 
  }