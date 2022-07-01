const arr = ['Banana', 'Apple', 'Blueberry', 'Blackberry', 'Strewberry', 'Ruspberry'];
const fruit = arr.filter(
    function (elem, index, array) {
        return elem.includes('berry');
    }
).map(function (elem, index, array) { return elem.length });


console.log(fruit);

console.log("-------------------------");


const grade = [99, 89, 83, 79, 75, 70];

const avgGrade = grade.filter(function (elem, index, array) {
    return elem > 80;
}).reduce(function (prvVal, curVal, index, array) {
    console.log(curVal);
    return prvVal + (curVal / array.length);
}, 0);

console.log(avgGrade);


console.log("-------------------------");

const a = [1,3,5,3,3]
const res = a.find(function(elem){
    return elem >1;
});

console.log(res);

console.log("-------------------------");
const aArr = [1,3,5,3,3]
const ares = aArr.findIndex(
    function(elem){
        return elem >3;
    }
);
console.log(ares);

