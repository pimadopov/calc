'use strict'

//отображение результата на дисплее
function display(val) {
  document.getElementById('result').value += val;
  return val;
}

//функция вычисления
function solve() {
  let x = document.getElementById('result').value;
  let y = eval(x);
  document.getElementById('result').value = y;
  return y;
}

//очистка дисплея от лишних элементов
function clearScreen() {
  document.getElementById('result').value = '';


}
