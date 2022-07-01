const printNumbers = function (from, to) {
    let base=1;	
    while(from<=to){
      setTimeout(function(x){
        console.log(x);
      },base*1000,from);
      from++;
      base++;
    }
  return;
};
printNumbers(1, 5);
