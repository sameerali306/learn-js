let score=50
if (score>100) {
    let power="fly"
    console.log(`user power :${power}`);
}else{
    let power="not fly"
    console.log(`user power: ${power}`);
    
}

let price1=100
let price2=280
let price3=270
if (price1>price2>price3) {
    console.log("your bill is very high");
} else{
    console.log("buy more things according to your budget");
    
}

let logginbyfacebook="faria hussin"
let logginbygoogle="sameer ali "
if (logginbyfacebook==="sameer ali" && logginbygoogle==="ali sameer") {
    console.log("you are well come");
} else{
    console.log("invalid account ");
    
}

let password=12345
let userName="sameer ali"
if (password==12345 || userName=="faria hussain") {
    console.log("loggin succcessfully");
    
} else {
    console.log("wrong password or user name");
    
}

const month=3
switch (month) {
    case 1:
        console.log("january");
        break;
    case 2:
        console.log("febuary");
        break;
    case 3:
        console.log("march");
        break;
    case 4:
        console.log("april");
        break;

    default:
        console.log("other month");
        
        break;
}

const userNames="sameer ali"
if (userName) {
    console.log("the user namme is correct");
    } else {
        console.log("the user name is in correct");
    }
//falsy value

// false,0,-0,-0n,null,undefine,NaN

//truthy value
//"0" , " ","false",function(){},[],{},
const array=[]
if (array.length===0) {
    console.log("Array is empty");
}

const obj={}
if (Object.keys(obj).length===0) {
    console.log("object is empty");
}

//ternary operator= this operatorbis workn on the bbase of condition
const pepsi=101
pepsi>100?console.log("the price is too high"):console.log("the price is good ");
