//iife(immediate invoked function expression)
(function chai() {
    console.log("this is inside function");
})();
(()=>{
    // console.log("hey their it is sameer ali");
    
    
})();
let ife=(function code(fname,lname) {
    return`hello ${fname} ${lname} your are enter i correct place`
})("sameer","ali")
// console.log(ife);

function one() {
    console.log("this is function one");
    two()
}
function two() {
    console.log("this is function two");
    three()
}
function three() {
    console.log("this is function thrre");
    one()
}
one()
two()
three()
