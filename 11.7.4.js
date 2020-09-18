
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