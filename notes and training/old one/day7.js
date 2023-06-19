//refer the w3school for the example and explanation

//let arr = [1,2,3,4]

 // {arr.push(5)
// console.log(arr)}

// arr.pop()
// console.log(arr)

// arr.shift()
// console.log(arr)

// arr.unshift(2)
// console.log(arr)

// delete arr[1]
// console.log(arr)

//arr1.concat(arr2)

//arr.flat()

//arr.splice()

//arr.slice()

// arr.shift=> for removing from the beginnig
// arr.unshift=> for adding from the beginnig
// arr.pop=> for removing from the last
// .arrpush=>for removing from the last
//delete arr => remove any element from the array but index is be the same
//arr1.concat(arr2) => it add the array with the two array
//arr.flat()=>it will combine all the arrays from the inner the array's
//arr.splice => it will add the product any where from the array
//arr.splice(1,0,"anything","anything")=>1=it add the element in the array postition
//0=it can delete the element from the array
//anything=add the element from the given position
//arr.slice()=>it will slice the element from the given array with the index

// map function 

//let a=arr.map(logic)
//console.log(a)

// let arr=[1,2,3,4]
// let a=arr.map((i)=>{return i*5})
// console.log(a)

// filter function

//arr.filter(function name)
// function(function name)(arr){
//     return arr(content)
// }
// let arr = ["sumith","sakshi","pranai","somesh","adithyan"]

let a=arr.filter (function(nam){
    return nam[0]=='s'
})
console.log(a)

// let a= (1,2,3,4,5)
// console.log(a)

// npm install node-fetch