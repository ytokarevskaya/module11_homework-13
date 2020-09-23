x=prompt("Введите число:");
n=prompt("Введите степень:");
const expon =(x,n) => {
   if (n!=1){
    if (n>0){
      return x=expon(x,n-1)*x;
    } else if(n<0){
      return 1.0 / expon(x,-n);
    } else if (n===0){
      return 1
    } 
  } else{
    return x;
  }
}
if (isNaN(+x)||isNaN(+n)){
  alert("Введите числа")
}else {
  console.log(expon(+x,+n))
}