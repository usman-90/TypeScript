function print (dog:{
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

print(dog)


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