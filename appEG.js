// ## Inline CSS

// ## Javascript


// ### BASICS

// VARIABLES

//never use var, it allows javascript to create issues
var a = 1

//let allows you to edit its data
let b = 2

// const does not let you allow its data
const c = 3
// ------------------------------------------------------------------------------------
// FUNCTIONS

// Functions execute code within thier scope aka "{}" using data from within or outside
// A Function is instantiated with the "Function" key word
function myExampleFunction() {

    x = 5
    return (x)
}
// In order for a function to be run, it needs a function "Invocation" e.g. myExampleFunction
// When the function is "Invoked" it creates an "Exectution Context" which defines the "Scope" of what the function can execute

// ------------------------------------------------------------------------------------
// ARRAYS

//An Array is a data type that allows you to store data in a list via its index
// It starts its index count at 0 instead of 1 and you access it via index
const array = [1, 2, 3, 4, 5]

const complexArray = [1, 2, 3, [4, 5], 6]
// ------------------------------------------------------------------------------------
// OBJECTS

// Object is a data type that allows you to stare data via a "KEY:VALUE" pair
// You access its data through the . operator
const Cat = {Demon}

const exampleObject = {

    Dog: bestboy,

    House: {
        Livingroom,
        Kitchen,
        Bedroom,
        Bathroom
    }
}
// This is an example of accesing the Value Bathroom on the Property House in the Object exampleObject
exampleObject.House.Bathroom
// ------------------------------------------------------------------------------------
// IF STATEMENTS

// const x = banana
// if (x === 3) {
//     return (true)
// } if (x === undefined) {
//     return null
// } else {
//     return false
// }

const y = 5
if (y === 5 || Number) {
    return true
}

const z = 3
if (z === 3 && Number) {
    return true
}