var a=prompt("Введите число а:");
var b=prompt("Введите число b:");
function f1(a,b){
  return function(a,b){
  console.log(a+b);
  }
};
var f=f1();
if (isNaN(a)|| isNaN(b)){
  console.log("Введите число");
} else if(typeof(parseInt(a))=='number'& typeof(parseInt(b))=='number'){
  f(parseInt(a),parseInt(b));
}

// Решение неверное, скорее всего, неправильно поняли задание. Нужно создать функцию, которая возвращает другую функцию, причем каждая из этих функций (и внутренняя и внешняя) принимают в качестве аргумента числа, это могут быть 2 разных числа. Вторая функция возвращает сумму этих чисел. Правильный вариант решения ниже:

function getSumFunction(a) {
  return function(b) {
  	return a+b;
  }
}

const sumFunction = getSumFunction(2);

const sum = sumFunction(3);

console.log(sum); // 5
