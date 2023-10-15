let arr = [1,-2,3,4,5];
let n =3;

//1
console.log(arr.slice(0,n));
//2
console.log(arr.slice(-n));
//3
let str = "heLlo";
if(str.length==0){
    console.log("String is Blank");
}
else{
    console.log("Strinng is not blank");
}
//4
let index = 3;
if(str[index]==str[index].toLowerCase()){
    console.log("Yes Character is Lowercase");
}
else{
    console.log("Character is not lowercase");
}
//5
let str2 = "    hello CG     ";
console.log(str2.trim());
//6
let item = 3;
if(arr.indexOf(item)!=-1){
    console.log("Yes It Exists Inside Array");
}
else{
    console.log("No it does not exists inside array");
}