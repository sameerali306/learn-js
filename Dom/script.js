const name=document.getElementById("name")  //we can access the class or id by this method
console.log(name);
name.innerHTML="THE NAME SAMER ALI  WAS REMOVE"  //we can change the content of the inside the id like that
name.style.color="red"

const para=document.getElementById("para")
console.log(para);
para.innerHTML="the name sameer ali was an indian name"
para.style.color="green"
const id=para.id
console.log(id);

const button=document.querySelector(".click")
console.log(button);
button.style.backgroundColor="yellow"

const cl=button.className
console.log(cl);
const buttonn=cl.innerHTML="button"
console.log(buttonn);

const attribute=buttonn.getAttribute("class")
console.log(attribute);

const heading=document.getElementById("name").setAttribute("class","test heading")
console.log(heading);


const ids=heading.getAttribute("id")
console.log(ids);

const para=id.setAttribute("class",'test')
console.log(para);

const header=document.querySelectorAll("h1") //the queryselector select the first element that is given
console.log(header);                      //the queryselectorall select the all element that is given




