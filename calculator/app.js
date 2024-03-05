const btn = document.getElementsByClassName('btn');
const op = document.getElementsByClassName('op');
const del = document.getElementById('del');
let display = document.getElementById('display');
const clear = document.getElementById('clear');
const double0 = document.getElementById('double0');

const calculate = () => {
  display.value = eval(display.value);
};

const addToDisplay = (input) => {
  display.value += input;
};

clear.addEventListener('click', function () {
  display.value = '';
});

del.addEventListener('click', function () {
  display.value =- display.value
});

double0.addEventListener('click', function () {
  display.value = 0;
});
