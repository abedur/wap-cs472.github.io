const a = [1,2,3];
const str = 'dog';
const b = ['a','b','c'];

const res = [...a, ...str, ...b];
console.log(res.reverse().join(''));

const rev = [...a].reverse().join('');
console.log(rev);

const rev1 = [...str].reverse().join('');
console.log(rev1);


