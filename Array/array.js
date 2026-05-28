

const names = ["Faadumo", "Yuusuf", "Nacimo", "Bile"]
console.log(names);

console.log(names[0]);
console.log(names[3]);
console.log(names.length);



names.push("Cali")
console.log(names);

names.pop()
console.log(names);

names.unshift("Sahro")
console.log(names);

names.shift()
console.log(names);

names.splice(1,1)
console.log(names);


let raadi = names.includes("Nacimo")
console.log(raadi);



// chalange

let grocery = ["rice", "eggs", "bread"]
console.log(grocery);

grocery.push("chicken")
console.log(grocery);

grocery.splice(1,1)
console.log(grocery);

grocery.unshift("milk")
console.log(grocery);

let readBread = grocery.includes("bread")
console.log(readBread);   













