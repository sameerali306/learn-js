let player=["babar azam" ,"fakhar zaman","rizwan"]
let leader=["imran khan","nawaz sharif","shahbaz sharif"]
player.push(leader)
let ans=player.concat(leader) //instead of using concate method we use sepate operator
const all=[...player ,...leader]  //this method seprate the array and keep all array element indivical
// console.log(all);

let words=["derogate","indeliable",["paramour","oaf"],["obese","obiliterate"],["occult","burn the midnight oil"]]
const combine=words.flat(Infinity); //the flat method of array combine all array in one array when their is combination of array
// console.log(combine);

const obj={
    name:"sameer ali",
    age:"18",
    eduction:"intermediate"
}
// console.log(Array.isArray(obj)); //to check the object is array or not
// console.log(Array.from("sameer ali"));  //array.from method change any thing into an array

let score1=100
let score2=200
let score3=140

// console.log(Array.of(score1,score2,score3)); //the of method of array change the given element or variable into array

const user={
    name:"sameer ali",
    age:20,
    location:"gilgit"
}
// console.log(user.name);
// console.log(user["location"]);
user.location="jandrote"
Object.freeze(user) //the freez method of object can cannot do to make in object 
user.location="gupis"
// console.log(user);

const obj1=new Object()  //singleton object can be declare like this 
obj1.name="sameer ali"
obj1.age=20
obj1.location="gilgit"
// console.log(obj1);

const obj2={}  //a non singleton object can be declre like this
obj2.name="shahzain alam"
obj2.age=21
obj2.location="nomal"
// console.log(obj2);

const information={
    name:"sameer ali",
    fullName:{
        fname:"shahzain",
        fullName2:{
            fname:"ali"

        }
    }
}
// console.log(information.fullName.fullName2);

const obj4={
    a:"sameer ali",
    b:20
}
const obj5={
    c:"shahzain alam",
    D:20
}
const obj3={obj4,obj5}
// console.log(obj3);
const obj6=Object.assign({},obj4,obj5) //the object assign is a method of copying source object into target object
// console.log(obj6);//(target,source,source.....)  in this the property of obj5 is copy into obj4 
// console.log(Object.keys(obj5)); //by this property we can get the keys and value
// console.log(Object.values(obj5));
// console.log(Object.entries(obj5)); //the entries method of array change the keys and value into and a serate array
console.log(Object.hasOwnProperty("d")); //the hasownproperty identify the propery tht is give i present in object or not














