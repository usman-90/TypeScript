import { headTail, nestedNumber } from "./types";

function headOrtail() : headTail {
    if (Math.random() > 0.5) 
        return "head"; 
    return "tails";
}

console.log(headOrtail())

// Interfaces are used to represent object types specifically



// recurive types
let arr : nestedNumber = [32,43,[32,344,[23],65],32]


