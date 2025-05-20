console.log(myFunction);
var myFunction=function () {
    console.log("this is inner function");
    }  //in the case of variable var the value set in the global memory is undefine
    // console.log(myFunction());

// console.log(fname);  //it give an error that canot access before initialization bcz the value store in trhe memory
let fname="sameer ali"  //is uninitilize when it was created
// console.log(fname);

console.log(fruit);  //this give an error that cannot access before initilization bcz the variable call
let fruit="apple"    //before define it

// console.log(boy); //undefine bcz the variable is not define

let foo="foo"                                    //during our coding behind their is  global executioon context was created
console.log(foo);                                //the globl exection has two hase memory creation phase and code exection phase
function getFullName(fname,lname) {              //in  the memory creation phase the value of windowthis key word and getfullname
    console.log(arguments);                      //personal name is store which is uninitilized of variable after the compilation
    let myvar="var inside function"             //the work of memory crestion phsde is end and cod eexection phase is start and execute
    console.log(myvar);                           //the code from first line the value of variable is give a value of foo from uninitilizes 
    const fullName="fname" + "lname"              //in the line n 25 the variable which return a function the fuction exection context is created
    return fullName                                //and all the same work is done for it as well the memory phase and the code exection phase
    }
    const personName=getFullName("sameer","ali")
    console.log(personName);
    




    
    
