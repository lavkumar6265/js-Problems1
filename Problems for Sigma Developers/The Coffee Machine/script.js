function randomDelay(min,max){
    let ans = Math.floor(Math.random()*(max-min +1))+min;
    return ans;
}

async function brewCoffee(coffeeType){

    const brewingTime = randomDelay(2000,5000);

    return new Promise((resolve)=>{
        setTimeout(() => {
            const coffeMessage = `Your ${coffeeType} coffee is ready! Enjoy!${brewingTime}`;
            resolve(coffeMessage);
        },brewingTime);
    })
}

brewCoffee('Cappuccino').then((message)=>{
    console.log(message);
}).catch((error)=>{
    console.log('Error brewing coffee: ',error); 
});

