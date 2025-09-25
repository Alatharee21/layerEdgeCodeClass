let fulfilled = !true;

let promisE = () =>{
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                resolve(
                console.log("Hello World")
            )
            },2000);
        })
}

promisE();