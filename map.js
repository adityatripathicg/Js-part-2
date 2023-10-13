let num = [1,2,3,4,5];

let double = num.map(el => el*2);

const student = [
    {
        name:"CG",
        age: 20,
        gpa : 7.6
    },
    {
        name:"SCG",
        age: 20,
        gpa : 7.8
    }
];
let percentage = student.map((el) => el.gpa*10);