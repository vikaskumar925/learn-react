var nameVar= "vikas";
console.log('nameVar',nameVar);

let nameLet = "Jen";
nameLet = 'Julie';
console.log('nameLet',nameLet);

const nameConst ="Frank";

console.log("nameConst", nameConst);

function getPetName(){
    var petName = "Hal";
    return petName;
}
const petName = getPetName();

 console.log(petName);
//Block scoping

var fullName = 'Jen Kumar';

if (fullName){
    let firstName = fullName.split(' ')[0];
    console.log(firstName);
}
