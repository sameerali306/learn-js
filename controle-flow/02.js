//loop :-in the javascript loop are the block of code that repeadly execute based on the condition
for (let i = 0; i < 10; i++) {
    const element = i;
    if (i==5) {
        // console.log("we reach haf of our count");/
        
    }
    // console.log(element);
    
    
}
//for loop :-the for loop used when you know how many time the loop execute
for (let i = 1; i <= 10; i++) {
    const element = i;
    // console.log(`3*${i}=${3*i}`);
    }

    let myarray=["sameer ali","suhail","ehsan ","shahzain"]
for (let index = 0; index < myarray.length; index++) {
    const element = myarray[index];
    // console.log(element);
    
}

// Break and continue :-in the javascript the break and continue key wor are used to controle the loop inside the loop
for (let index = 0; index < 20; index++) {
    if(index==5){
        console.log("the value of 5 is detected");
         break          //the break stop the execution of code after it competely
    }
  
    console.log(`the value of the index is=${index}`);
    
    
}

for (let index = 0; index < 20; index++) {
    if(index==5){
        // console.log("the value of 5 is detected");
         continue         //the continue key word continue the execution of code by skipping one exectuion
    }
  
    // console.log(`the value of the index is=${index}`);
    
    
}
let i=0
while (i<=10) {
    if (i==7) {
        // console.log("alert");
        break
        
        
    }
    // console.log(`the value of i=${i}`);
    i=i+1
}

let num=0
while (num<=10) {
    // console.log(`the value of num is ${num}=${num*3}`);
    num++
}

let nums=0
do {
    // console.log(`the value of num is ${nums}=${nums*5}`);
    nums++
    
} while (nums<=10);

let name="sameer ali"
for (const val of name) {
    if (val==" ") {
        continue
        
    }
    // console.log(`the value of each character is ${val}`);
}

let classmate=[{
    name:"sameer ali",
    age:18
},
{
    name:"shahzain",
    age:20
},
{
    name:"ehsan mir",
    age:19
},
{
    name:"ali",
    age:22
}

]
for (const arry of classmate) {
    // console.log(`my best friend is ${arry.name} and age ${arry.age}`);
    
    
}

//Map in js is a method that store the keys along with value
//no duplicate value
const map=new Map()
map.set("name","sameerc ali")
map.set("age",22)
// console.log(map);
//we can also use for of loop in map
for (const [keys,value] of map) {
    console.log(keys,value);
    
    
}
