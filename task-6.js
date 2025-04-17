function cal(){
   return{
    add(a,b){
        return a + b;
    },
    subtract(a,b){
        return a - b;
    },
    multiply(a,b){
        return a * b;
    },
    divide(a,b){
       if(b===0) throw new Error("Cannot divide by zero");
       return a / b;
    }
   }

}

const math = cal();

console.log(math.multiply(10,0));