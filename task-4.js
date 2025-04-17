var golbalVar = 10;

function f1(){
    let localVar = 20;
    const localVar2 = 30;
    var localVar3 = 40;
    console.log(golbalVar);
    console.log(localVar); 
    console.log(localVar2);
    console.log(localVar3);

}

console.log(golbalVar);
f1()



