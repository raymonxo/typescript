//------------------------------------------------------------------------------
// Basic Types
//------------------------------------------------------------------------------
let demoBooleans = function() {
  console.log("\ndemoBooleans");

  // boolean
  let isDone: boolean = false;
  let isDone2 = true; // Type inference
}

let demoNumbers = function() {
  console.log("\ndemoNumbers");

  // number (all numbers are floating point)
  let decimal: number = 6;
  let hex = 0xf00d;
  let binary = 0b1011;
  let octal = 0o744;
}

let demoStrings = function() {
  console.log("\ndemoStrings");

  // string
  let name: string = "bob"; // Double-quote
  name = 'smith';           // Single-quote
  let age = 20;

  // Template strings (multiline w/embedded expressions)
  let sentence = `Hello, my name is ${ name }.
  I'll be ${ age + 1 } years old next month.`;
}

let demoArrays = function() {
  console.log("\ndemoArrays");

  // Arrays
  let list: number[] = [1, 2, 3];
  let list2 = [1, 2, 3, 4,];  // Trailing comma, type inference
  let list3: Array<number> = [1, 2];
}

let demoTuples = function() {
  console.log("\ndemoTuples");

  // Tuples
  let x: [string, number];
  x = ['hello', 10];

  console.log(x[0]);  // hello
  console.log(x[1]);  // 10
}

let demoEnums = function() {
  console.log("\ndemoEnums");

  enum Color {Red, Green, Blue};  // Enum values start at 0
  let c = Color.Green;
  console.log(c);       // 1
  let cName = Color[c];
  console.log(cName);   // Green

  enum Months {Jan = 1, Feb, Mar};  // Can set enum values
  enum Days {Mon = 1, Wed = 3, Fri = 17};
}

// any turns off compiler checks
let demoAny = function() {
  console.log("\ndemoAny");

  let notSure: any = 4;
  notSure.toFixed();    // OK, toFixed exists (runs successfully)
  // notSure.ifItExists(); // Runtime error (ifItExists not a member of number)

  let x;  // any is implicit unless you turn this off in tsconfig
          // (which you should!)
}

// Object variable can refer to any object but the compiler prevents
// accessing members not defined on Object
let demoObject = function() {
  console.log("\ndemoObject");

  let obj: Object = 4;
  // obj.toFixed(); // Compile error, toFixed doesn't exist on Object
}

// void variables can only be assigned undefined or null
let demoVoid = function() {
  let unusable: void = undefined;
  let unusable2: void = null;
}

// Type assertions are like type casts in other languages
let demoTypeAssertion = function() {
  // angle-bracket syntax
  let someValue: any = "this is a string";
  let strLength = <string>someValue.length; // We know it's a string
  console.log(strLength);

  // as syntax (this is the only syntax allowed when using JSX)
  let strLength2 = (someValue as string).length; // We know it's a string
  console.log(strLength2);
}

demoBooleans();
demoNumbers();
demoStrings();
demoArrays();
demoTuples();
demoEnums();
demoAny();
demoObject();
demoVoid();
demoTypeAssertion();
