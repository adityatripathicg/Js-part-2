let arr = ["hello","my","name","is","CG"];
function concat(arr){
    let str =""; 
    for(let i = 0; i<arr.length;i++){
        str += arr[i] + " ";
    }
    return str;
}
console.log(concat(arr));