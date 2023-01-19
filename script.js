const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

// №1 Створіть функцію getMyTaxes.call(country, salary) -> number; – яка рахує скільки податків ви заплатите як IT-спеціаліст в якійсь з країн.

const getMyTaxes = function (salary) {
  return this.tax * salary;
};
console.log('Податок з доходів:  ', getMyTaxes.call(ukraine, 1789));

// №2 Створіть функцію getMiddleTaxes.call(country) -> number; – яка рахує скільки у середньому податків платятт IT-спеціалісти у кожній країні. (tax * middleSalary).

const getMiddleTaxes = function () {
  return this.tax * this.middleSalary;
};
console.log('Середній податок в Україні: ', getMiddleTaxes.call(ukraine));
console.log('Середній податок в Латвії: ', getMiddleTaxes.call(latvia));
console.log('Середній податок в Литві: ', getMiddleTaxes.call(litva));

// #3 Створіть функцію getTotalTaxes.call(country) -> number; – яка рахує, скільки всього податків платять IT-спеціалісти у кожній країні. (tax * middleSalary * vacancies).

const getTotalTaxes = function () {
  return this.tax * this.middleSalary * this.vacancies;
};

console.log('Всього податків з ІТ в Україні: ', getTotalTaxes.call(ukraine));
console.log('Всього податків з ІТ в Латвії: ', getTotalTaxes.call(latvia));
console.log('Всього податків з ІТ в Литві: ', getTotalTaxes.call(litva));

// №4 Створіть функцію getMySalary(country) – яка буде писати в консоль об'єкт виду: {salary: number, taxes: number, profit: number } кожні 10 секунд. Значення salary – генеруйте випадковим чином у діапазоні 1500-2000. taxes – розраховується в залежності від вибраної країни та значення salary.

function getMySalary(country) {
  let result = {};
  result.salary = Math.round(Math.random() * (2000 - 1500) + 1500);
  result.taxes = country.tax * result.salary;
  result.profit = result.salary - result.taxes;
  console.log('Розрахунеовий лист: ', result);
};

setInterval(getMySalary, 10000, ukraine);
