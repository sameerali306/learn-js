// in the stack memory the copy of the value is store
// in the heap memory the reference of the value is store

let myname="sameer ali"
let myanathername=myname
myanathername="samir ali"
// console.log(myname);
// console.log(myanathername);

let obj1={
    name:"sameer ali",
    age:20
}
let obj2=obj1
obj2.name="faria sameer"

// console.log(obj1.name);
// console.log(obj2.name);


// ***********************string****************************
let name="sameer ali"
age=23
// console.log(`my name is ${name} and my age is ${age}`); //instead of using this method a new method is use which is string interpolation by using baktex

// anather way of declaring a string
const fname=new String("smaeer ali")
// console.log(fname);

let fruit="apple"
console.log(fruit.toUpperCase()); //it does not chane the orignal string make the copy of it
console.log(fruit.length);
console.log(fruit.charAt(3));
console.log(fruit.indexOf("e"));








