let multiplegreet = function(func, n){// higher order function which takes another function as argument.
    for(let i = 1;i<=n;i++){
        func();
    }
}
let greet = function(){
    console.log("Hello!");
}
multiplegreet(greet, 5);