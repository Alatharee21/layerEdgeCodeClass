/*function one(al_two){
    console.log(" Step 1 complete. Please call step 2 ");
    al_two()
}

function two(){
    console.log(" Step 2 ");
}

one(two);

let order = (now_deliver) => {
    console.log(" Order placed, Please deliver quick");
    now_deliver();
}

let deliver = () => {
    console.log(" Order received! Delivery in progress! ");
}

order(deliver);
*/
let stocks = {
    fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"]
}

let orrder = (fruit_name, now_deliverr) => {
    setTimeout(()=>{
        console.log(`${stocks.fruits[fruit_name]} was selected`)
    }, 2000)
    setTimeout(()=>{
        now_deliverr();
    }, 5000)
    
}

let deliverr = () => {
    setTimeout(()=>{
        console.log(" Production has started! ");

        setTimeout(()=>{
            console.log("The fruit has been chopped");

            setTimeout(()=>{
                console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);

            setTimeout(()=>{
                console.log("The machine has started");

                setTimeout(()=>{
                    console.log(`The result from the machine(Ice cream) was added inside the ${stocks.holder[1]}`);

                    setTimeout(()=>{
                    console.log(`${stocks.toppings[0]} was added to the ice cream as toppings`);

                    setTimeout(()=>{
                        console.log("Serve the ice cream")
                    },2000)
                },3000)
                },10000)
                }, 1000)
            }, 1000)
        }, 2000)

    }, 0o0)
}

orrder(2, deliverr);