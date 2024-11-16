const startButton = document.getElementById('start')
const expensesFirst = document.getElementById('expenses_1')
const expensesTwo = document.getElementById('expenses_2')
const expensesThree = document.getElementById('expenses_3')
const expensesFour = document.getElementById('expenses_4')
const expensesItemBtn = document.getElementById('expenses-item-btn')
const expencesValue = document.querySelector('.expences-value')

const optionalExpensesItem = document.querySelector('.optionalExpenses-item')
const optionalExpensesBtn = document.getElementById('optionalexpenses-btn')
const optionalExpensesValue = document.querySelector('.optionalexpenses-value')

const countBudgetBtn = document.getElementById('count-budget-btn')

const chooseIncome = document.getElementById('income')

const int = document.getElementById('savings')




const checkSavings = document.querySelector('#savings')
const sumValue = document.querySelector('#sum')
const persentValue = document.querySelector('#percent')
const monthsavingValue = document.querySelector('.monthsavings-value')
const yearsavingsValue = document.querySelector('.yearsavings-value')

sumValue.disabled = true
persentValue.disabled = true



const appData = {
  budget: 0,
  expenses: {},
  income: 0,
  optionalexpenses: {},
  savings: false,
  setSavings() {
    if (appData.savings == true) {
      appData.savings = false
    } else {
      appData.savings = true
    }
    console.log(appData.savings)
  },
  getSavings() {
    if (appData.savings == true) {
      let sum = +sumValue.value
      let persebt = +persebtValue.value
      appData.monthInCome = sum/100/12*persent
      appData.yearInCome = sum/100*persent
      monthInComeValue.textContent = appData.monthInCome.toFixed(2)
      yearInComeValue.textContent = appData.yearInCome.toFixed(2)
    }
  },
  start() {
    money = +prompt('Ваш бюджет на месяц?','')
    while ( money =='' || money == null || isNaN(money)) {
      money = +prompt('Введите бюджет заного!')
    }
    appData.budget = money
    budgetValue.textContent = appData.budget
  },
  getExpenses: ()=> {
    let a = expensesFirst.value;
    let b = expensesTwo.value;
    let c = expensesThree.value;
    let d = expensesFour.value;
    let sum = 0

      if ((typeof (a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50 && a.length >= 3) {
        appData.expenses[a] = b;
        sum += +b;
      };

      if ((typeof (c)) != null && (typeof(d)) != null && c != '' && d != '' && c.length < 50 && c.length >= 3) {
        appData.expenses[c] = d;
        sum += +d;
      };

      expencesValue.textContent = sum;
  },
  getOExpenses() {
      optionalexpensesItem.forEach((item, index)=>{
        appData.optionalexpenses[index] = item.value
      })
      console.log(appData.optionalexpenses)

      optionalExpensesValue.textContent = ''
      for ( let item in appData.optionalexpenses) {
        if (appData.optionalexpenses[item] != '') {
          optionalExpensesValue.textContent += appData.optionalexpenses[item] + ' - '
        }
        
      }
     },
  getMoneyPerDay() {
        let budgetValue = ''
        if (appData.budget != undefined && appData.budget != 0) {
          appData.countBudgetBtn = ((appData.budget - +expencesValue.textContent) / 30).toFixed()
          dayBudgetValue.textContent = appdata.getMoneyPerDay
          if( appData.countBudgetBtn < 100) {
            levelValue.textContent = 'Минимальный уровень дохода'
          } else if (appData.countBudgetBtn > 100 && appData.countBudgetBtn < 2000) {
            levelValue.textContent = 'Средний уровень дохода'
          } else if (appData.countBudgetBtn > 2000) {
            levelValue.textContent = 'Высокий уровень дохода'
          } else {
            levelValue.textContent = 'Ошибка'
          }
        
    }},
  getInCome() {
    let items = chooseIncome.value
    if (items != '') {
      appData.income = items.split(',')
      let inComeValue  = 0
      incomeValue.textContent = appData.income
    }
    },
    int() {

    }
  }
  

 
startButton.addEventListener('click', appData.start)
expensesItemBtn.addEventListener('click', appData.getExpenses)
optionalExpensesValue.addEventListener('click', appData.getOExpenses)
countBudgetBtn.addEventListener('click', appData.getMoneyPerDay)
chooseIncome.addEventListener('input', appData.getInCome)
checkSavings.addEventListener('input', ()=> {
  if( checkSavings.checked) {
    sumValue.disabled = false
    persentValue.disabled = false
  } else {
    sumValue = true
    persentValue = true
    sumValue.value =''
    persentValue.value =''
  }
})




sumValue.addEventListener('input', appData.getSavings)
persentValue.addEventListener('input', appData.getSavings)
monthsavingValue.textContent = ''
yearsavingsValue.textContent = ''

const yearValue = document.querySelector('.year-value')
const monthValue = document.querySelector('.month-value')
const dayValue = document.querySelector('.day-value')

yearValue.value = now.getFullYear()
monthValue.value = now.getMonth() + 1
dayValue.value = now.getDay()