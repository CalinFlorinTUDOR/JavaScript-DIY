function Person (firstname, lastname, age) {
  this.firstname = firstname;
  this.lastname = lastname;
  this.age = age;
}
console.log(Person);

let p1 = new Person("Michael", "Jordan", "49");
let p2 = new Person("Lara", "Bili", "74");
console.log(p1);
console.log(p2);