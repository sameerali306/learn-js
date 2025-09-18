const symb=Symbol("key1")
const obj={
    name:"sameer ali",
    age:20,
    [symb]:"mykey1", ///teh type is symbol but it is not working why it give us string as a symbol
    email:"sameer@gmail.com"
}
// console.log(typeof obj[symb]);
obj.age=21
console.log(obj.age);
// Object.freeze(obj) //it freez the object mean we can not change the value f thet object
obj.greeting=function () {
    console.log("Hello User");
}
console.log(obj.greeting());








 