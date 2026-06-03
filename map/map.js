let num = [1,2,3,4,5];

const mapNumber = num.map((n)=>{
    return n * n
})

console.log(mapNumber);



let names = ["Cali", "Dhuux", "Maryan"]

const mapNames = names.map((e)=>{
    return e.toUpperCase()
})

console.log(mapNames);


let students = [
    {
        name : "Ahmed",
        score : 85
    },
    {
        name : "Fatima",
        score : 92
    },
    {
        name : "Yuusuf",
        score : 54
    },
    {
        name : "Axlam",
        score : 71
    }
]

console.log(students);


let format = students.map((st)=>{
    return st.name + " "+ st.score
})

console.log(format);


