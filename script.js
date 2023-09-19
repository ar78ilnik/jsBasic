'use strict';

let money, time;

let startBtn = document.getElementById('start'),
    blocksValues = document.querySelectorAll('div[class*="-value"]'),
    inputs = document.querySelectorAll('input[class="expenses-item"]'),
    expenses = document.querySelector('.expenses-item-btn'),
    optionalExpensesItems = document.querySelectorAll('.optionalexpenses-item'),
    optionalExpensesBtn = document.querySelector('.optionalexpenses-btn'),
    counter = document.querySelector('.count-budget-btn'),
    chooseIncome = document.querySelector('.choose-income'),
    savings = document.querySelector('#savings'),
    chooseSum = document.querySelector('input[class="choose-sum"]'),
    percent = document.querySelector('input[class="choose-percent"]'),
    year = document.querySelector('input[class="year-value"]'),
    month = document.querySelector('input[class="month-value"]'),
    day = document.querySelector('input[class="day-value"]');


startBtn.addEventListener('click', function () {
    time = prompt("Введите дату в формате YYYY-MM-DD", "2023-09-06");
    money = +prompt("Ваш бюджет на месяц", "60000");

    while (isNaN(money) || money == '' || money == null) {
        money = +prompt("Ваш бюджет на месяц", "300");
    }
    appData.budget = money;
    appData.timeData = time;
    blocksValues[0].textContent = money.toFixed();
    year.value = new Date(Date.parse(time)).getFullYear();
    month.value = new Date(Date.parse(time)).getMonth() + 1;
    day.value = new Date(Date.parse(time)).getDate();
});

expenses.addEventListener('click', function () {
    let sum = null;
    for (let i = 0; i < inputs.length; i++) {
        let a = inputs[i].value,
            b = inputs[++i].value;

        if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null && a != '' && b != '' && a.length < 50) {
            appData.expenses[a] = b;
            sum += +b;
        } else {
            i = i - 1;
        }
    };
    blocksValues[3].textContent = sum;
});

optionalExpensesBtn.addEventListener('click', function () {
    for (let i = 0; i < optionalExpensesItems.length; i++) {
        let opt = optionalExpensesItems[i].value;
        appData.optionalExpenses[i] = opt;
        blocksValues[4].textContent += appData.optionalExpenses[i] + '';
    }
});

counter.addEventListener('click', function () {

    if (appData.budget != undefined) {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        blocksValues[1].textContent = appData.moneyPerDay;

        if (appData.moneyPerDay < 100) {
            blocksValues[2].textContent = 'Низкий уровень достатка';
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 500) {
            blocksValues[2].textContent = 'Средний уровень достатка';
        } else if (appData.moneyPerDay > 500) {
            blocksValues[2].textContent = 'Высокий уровень достатка';
        } else {
            blocksValues[2].textContent = 'Произошла ошибка';
        }
    } else {
        blocksValues[2].textContent = 'Произошла ошибка';
    }
});

chooseIncome.addEventListener('input', function () {
    let items = chooseIncome.value;
    appData.income = items.split(', ');
    blocksValues[5].textContent = appData.income;
});

savings.addEventListener('click', function () {
    if (appData.saving == true) {
        appData.saving = false;
    } else {
        appData.saving = true;
    }
});

chooseSum.addEventListener('input', function () {
    if (appData.saving == true) {
        let sum2 = +chooseSum.value,
            perc = +percent.value;

        appData.monthIncome = sum2 / 100 / 12 * perc;
        appData.yearIncome = sum2 / 100 * perc;

        blocksValues[6].textContent = appData.monthIncome.toFixed(1);
        blocksValues[7].textContent = appData.yearIncome.toFixed(1);
    }
});

percent.addEventListener('input', function () {
    if (appData.saving == true) {
        let sum2 = +chooseSum.value,
            perc = +percent.value;

        appData.monthIncome = sum2 / 100 / 12 * perc;
        appData.yearIncome = sum2 / 100 * perc;

        blocksValues[6].textContent = appData.monthIncome.toFixed(1);
        blocksValues[7].textContent = appData.yearIncome.toFixed(1);
    }
});

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    saving: false,
    chooseExpenses: function () {
        for (let i = 0; i < 2; i++) {
            let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
                b = +prompt("Во сколько обойдется?", '');

            if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null && a != '' && b != '' && a.length < 50) {
                appData.expenses[a] = b;
            }
        };
    },
    detectDayBudget: function () {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        console.log("Ежедневный бюджет " + appData.moneyPerDay);
    },
    detectLevel: function () {
        if (appData.moneyPerDay < 100) {
            console.log('Минимальный уровень достатка');
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 500) {
            console.log('Средний уровень достатка');
        } else if (appData.moneyPerDay > 500) {
            console.log('Высокий уровень достатка');
        } else {
            console.log('Произошла ошибка');
        }
    },
    checkSavings: function () {
        if (appData.saving == true) {
            let save = +prompt("Какова сумма накоплений?", ''),
                percent = +prompt("Под какой процент?");

            appData.monthIncome = save / 100 / 12 * percent;
            console.log("Доход в месяц с вашего депозита:" + appData.monthIncome);
        }
    },
    chooseOptExpenses: function () {
        for (let i = 1; i < 3; i++) {
            let opt = prompt("Статья необязательных расходов");
            appData.optionalExpenses[i] = opt;
        }
    }
};
