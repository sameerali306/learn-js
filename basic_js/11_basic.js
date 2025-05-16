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
console.log(user.name);
console.log(user["location"]);







