primeNumber(15);
function primeNumber(n){
  if(n>1000){
    console.log("Данные не верны, число больше 1000");
    return;
  }
  if (n===0||n===1){
    console.log('Число='+n);
  }
  else{
    let d=2;
    while(d*d<=n & n%d!==0){
      d+=1;
    }
    if (d*d>n){
      console.log("Число простое");
    }
    else{
      console.log("Число не является простым");
    }
  }
}