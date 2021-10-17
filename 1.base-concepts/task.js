function solveEquation(a, b, c) {
  "use strict";
  let arr = [];
  const discriminant = b ** 2 - 4 * a * c;
  let sqrt1;
  let x1;
  let x2;

  if (discriminant > 0) {
    x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    arr.push(x1, x2);
    return arr;
  } else if (discriminant === 0) {
    sqrt1 = -b / (2 * a);
    arr.push(sqrt1);
    return arr;
  } else if (discriminant < 0) {
    return arr;
  }
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  "use strict";
  let totalAmount; // сумма, которую в итоге заплатит клиент
  let now = new Date(); // текущая дата
  let loanBody; // тело кредита
  let diffInMonts; // срок кредита в месяцах
  let monthlyPayment; // ежемесячный платеж
  let ratio = percent / 12 / 100; // коэфф. равный 1/12 процентной ставки, приведенный к дроби
  let result; // итоговая сумма, округленная и приведенная к числовому типу

  if ((percent = String(percent))) {
    percent = Number(percent);
  } else
    alert(
      `Параметр процентная ставка содержит неправильное значение ${percent}`
    );

  if ((contribution = String(contribution))) {
    contribution = Number(contribution);
  } else
    alert(
      `Параметр сумма первоначального взноса содержит неправильное значение ${contribution}`
    );

  if ((amount = String(amount))) {
    amount = Number(amount);
  } else
    alert(`Параметр сумма кредита содержит неправильное значение ${amount}`);

  if ((date = String(date))) {
    date = Number(date);
  } else alert(`Параметр срок кредита содержит неправильное значение ${date}`);

  loanBody = amount - contribution;
  console.log(`Тело кредита составит ${loanBody} рублей`);

  diffInMonts = Math.floor(((date - now) / (1000 * 60 * 60 * 24 * 30)) % 12);
  console.log(`Срок кредита составит ${diffInMonts} месяцев`);

  monthlyPayment =
    loanBody * (ratio + ratio / ((1 + ratio) ** diffInMonts - 1));
  console.log(
    `Ежемесячный платеж по кредиту составит ${monthlyPayment} рублей`
  );

  totalAmount = monthlyPayment * diffInMonts;
  result = +totalAmount.toFixed(2);
  console.log(`Общая сумма кредита составит ${result} рублей`);
  return result;
}
