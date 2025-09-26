let ass6Q7 = ()=>{
    return new Promise((resolve, reject)=>{
        resolve(console.log(10))
    })  
}

let ass6Q7a = 

ass6Q7()
.then(()=>{
    return new Promise((resolve, reject)=>{
        resolve(console.log(10 * 2))
    })  
}
)


async function delError(){
    try {
        let rasheedHuman = !true;
        
        if(rasheedHuman == !true){
        throw new Error("error occured! Rashed is a freaking human!")
        }
        
    } catch (error) {
        console.error(error)
    }
}

delError();