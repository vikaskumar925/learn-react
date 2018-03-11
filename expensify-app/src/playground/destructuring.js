//Object destructuring

// const person = {
//     name:'Vikas',
//     age :25,
//     location:{
//         city:"Philadelphia",
//         temp:92,
//     },
// };
//
// const { name:firstName = 'anonymous', age } = person;
// console.log(`${firstName} is ${age}.`);
//
// const { city, temp:temperature } = person.location;
// if (temperature && city){
//     console.log(`It's ${temperature} in ${city}`);
// }

// const book = {
//     title:'Ego is the Enemy',
//     author:'Ryan Holiday',
//     publisher:{
//         name:'Penguin',
//     },
// };
//
// const {name:publisherName = 'Self-Published'} = book.publisher;
// console.log(publisherName);

//Array destructuring

// const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];
//
// const [, city, state='New York'] = address;
// console.log(`You are in ${city} ${state}`);

const item = ['Coffee (ice)', '$2.00', '$2.80', '2.75'];
const [itemName, , cost,] = item;
console.log(`A ${itemName} costs ${cost}`);
