/*
1. {makeArmy:fn, outer: null }
2. {outer: global, shooters:[], i=0, arguments:{lenth:0}}
3. {outer: makeArmy, shooters:fn, arguments{lenth:0}}
4. {outer: while arguments:{lenth:0}}
5. 2
6. yes
*/

function makeArmy() {
    let shooters = [];
    let i = 0;
    while (i < 10) {
        let x = i;
        let shooter = function () {
            console.log(x);
        };
        shooters.push(shooter);
        i++;
    }
    return shooters;
}
let army = makeArmy();
army[0]();
army.forEach(fn=>fn());