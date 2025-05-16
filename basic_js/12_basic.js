const obj={
    word1:"derograte",
    word2:"indabile",
    phrase:"burn the midnight oil",
    phrase1:"chop chop"
}  //in the below we cna extract value from object mean we destracture the object
const ans=obj.phrase1
//   console.log(ans);

const {phrase1}=obj
// console.log(phrase1);
const {phrase1:good}=obj  //we can change the name of teh keys in object like that
// console.log(good);

function loggedIn(user="sam") {
    if (user===undefined) {
        console.log("please enter a user name");
        
        
    }
    return `${user} just loggedIn`
    }
    const user2=loggedIn("")
    console.log(user2);
    


