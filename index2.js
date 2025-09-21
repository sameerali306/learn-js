function addlanguage(language) {
    const li=document.createElement("li")
    li.innerText=`${language}`
   const li2= document.querySelector(".language")
   li2.appendChild(li)
    
}
addlanguage("python")
addlanguage("c++")
function language(lang) {
    const li=document.createElement("li")
    li.appendChild(document.createTextNode(lang))
    document.querySelector(".language").appendChild(li)
    
}
language("mongo")

//edit
const edit=document.querySelector("li:nth-child(2)")
edit.innerText="php"
const newli=document.createElement("li")
newli.textContent="css"
edit.replaceWith(newli)

const secondlang=document.querySelector("li:nth-child(1)")
const newli2=document.createElement("li")
newli2.textContent="janjo"
secondlang.replaceWith(newli2)

const thirdlang=document.querySelector("li:nth-child(4)")
const newli3=document.createElement("li")
newli3.textContent="react"
thirdlang.replaceWith(newli3)
const firstlang=document.querySelector("li:first-child")
firstlang.outerHTML="<li>next js</li>"

const lastelement=document.querySelector("li:last-child")
lastelement.outerHTML="<li>python</li>"
