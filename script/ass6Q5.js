
function promisE(){
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                resolve(
                console.log("Hello World")
            )
            },2000);
        })
}

async function hereWe(){
    console.log("First console message")

    await promisE()

    setTimeout(()=>{
        console.log("After awaiting")
    }, 2000)
    
};

hereWe();