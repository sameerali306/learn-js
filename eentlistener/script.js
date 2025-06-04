const div = document.createElement("div");

document.getElementById("owl").onclick = function () {
    const word = "you clicked on owl";
    
    div.textContent = word;  // Set the text of the div
    document.body.appendChild(div);  // Make sure the div is added to the DOM
};
//type of event
//timestamp , preventdefault ,target ,toelement , srcelement
//currenttarget

//event bubbling :-the event is trigger from inner to out
document.getElementById("image").addEventListener("click",function (e) {
    // console.log("the image was clicked");
},false)
document.getElementById("owl").addEventListener("click",function (e) {
    // console.log("the owl was clicked");
    e.stopPropagation()
    
    
},false)


//event capturing :-the event trigger from out to inner
document.getElementById("image").addEventListener("click",function (e) {
    // console.log("the image was clicked");
},true)
document.getElementById("owl").addEventListener("click",function (e) {
    // console.log("the owl was clicked");
    
    
},true)

document.querySelector("#image").addEventListener("click",function (e) {
    console.log(e.target.parentNode);
    console.log(e.target.tagName);
    if (e.target.tagName==="IMG") {
        console.log(e.target.id);
        
   const removeIt=e.target.parentNode
    removeIt.remove()
        
    } else {
        
    }
    
 
    
    
})