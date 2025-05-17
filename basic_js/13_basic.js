function price(value,value2,...num1) {  //when we pass one parameter and pass more than one argument we have to store it in 
                           //rest operator ...  it give us an array
    return num1
    
} //in three parameter case 200 300 store in value and value2 and the rest are store in rest operater
const value=price(200,300,500,2000)
// console.log(value);

const user={
    productName:"coca cola",
    price:230,
    productName2:"rice",
    price2:450
}
function handleobject(object) {
    return `productName is ${object.productName} and its price is ${object.price}`
    
}
const derogate=handleobject(user)
// console.log(derogate);
const array=["derogate","chop chop","break the shachal","my bed"]

function arrarelement(getarray) {
    return getarray[2]
}
const indeible=arrarelement(array)
// console.log(indeible);

if (true) {
    let a="sameer ali"
    var b="shahzain"
    const c="ali"
    
}
// console.log(a);/
console.log(b);  //this accure due to that var is a global scope it can be access any where in code
// console.log(c);




