setTimeout(()=>{
    console.log("CG");
},4000); // time in ms
console.log("Hello");
setTimeout(()=>{console.log("How are you...?");},8000);

//setInterval
let id = setInterval(() => {
    console.log("SCG CREATIONS");
}, 5000);
clearInterval(id);

//arrow function that returns square of N
let sq = ((n)=>n*n);
//SetInterval which prints HW in 2 secs 5 times

let times = setInterval(() => {
    console.log("Hello World!");
}, 2000);
setTimeout(() => {
    clearInterval(times)
}, 10000);