//call methos

const person = {
  fullName: function () {
    console.log(this.firstName + " " + this.lastName);
  },
};
const person1 = {
  firstName: "John",
  lastName: "Doe",
};
const person2 = {
  firstName: "Mary",
  lastName: "Doe",
};

// This will return "John Doe":
person.fullName.call(person1);
person.fullName.call(person2);
