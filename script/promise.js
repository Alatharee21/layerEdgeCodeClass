let stocks = {
    fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"]
}

let isShopOpen = true;
//let isShopOpen = !true;

let order = (time, work) => {
    return new Promise((resolve, reject)=>{
        if(isShopOpen){

            setTimeout(()=>{resolve(work())}, time)
            
        }
        else{
            reject(console.log("Our shop is closed"))
        }
    })
};

order(2000, ()=>console.log(`${stocks.fruits[0]} was selected`))

.then(()=>{
    return order(1000, ()=>console.log("Production has started"))
})
.then(()=>{
    return order(3000, ()=>console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`))
})
.then(()=>{
    return order(4000, ()=>console.log("The machine has started"))
})
.then(()=>{
    return order(5000, ()=>console.log(`The result from the machine(Ice cream) was added inside the ${stocks.holder[1]}`))
})
.then(()=>{
    return order(6000, ()=>console.log(`${stocks.toppings[0]} was added to the ice cream as toppings`))
})
.then(()=>{
    return order(7000, ()=>console.log("Serve the ice cream"))
})


.catch(()=>{
    console.log("Customer left")
})

.finally(()=>{
    console.log("Day ended, Shop is closed");
})