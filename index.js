// const day=document.querySelector(".days")
// console.log(day);
// console.log(day.children.innerinnerHTML);
// console.log(day.children[1].innerHTML);

// for (let i = 0; i < day.children.length; i++) {
//     console.log(day.children[i].innerHTML);
    
    
// }
// day.children[1].style.color="green"
// console.log(day.firstElementChild);

// const days=document.querySelector(".day")
// console.log(days.parentElement);
// console.log(days.nextElementSibling);

const div=document.createElement("div")
console.log(div);
div.className="div"
div.id="element"
div.setAttribute("name","sameer ali")
// div.innerText="how are you"
const addtext=document.createTextNode("how are you")
div.appendChild(addtext)
div.style.padding="12px"
div.style.background="green"
document.body.appendChild(div)



