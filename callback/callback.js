
const welcome =(name)=>{
    console.log("Welcome "  + name );
    
}

const names = (callback)=>{
    callback("Ahmed")
}

names(welcome)



const add  = (a,b)=>{
    return a+b;
}

const display = (callback)=>{
    console.log(callback(10,5));
    
}

display(add)



let orders = [101,102,103]

orders.forEach((o)=>{
    console.log("Orders Proccesing " + o);
    
})








