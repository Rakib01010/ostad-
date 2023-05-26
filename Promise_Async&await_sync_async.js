
//Sync

const Order=()=>{
    console.log("im line 1");
 var timeNow=new Date().getTime();
 const afterTime=timeNow +4000;
 while(afterTime>=new Date().getTime());
 console.log("im line 2");
}
console.log("Im starting");//1
Order();
console.log("Im ending");//4




//Asyn
// const Order=()=>{
//     console.log("im line 1");//2
//   setTimeout(()=>{
//     console.log("im line 2");//4
//   },4000);
// }
// console.log("Im starting");//1
// Order();
// console.log("Im ending");//4












//callback
// function myDisplayer(some) {
//     console.log(some) ;
//   }
  
//   function myCalculator(num1, num2, myCallback) {
//     let sum = num1 + num2;
//     myCallback(sum);
//   }
  
//   myCalculator(10, 5, myDisplayer);




//async await
// async function myDisplay(){
//     let myPromise =new Promise((resolve,reject)=>{
    
//          setTimeout(() => {
//             resolve(" im resolve 1");//3
//          }, 3000);
//     });
//     const wait= await myPromise;
//     console.log(wait);
// }

// async function myDisplay1(){
//     let myPromise =new Promise((resolve,reject)=>{
    
//         resolve(" im promise 1"); //1
//     });
//     let myPromise1 =new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log("Im promise 2");//4
//          }, 3000)
//         resolve(" im resolve 2"); //2
//     });
//     setTimeout(() => {
//         console.log("Im second async");//5
//      }, 8000)
//     const wait= await myPromise;
//     const wait1= await myPromise1;
//     console.log(wait);
//     console.log(wait1);
// }

// myDisplay();
// myDisplay1();




//Promise
// const problem = false;

// const promise = new Promise(function (resolve, reject) {
//     if (problem) {
//         resolve("im okay");
//     } else {
//         reject("im not okay")
//     }
// });

// promise
//     .then((value) => {
//         // resolve
//         console.log(value);
//     })
//     .catch((err) => {
//         //reject
//         console.log(err);
//     })
