function language(addlanguage) {
    const ul=document.createElement("li")
    ul.innerHTML=`${addlanguage}`
    document.querySelector(".language").appendChild(ul)
}
language("python")
language("php")

function addlanguageoptmizw(langugeName) {
    const li=document.createElement("li")
    li.appendChild(document.createTextNode(langugeName))
    document.querySelector(".language").appendChild(li)
    
}
addlanguageoptmizw("python")
//we can edit the items by following  method
const secondlanguage=document.querySelector("li:nth-child(3)")
const newli=document.createElement("li")
newli.textContent="react"
secondlanguage.replaceWith(newli)

const firstelement=document.querySelector("li:first-child")
firstelement.outerHTML="<li>java</li>"

//we can remove the items by following
const lastelement=document.querySelector("li:last-child")
lastelement.remove()

const code=document.createElement("div")
code.className="items"

code.innerHTML=`<h1>sameer ali</h1>
                <p>sameer ali is the web developer</p>
                <button>clicked me</button>
                 <img src="sameer.jpg" alt="" id="img">
`

document.body.appendChild(code)
const id=document.querySelector("#img")
id.style.width = "200px";
id.style.height = "200px";
console.log(code);

