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