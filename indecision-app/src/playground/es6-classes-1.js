class Person {
    constructor(name = 'Anonymous',age = 0){
        this.name = name;
        this.age = age;
    }
    getGreeting(){
        //return 'Hi , I am '+ this.name;
        return `Hi ,I am ${this.name}!`;
    }
    getDescription(){
        return `${this.name} is ${this.age} year(s) old.`
    }
}

class Student extends Person {
    constructor(name, age, major){
        super(name, age);
        this.major = major;
    }
    hasMajor (){
        return !!this.major;
    }
    getDescription(){
        let description = super.getDescription();
        if (this.hasMajor()){
            description += `Their Major is ${this.major}.`;
        }
        return description;
    }
}
class Traveler extends Person {
    constructor(name, age, homeLocation){
        super(name , age);
        this.homeLocation = homeLocation;
    }
    hasHomeLocation(){
        return !!this.homeLocation;
    }
    getGreeting(){
        let greeting = super.getGreeting();
        if (this.hasHomeLocation()){
            greeting += `I am visiting from ${this.homeLocation}.`;
        }
        return greeting;
    }
}
const me = new Student('Andrew',8,'Computer Science');
 console.log(me.getDescription());

const other = new Student();
console.log(other.getDescription());
const user = new Traveler('Vikas',24);
console.log(user.getGreeting());
