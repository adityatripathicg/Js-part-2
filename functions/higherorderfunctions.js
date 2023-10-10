let multiplegreet = function(func, n){// higher order function which takes another function as argument.
    for(let i = 1;i<=n;i++){
        func();
    }
}
let greet = function(){
    console.log("Hello!");
}
multiplegreet(greet, 5);
// higher order function which returns a function
function oddeventest(req) {
    if(req == "odd"){
        let odd = function (n){
            console.log(!(n%2==0));
        }
        return odd;
        
    }
    else if(req == "even"){
        let even = function (n){
            console.log((n%2==0));
        }
        return even;
    }
    else{
        console.log("Wrong Request!");
    }
}
let req = "odd";
let func = (oddeventest(req));