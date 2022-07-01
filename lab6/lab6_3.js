let i = 0;

setTimeout(()=>console.log(i), 1000);
setTimeout(console.log, 1000, i);

for(let j = 0; j < 10; j++){
    i++;
}


