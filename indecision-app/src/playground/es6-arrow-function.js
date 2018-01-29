const square = function(x){
    return x*x;
};
console.log(square(8));


// const squareArrow = (x) => {
//     return x*x;
// };

const  squareArrow = (x) => x * x;
console.log(squareArrow(4));
const fullName = "Vikas Kuamr";

// const firstName = (fullName) => {
//     return fullName.split(' ')[0];
// }
// console.log(firstName(fullName));
const firstName = firstName => fullName.split(' ')[0];

console.log(firstName(fullName));
