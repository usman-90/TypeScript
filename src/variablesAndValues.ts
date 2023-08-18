// to assign a variable with type explicitly

let a: string;

// in ts, variables are born with their types

let b = "cat";

// literal types

const c = 6;

// any type

let d: any;

// function arguments and return values
// if u dont return anything, it is give void type else the the type of the value you return

function abc(a: number, b: number) {
  return a + b;
}

let lol: unknown = 3;
console.log(typeof lol); // number

// it basically is used to tell the complier that value should be one of these two types, if it is none of these two, it should not be any other third type

// type Guards
// instanceOf  |  typeOf

let value:
  | Date
  | null
  | undefined
  | "pineapple"
  | [number]
  | { dateRange: [Date, Date] };

// instanceof
if (value instanceof Date) {
  value;
}
// typeof
else if (typeof value === "string") {
  value;
}
// Specific value check
else if (value === null) {
  value;
}
// Truthy/falsy check
else if (!value) {
  value;
}
// Some built-in functions
else if (Array.isArray(value)) {
  value;
}
// Property presence check
else if ("dateRange" in value) {
  value;
} else {
  value;
}


let someValue: string | null = "Hello";

// Using the non-null assertion operator to tell the compiler that we know someValue won't be null
let len = someValue!.length;

console.log(len); // No error, because we've assured the compiler that someValue won't be null

