export type headTail = "head" | "tails";


// You can create type aliases that combine existing types with new behavior by using Intersection (&) types.

type SpecialDate = Date & { getReason(): string } //like this

// Interface
export interface person  {
    name: string,
    age: number
    eat(food: string):void
}


// extends Interface

export interface student extends person{
    id:number,
    dept: string
}

// implement interface

export class professor implements person{
    name: string;
    age: number;

    eat(food: string) {
        console.log(`${this.name} is eating ${food}`);
      }
}

// interfaces are open meaning that properties can be added to them at any time

// Recursive types

export type nestedNumber = number | nestedNumber[];

// Fucntion Types

export type addTwoNumbers = (a:number , b: number) => number

