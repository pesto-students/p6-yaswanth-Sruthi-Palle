class Person {
  constructor(name) {
    this.name = name;
  }
}
class Teacher extends Person {
  constructor(name, subject) {
    super(name);
    this.subject = subject;
  }
  teach() {
    console.log(this.name + " teaches " + this.subject);
  }
}

Person.prototype.initialize = function (name, subject) {
  this.name = name;
  this.subject = subject;
};
// TODO: create the class Teacher and a method teach
var him = new Teacher();
him.initialize("Adam", 45);
him.teach("Inheritance");
