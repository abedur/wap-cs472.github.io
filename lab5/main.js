/* Create a function using function declaration named sum with one parameter of Array type, the
returned result is the sum of all elements which are greater than 20. */
const numbers=[20,2,30,40,11,40,15,35];
const sum = numbers.filter(n=>n>20).reduce((accu,curVal)=>accu+curVal,0);
console.log(sum);


/*
Create a function using function expression named getNewArray with one parameter of String
Array, return a new array which contains all string, length is greater than and equal to 5, and
contains letter ‘a’.
*/
const strings=["abedur","abed","adyan","adi","subedur","ubiydul"];
const getNewArray=function(strings){
    return strings.filter(item=>item.length>=5 && item.includes('a'));
}
console.log(getNewArray(strings));
