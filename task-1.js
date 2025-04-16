// currency format


function fcurrency(amount,ccode){
    return new Intl.NumberFormat('en-US',{
        style:'currency',
        currency:ccode,
    }).format(amount);
}


console.log(fcurrency(123456.789, 'USD'));
console.log(fcurrency(123456.789, 'INR'));
