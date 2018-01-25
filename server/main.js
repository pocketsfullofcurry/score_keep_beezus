import {Meteor} from 'meteor/meteor';

import {Players} from './../imports/api/players';

Meteor.startup( () => {
  // let user = {
  //   name: "tom",
  //   location: "toronto",
  //   age: 0
  // };
  //
  // let person = {
  //   ...user,
  //   age: 20
  // };
  //
  // //console.log(person);
  //
  // let house = {
  //   bedroom:2,
  //   bathroom: 1.5
  // }
  // let yearBuilt = 1995;
  //
  // let myPlace = {
  //   ...house,
  //   bedroom:3,
  //   yearBuilt,
  //   flooring: 'Carpet'
  // }
  //
  // console.log(myPlace);

  // Players.insert({
  //   name:'Tom',
  //   score: 3
  // });
  //
  // console.log(Players.find().fetch());

  // let user = {
  //   name:'tom',
  //   sayHi () {
  //     console.log(this.name);
  //   }
  // };
  // user.sayHi();

  // let numbers = [9, 99, 4, 56];
  // let newNumbers = numbers.map((e) => e+=2);
  // console.log(newNumbers);


  // class Person {
  //   constructor(name='anonymous', age=0) {
  //     this.name = name;
  //     this.age = age;
  //   }
  //   getGreeting(){
  //     return `Hi! i am ${this.name}.`;
  //   }
  //   getPersonDescription(){
  //     return `${this.name} is ${this.age} year(s) old.`;
  //   }
  // }//end of Person class
  //
  // class Employee extends Person {
  //   constructor (name, age, title) {
  //     super(name, age);
  //     this.title = title;
  //   }
  //   getGreeting(){
  //     if (this.title) {
  //       return `Hi! i am ${this.name}. I work as a ${this.title}`;
  //     } else {
  //       return super.getGreeting();
  //     }
  //   }
  //   hasJob() {
  //     return !this.title;
  //   }
  // }
  //
  // class Programmer extends Person {
  //   constructor (name, age, preferredLanguage ='assembly') {
  //     super (name,age);
  //     this.preferredLanguage = preferredLanguage;
  //   }
  //   getGreeting(){
  //     return `Hi! i am ${this.name}. I am ${this.age} year(s) old and I am a ${this.preferredLanguage} developer.`
  //   }
  // }
  //
  // let me = new Employee('Tom', 37, 'entrepeneur');
  // console.log(me.getGreeting());
  //
  // let person = new Programmer();
  // console.log(person.getGreeting());
  //

});
