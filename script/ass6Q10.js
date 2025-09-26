let p1 = ()=>{
    return new Promise((resolve)=>{
        resolve(
            setTimeout(()=>{
                console.log(1)
            },1000)
        )
    })
}
let p2 = ()=>{
    return new Promise((resolve)=>{
        resolve(
            setTimeout(()=>{
                console.log(2)
            },2000)
        )
    })
}
let p3 = ()=>{
    return new Promise((resolve)=>{
        resolve(
            setTimeout(()=>{
                console.log(3)
            },3000)
        )
    })
}


Promise.all([p1(), p2(),p3()])
.then(whatC => console.log(whatC))