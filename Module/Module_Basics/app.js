// const add=require("./math");

// const mult=require("./math");

// const div=require("./math");


// console.log(add(10,5));
// console.log(mult(10,5));
// console.log(div(10,5));

//Common Js


//!Note:

//?  1. module.exports is a single object or value.
//when you reassign module.exports (e.g. module.exports=add),it completely replaces whatever was previously assigned.
// If you reassign it again (module.exports.mult),the pervious value (add) is replaced with mult.


//!  2........

// const{add,mult,div,PI}=require("../Module_Basics/math");
// console.log(add(10,5));
// console.log(mult(10,5));
// console.log(div(10,5));
// console.log(PI);


//!  #-3---->

const math=require("../Module_Basics/math");
console.log(math.add(10,5));
console.log(math.mult(10,5));
console.log(math.div(10,5));
console.log(math.PI);