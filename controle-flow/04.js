const number=[1,2,3,4,5,6,7,8,9]
const newnnum=number.map( (num)=>num+10)
// console.log(newnnum);

number.forEach( function (items){
    // console.log(items+5);
    
})

let people=[
  {
    "userId": 1,
    "id": 1,
    "title": "quidem molestiae enim"
  },
  {
    "userId": 1,
    "id": 2,
    "title": "sunt qui excepturi placeat culpa"
  },
  {
    "userId": 1,
    "id": 3,
    "title": "omnis laborum odio"
  },
  {
    "userId": 1,
    "id": 4,
    "title": "non esse culpa molestiae omnis sed optio"
  },
  {
    "userId": 1,
    "id": 5,
    "title": "eaque aut omnis a"
  }]

  const student2=people
  .map( (user)=>user.title)
//   console.log(student2);

  people.forEach(  (items)=>console.log(items.title)
  )

  const item=people.filter( (items)=>items.id>2
  )
//   console.log(item);


  const reduces=[1,2,3,4,5]
  const values=reduces.reduce( function (acc,currvalue){
    // console.log(`accumulator:${acc} and the currentvalue :${currvalue}`);
    
    return acc+currvalue

  },0)
//   console.log(values);


let things=[
    {   itemsName:"t.v",
        price:12000
    },
     {   itemsName:"laptop",
        price:50000
    },
     {   itemsName:"dinnerset",
        price:80000
    },
     {   itemsName:"washing machine",
        price:1000
    },
     {   itemsName:"caroet",
        price:2000
    },
]

const total=things.reduce( function (acc,items){
    return acc+items.price
},0)
  console.log(total);
  