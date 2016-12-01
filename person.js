var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var personSchema = new Schema({
  firstName: {type: String, required: true},
  lastName: String,
  age: {
        type: Number,
        min: [10]
      },
  updated_at: Date,
  created_at: Date
});

// on every save, add the date
personSchema.pre('save', function(next) {
  // get the current date
  var currentDate = new Date();
  
  // change the updated_at field to current date
  this.updated_at = currentDate;
  // if created_at doesn't exist, add to that field
  if (!this.created_at)
    this.created_at = currentDate;
console.log(this);

  next();
});

var Person = mongoose.model('Person', personSchema, "AllPersons");

var david = new Person({ firstName: "Aaron", lastName: "Smith", age: 5 });

var sarah = new Person({firstName: "Sarah", lastName: "Abrams", age:6 });

var rafiki = new Person({ firstName: "Rafiki", lastName: "from Lion King", age: 67});

var bob = new Person({firstName: "Bob", lastName: "Cohen", age: 16});



bob.save();

mongoose.connect('mongodb://localhost/people');

sarah.save();

rafiki.save();

david.save();

// Person.find({age: 67}, function (err, result){
//   console.log(result);
// })