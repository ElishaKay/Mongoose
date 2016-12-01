var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var beerSchema = new Schema({
  name: String,
  ABV: Number,
  style: String
});

var Beer = mongoose.model('Beer', beerSchema);

var weinstephen = new Beer({name: "Weinstephen", ABV: 10, style: "Wheat Beer" });

mongoose.connect('mongodb://localhost/Beer');

Beer.find(function (err, result){
  console.log (result)
});


