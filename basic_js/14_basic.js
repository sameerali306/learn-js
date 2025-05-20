function one() {
    let word1="to_do"
    function two() {
        const word2="intintable-energy"
        // console.log(word1);
    }
    // console.log(word2);
    two()
}
one()

// console.log(add(3));
function add(num) {
    return num+1
    
} //inthe case of function declration we can access if before initiliztion

// substract(3)
const substract=function (num) {
    return num-1
    
} //on the case of functio expression we cannot access a function before initilization

const user={
    userName:"ali",
    wellcome:function () {
        return  `${this.userName} well to the website`
        
    } //the key word this refer to the present contact in the object

}
// console.log(user.wellcome())
// user.userName="sameer"
// console.log(user.wellcome())
// console.log(this); //in the node envirment the value of this is empty object

function chai() {
    let user="sameer ali"
    console.log(this.user);
    
    
}
// chai()

const chaii=()=>{
     let user="sameer ali"
    // console.log(this);
}
// chaii()

function water(...fname) {
    return fname
    
} //explicite return a function we can use a return key word
console.log(water("chambali","sun flower","red rose"));

const flower=(...name)=>(name)
// console.log(flower("chambali","rosess","sunflower"));





