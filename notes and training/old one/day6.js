// OOP(object orianted programing)

//nested object

// {let car ={
//     style : "eco",
//     brand : "Ford",
//     model : "2020",
//     milage: "18kmmpl",
//     type  : "sports",
//     colour: "red and black",
//     functionality: function(style,model,type,colour){
//         console.log(`this is ${this.style} ${this.model} ${this.type} ${this.colour}`)
//     }
// }
// car.functionality()}

// {let car ={
//     style : "eco",
//     brand : "Ford",
//     model : "2020",
//     milage: "18kmmpl",
//     type  : "sports",
//     colour: "red and black",
//     functionality: function(style,model,type,colour){
//         console.log(`this is ${style} ${model} ${type} ${colour}`)
//     }
// }
// car.functionality("audi","2021","sedan","black") }

// let car ={
//     style : "eco",
//     brand : "Ford",
//     model : "2020",
//     milage: "18kmmpl",
//     type  : "sports",
//     colour: "red and black",
//     functionality: function(style,model,type,colour){
//         console.log(`this is ${style} ${model} ${type} ${colour}`)
//     },new:function(){this.functionality("jaguar","2019","sedan","brown")}
// }
//  car.new() 

// let student ={
//     nam:{
//         firstnam:"Abi",
//         lastnam:"navan",
//     },
//     new:function(){console.log(this.nam.firstnam)}
// }
// student.new()


// class 

//constructor

// class car{
//     style
//     brand 
//     model 
//     milage
//     type
//     colour
//     constructor(s,b,m,mm,t,c){
//     this.style=s
//     this.brand=b
//     this.model=m
//     this.milage=mm
//     this.type=t
//     this.colour=c
//     }
// };
// let car1= new car("mustang","ford","2021","18kmpl","sports","black")
// let car2= new car("eco sport","ford","2022","10kmpl","sports","ash")
// let car3= new car("fiesta","ford","2009","14kmpl","sports","red")
// console.log(car1);
// console.log(car2);
// console.log(car3);

// class student{
//     namee
//     roll
//     standard
//     constructor(n,r,s){
//         this.namee=n
//         this.roll=r
//         this.standard=s
//     }   
// };
// let student1= new student("ragul","21","5th")
// let student2= new student("abi","22","10th")
// console.log(student1);
// console.log(student2);

// console.log(student1.namee)

// student1.namee="aarthish"
// console.log(student1)

//  functonality using class

// class phone{
//     constructor(b,m,yom){
//         this.brand=b
//         this.model=m
//         this.year =yom
//     }
//     age(){
//        let a=2023-this.year
//         console.log(`${this.brand} age is ${a}`)
//     }
// };
// let phone1 = new phone("redmi","A1","2020")
// let phone2 = new phone("mi","A2","2021")
// phone1.age()
// phone2.age() 

//setter and getter

// can indierectly use the data to access the code

// class phone{
//     constructor(arr){
//         this.setarr(arr)
//     }
//     setarr(newarr){
//         this.arr=newarr
//     }
//     getarr(){
//         return this.arr

//     }
// };
// let model= new phone(["mi","vivo","apple"])
// console.log(model.getarr()[2])