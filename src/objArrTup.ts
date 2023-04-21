function printt (dog:{
    name:string,
    age:number,
    breed:string,
    city?: string //  defines it can or cannot be undefined
}){
    console.log(`name = ${dog.name} , age = ${dog.age} , breed = ${dog.breed} , city = ${dog.city}`)
}

let dog = {
    name : "ash",
    age : 2,
    breed : "husky",
    me:'he'
}

//ts also does excess property checking
// print({
//     name : "ash",
//     age : 2,
//     breed : "husky",
//     weight:10
// })

printt(dog)


// index signatures

const phones: {
    [k: string]: {
      country: string
      area: string
      num: string
    }
  } = {}

phones.home = {
    country : "+92",
    area : "344",
    num : "7951594"
}

console.log(phones.home)

// Arrays

let names : string[] = ["Babar Azam" , "Messi"] 

// Objects in Arrays

let persons =[
    {
        name: "Usman",
        age: 20,
        height: "6'"
    }
]
// OR
let pets : {name: string ,age:number ,breed: string}[] = []

pets[0] = {
    name:"luna",
    age:2,
    breed: "Havanese"
}

pets[1] = {
    name:"sudo",
    age:2,
    breed: "german"
}

console.log(pets)

// Tuples
// restrictions are only on assignments, not on push or pop
let things : [number , string ] =[34, "lamp"]



