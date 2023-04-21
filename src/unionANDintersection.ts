function headOrtail() : "head" | "tails" {
    if (Math.random() > 0.5) 
        return "head"; 
    return "tails";
}

console.log(headOrtail())


function getUserInfo(): ["Error",Error] | ["Succes",{name:string, age: number}] {
    if (Math.random() > 0.5){
        return ["Error",new Error('Aww couldnt get data:(')]
    }
    else{
        return ["Succes",{
            name :"Luna",
            age:2
        }]
    }
}

const data = getUserInfo();

if (data[0] === "Error"){
    console.log(data[1])
}
else{
    console.log(data[1])
}

// intersection type or and type

function makeWeek(): Date & { end: Date } {
   
    const start = new Date()
    const end = new Date(start.valueOf() + (1000 * 60 * 60 * 24 * 7))
    return { ...start, end } // kind of Object.assign
  }
   
  const thisWeek = makeWeek()
  console.log(thisWeek.end.toString())


