let students = [
    {
        id : 1,
        name : "Yuusuf",
        age : 20
    },
    {
        id : 2,
        name : "Maryan",
        age : 35
    },
    {
        id : 3,
        name : "Rowdo",
        age : 19
    },
    
]

const result = students.filter((st)=>{
    return st.id == 3;
    
})

console.log(result);


let numbers = [2,3,4,5,6,7,9,12,11]


const even = numbers.filter((num)=>{
    return num % 2 === 0
})

console.log(even);


 
const odd = numbers.filter((num)=>{
    return num % 2 !== 0
})

console.log(odd);






let findst = students.find((st)=>{
    return st.id == 1
})

console.log(findst);

let findOneNumber = numbers.find((num)=>{
    return num === 9
})

console.log(findOneNumber);


const xawadSevice = [
    {
        name : "Ahmed",
        transaction : 800,
        title : "Approved"
    },
     {
        name : "Fatima",
        transaction : 1200,
        title : "Pending"
    },
     {
        name : "Yuusuf",
        transaction : 450,
        title : "Approved"
    }
]

const pedingTransactions = xawadSevice.filter((pen)=>{
    return pen.title === "Pending"
}) 

console.log(pedingTransactions);



const inforYuusuf = xawadSevice.find((info)=>{
    return info.name === "Yuusuf"
})

console.log(inforYuusuf);



