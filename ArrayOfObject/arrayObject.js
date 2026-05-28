

let students =[
    {
        name : "Yuusuf",
        score : 100
    },
     {
        name : "Qaali",
        score : 10
    },
     {
        name : "Yaasir",
        score : 80
    },
     {
        name : "Fardowso",
        score : 30
    }
]

students.forEach((student)=>{
    let result = student.score>=70;
    // console.log(student.score >= 80);
    if(result){
        console.log(student.name, student.score + " Pass ");
        
    }else{
        console.log(student.name, student.score + " Fail ");
        
    }


    
    
})



let employee = [
    {
        name : "Halima",
        hours : 38,
        perHourMoney : 10
    },
    {
        name : "CabdiQaaliq",
        hours : 45,
        perHourMoney : 10
    },
    {
        name : "Sahra",
        hours : 29,
        perHourMoney : 10
    }
]

for(let emp of employee){
    console.log(`My name is ${emp.name} The week I work ${emp.hours} hours This Week I need Money Worked ${emp.hours * emp.perHourMoney}`);
    
}


