//apply
const person = {
  fullName: function (city, country) {
    console.log(
      this.firstName + " " + this.lastName + "," + city + "," + country
    );
  },
};

const person1 = {
  firstName: "John",
  lastName: "Doe",
};

person.fullName.apply(person1, ["Oslo", "Norway"]);
