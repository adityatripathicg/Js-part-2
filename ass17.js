let arr = [1,2,3,4,5,6,3];
let num = 3;
for(let i =0;i<arr.length;i++){
    if(num == arr[i]){
        arr.splice(i,1);
    }
}
console.log(arr);
//2
let n = 12345;
let count = 0;
