const parent=document.querySelector(".parent")
console.log(parent);
console.log(parent.children[2]);
for (let i = 0; i < parent.children.length; i++) {
    const element = parent.children[i].innerHTML;
    console.log(element);
    
    
}
parent.children[1].style.color="red"
console.log(parent.secondElementChild);
const day=document.querySelector(".child")
console.log(day);
console.log(day.parentElement);
console.log(day.nextElementSibling);