// on basis of value and daa store in a memory there are two type of data primitive and non-primitive data type
// in a primitive data type the value is copy and given to the user not the original data
// *string *number *boolean *null *undefine *bigInt *symbol

//in a non primitive data type the reference or address of th data is give to the user
//*Array,Object,Function
//stack memory(primitive) heap(non primitive)

let name="sameer ali"  /*this both variable are storein the stack memory and the cpy of name ids given to name2 variable so
                        any change in name2 will not effect the name varible value */
let name2=name
name2="faria hussain"
// console.log(name);/
// console.log(name2);

let person1={
    name:"sameer ali",
    email:"samier24!kffk",
    age:20
}    /*the non primitive data type is store in hea memory the reference of the data is give so any change in reference
        variable will change the orignal data too */
let person2=person1
person2.name="faria hussain"
// console.log(person2);/

const fname=new String("faria hussain")
// console.log(fname.__proto__);
// console.log(fname.length); //we can fin the lenght of string
// console.log(fname.toUpperCase()); //we can change our string to uppercase
// console.log(fname.charAt(2)); //we can find which character at that a specific index
// console.log(fname.indexOf("a")); //we can check which number the character present
// console.log(fname.substring(0,4)); //it return a piece of string from one index to anather the last 
// console.log(fname.slice(-13,-9));//in the slice we can give a negative value as well

const Email=new String("     sameerali@gmail.com     ")
// console.log(Email);
// console.log(Email.trim()); //it remove the extra space from the string

const fname1="faria hussain"
// console.log(fname1.replace("hussain","samir"));  //it replace the the value to the value which is given
// console.log(fname1.includes(("faria")));//it see the given value is resent in the string or not and return
                                          //true or fals
const number=new Number(123.7886)
// console.log(number);

// console.log(number.toFixed(2));
// console.log(number.toPrecision(2));

const account_blanace=1100000
// console.log(account_blanace.toLocaleString("en-IN"));


// console.log(Math.abs(-10)); //it change the negative value to postive
// console.log(Math.round(10.10)); //it round off the number
// console.log(Math.ceil(10.9)); //it take the highest value not the lowest in round off
// console.log(Math.floor(10.9)) //it take the lowest value

// console.log(Math.min(10,1,9,8,5)) //it give us a small value 
// console.log(Math.max(10,1,9,8,5)) //it give us a higher  value 

// console.log(Math.random());  //it generate a random number batween zero and one
// console.log(Math.random() *10); //in order to avoid zero
// console.log((Math.random() *10) +1); //it give us zero as well if we want a number greater than zero we use it

const numbers=Math.floor((Math.random()*10)+1)
// console.log(numbers);/
const min=10
const max=20
// console.log(Math.floor(Math.random() * (max-min+1))+min);
// const first=max-min+1
// console.log(first);
// const second=Math.random()*first
// console.log(second);
// const third=Math.floor(second*first)+min
// console.log(third);

// const first=Math.random()
// console.log(first);
// const second=first * (max-min + 1)
// console.log(second);
// const third=Math.floor(second+min)
// console.log(third);

const myDate=new Date()
// console.log(myDate.toLocaleString()); //it give the date month and year in number format and time also 
// console.log(myDate.toDateString()); //it give the day month and time
// console.log(myDate.toLocaleDateString()); //it give only date
// console.log(myDate.toJSON()); //it gives date month and year in number with dashes
// console.log(myDate.toTimeString()); //it only give time

let MyCreatedDate=new Date(2025,8,3)
// console.log(MyCreatedDate.toDateString());//

const array=[1,2,3,4,5,6]
// console.log(array.push(1)); //add a new element to an array
// console.log(array.pop()); //it remove the last element of an array
// console.log(array.unshift(9)); //the element is insert in the starting of array
// console.log(array.shift()); //the elememnbt is remove from the first of an array
// console.log(array.includes(10)); //it tell the given element is present the array or not
// console.log(array .indexOf()); //it give the index of given element
// console.log("A", array);
// console.log(array.slice(1,4)); //it give a section of array not include the 4 item
// console.log(array.splice(1,4)); //it remove the setion of an array from an array and return it
// console.log(array);

const array2=[1,2,3,[5,6,7],8,[8,9,[10,11]]]
const anatherarray=array2.flat(Infinity)
// console.log(anatherarray);
// console.log(Array.isArray("hitesh"));
// console.log(Array.from("hitesh"));

const score1=100
const score2=200
const score3=300
console.log(Array.of(score1,score2,score3));
























































