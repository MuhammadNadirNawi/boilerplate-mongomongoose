require("dotenv").config();
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  age: Number,
  favoriteFoods: [String],
});

const Person = mongoose.model("Person", personSchema);
const newPerson = new Person({
  name: "Muhammad Nadir Nawi",
  age: 20,
  favoriteFoods: ["Coto Makassar", "Ayam Goreng", "Bakso"],
});
newPerson
  .save()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.error(err);
  });

const arrayOfPeople = [
  {
    name: "Zakir Nawi",
    age: 20,
    favoriteFoods: ["Ayam Goreng", "Bakso"],
  },
  {
    name: "Fauzan",
    age: 23,
    favoriteFoods: ["Bakso"],
  },
];

const createAndSavePerson = (done) => {
  done(null, newPerson);
};

const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople).then((result) => {
    console.log(result);
    done(null, result);
  });
};

const findPeopleByName = (personName, done) => {
  done(null /*, data*/);
};

const findOneByFood = (food, done) => {
  done(null /*, data*/);
};

const findPersonById = (personId, done) => {
  done(null /*, data*/);
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
