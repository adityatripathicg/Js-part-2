const student = {
    name:"CG",
    age : 20,
    eng : 99,
    math : 90,
    phy : 90,
    getavg(){
        let avg = (this.eng+this.phy+this.math)/3;
        console.log(`${this.name} got avg of ${avg}.`);
    }
}