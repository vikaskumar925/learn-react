//argument object - No longer bound with arrow functions

const add =  (a, b) => {
    return a + b;
}
console.log(add(55,1,1001 ));
// this key-words no longer bound

const user = {
    name:'Vikas',
    cities:['New York','New Delhi','Dublin'],
    printPlaceLived(){
        const cityMessages = this.cities.map((city) => {
            return this.name + ' has lived in '+ city;
        });
        return cityMessages;
    }
}
console.log(user.printPlaceLived());

const multiplier = {
    number:[1,6,5],
    multiplyBy :2,
    multiply() {
        return this.number.map((number) => number * this.multiplyBy);
    }
};

console.log(multiplier.multiply());
