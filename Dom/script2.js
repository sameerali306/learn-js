const div=document.getElementById("div")
console.log(div);
const heading=div.querySelector("h1")
console.log(heading);
heading.innerText="hey there i am sameer ali from jandrote"
heading.style.color="blue"
div.style.background="yellow"

const h2=document.querySelector("h2")
console.log(h2);
h2.style.color="green"


const ul=div.querySelectorAll("ul")
console.log(ul);
const lis = div.querySelectorAll("li");
// lis.forEach(li => {
//   li.style.background = "gray";
// });
// lis[0].style.background="silver"
// lis[1].style.background="gray" //for indivical element we use this 
// lis[2].style.background="red"  //to style indivical element

const nodelist=document.getElementsByClassName("items")
console.log(nodelist);  //it return us an html colllection we can notuse for each llopp
                         //inorder to used we have to change it to array
const arr=Array.from(nodelist)                         
console.log(arr);
arr.forEach( function name(li){
    li.style.color="orange"
})



