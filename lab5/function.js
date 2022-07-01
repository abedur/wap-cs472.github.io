function findMax(){
    var i;
    var max = -Infinity;
    
    for(i=0; i< arguments.length; i++){
        if(arguments[i] > max){
            max = arguments[i]; 
        }
    }    
    return max;
}

var max1 = findMax(1, 123, 500, 115, 66, 88);
var max2 = findMax(3, 6, 8);

console.log(`FindMax1 = ${max1}, FindMax2 = ${max2}`);


console.log('------------------------------------------');
function sum(...more){
    let total = 0;
    for (let index = 0; index < more.length; index++) {
        total += more[index];
    }
    return total;
}

let sum1 = sum(5, 5, 5);
let sum2 = sum(6, 6, 6, 6, 6);

console.log(`Sum1 = ${sum1}, Sum2 = ${sum2}`);
