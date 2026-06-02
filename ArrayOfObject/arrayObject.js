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

    console.log("Name is " + emp.name);
    console.log("Hours Work " + emp.hours);
    console.log("His Money " + emp.hours * emp.perHourMoney);
     
}


const family = [
    {
        title : "Father",
        name : "Mohamed",
    },
    {
        title : "Mother",
        name : "Faadumo"
    },
    {
        title : "Big Boy",
        name : "Ahmed"
    },
    {
        title : "Young Girl",
        name : "Luul"
    }
]

for(let f of family){
    console.log("Title  " + f.title);
    console.log("Name is " + f.name);
  
}




