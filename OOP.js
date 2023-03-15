class students {

  // constructor (name = "ABC", standard = "ABC", game = "ABC") {
  constructor(name, standard, game) {


    this.values = [name, standard, game];
    // this.name = name;
    // this.standard = standard;
    // this.game = game;
  }
}

// Example1
const stu1 = new students();
stu1.values[0] = `Irfan`;
stu1.values[1] = `5th`;
stu1.values[2] = `cricket`;

// Example2
const stu2 = new students(`Waleed`, `8th`, `Football`);

// console.log(stu1.values, stu2.values[2]);

 console.log(stu1.values);

 console.log(stu2.values[0], stu2.values[2]);
