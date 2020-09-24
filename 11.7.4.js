
var a=prompt("Введите число а:");
var b=prompt("Введите число b:");
if (isNaN(+a) || isNaN(+b)){
  console.log("Введите числа");
}else{
  const intervalOutputNumber = setInterval(outputNumber, 1000, +a,  +b);
}

function outputNumber(a,b){
  for(i=a;i<=b;i++){
    console.log(i);
  }
}

// Задание выполнено не верно. Числа выводятся все сразу, причем вывод повторяется до бесконечности. По заданию числа должны выводиться по 1 в секунду и после вывода последнего числа интервал должен заканчиваться. Верный вариант решения ниже:


function logNumbers(begin, end) {
  let current = begin;

  let timerId = setInterval(function() {
    console.log(current);
    if (current == end) {
      clearInterval(timerId);
    }
    current++;
  }, 1000);
}

logNumbers(5, 15);
