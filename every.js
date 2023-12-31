let even = [2,4,6,8,10];
console.log(even.every((num) => num%2==0));//return true if every element in array returns true to the function else false
//reduce array methods
console.log(even.reduce((result,element) => result+element));
//maximum element of array 
let max = -1;
for(let i = 0;i<even.length;i++){
    if(max<even[i]){
        max = even[i];
    }
}
console.log(max);
//or
let maximum = even.reduce((maximum,element) => {
    if(maximum<element){
         return element;
    }
    else{
        return maximum;
    }
})
console.log(maximum);
//multiples of 10 
console.log(even.every(n => n%10==0));
//min in array 
function getmin(num){
    let min = even.reduce((res,num) => {
        if(res<num){
            return res;
        }else{
            return num;
        }
    })
    return min;
}
// default paramaters
function sum(a,b =3) {
    return a+b;
}

