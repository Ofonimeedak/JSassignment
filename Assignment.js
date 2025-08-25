// // Question 1

// const user = [
//   { name: "Evan", Age: 3 },
//   { name: "ofonime", Age: 20 },
//   { name: "Amos", Age: 15 },
//   { name: "paul", Age: 18 },
//   { name: "silas", Age: 19 }
// ];

// const getAdultUser = (user) => {
//   return user.filter(user => user.Age > 18);
// }

// console.log(getAdultUser(user));

// // Question 2 doubleArray of Numbers
// const number =[23,4,5,8,10]
// const  doubleNumber=(number) => number.map(item=>item *2);
// console.log(doubleNumber(number))


// //Question 3 Object Calculator

// const calculator={add:(x,y)=>x+y,subtract:(x,y)=>x-y,div:(x,y)=>x/y,mult:(x,y)=>x*y,mod:(x,y)=>x%y};
// function calculatorResult(x,y) {
//     return `Addition Answer: ${calculator.add(x,y)},
//     Subtraction Answer: ${calculator.subtract(x,y)}
//     Division Answer:${calculator.div(x,y)}
//     Multiplication Answer:${calculator.mult(x,y)}
//     Modulus Answer:        ${calculator.mod(x,y)}
//     `
            
// }
// console.log(calculatorResult(18,2))

// //Quetsion 4 Find a name
// const userNames =[{name:"john", age:25},{name:"Paul", age:25},{name:"ofonime", age:25},{name:"mike", age:25}]

// function findUser(nameToFind){
//     return userNames.find(userNames=>userNames.name===nameToFind)
// }
// console.log(findUser("john"))
// console.log(findUser("Paul"))
// console.log(findUser("ofonime"))
import http from 'node:http'
import {getDataFromDB} from './db'
const port=5050
const destination=getDataFromDB;

const server=http.createServer((req,res)=>{
  
  if(req.url==='/api' && req.method==='GET'){
  res.end(json.stringify(destination))}

});
  
  server.listen(port,(req,res)=>{

    console.log(` server runing on port: ${port}`)
  
});