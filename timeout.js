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
//