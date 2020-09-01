const mongoose = require('mongoose');
const asert = require('assert');
mongoose.connect("mongodb://localhost:27017/fruitsDB", {useNewUrlParser: true, useUnifiedTopology: true});

//show collections- fruits, people
const fruitSchema = new mongoose.Schema ({
	name: String,
	rating: {
		type: Number,
		min: 0,
		max: 10
	},
	review: String
});
const Fruit = mongoose.model("Fruit", fruitSchema);
const fruit= new Fruit({
	name: "apple",
	rating: 7,
	review: "Healthy"
});//show collections- fruits
/*Fruit.deleteOne({name: "apple"}, function(err){
	if (err){
		console.log(err);
	} else{
		console.log("Deleted");
	}
});*/

const kiwi= new Fruit({
	name: "kiwi",
	rating: 9,
	review:"GREAT"
});
const orange= new Fruit({
	name: "orange",
	rating: 6,
	review: "Sour"
});
const banana= new Fruit({
	name: "banana",
	rating: 10,
	review: "best"
 });
Fruit.insertMany([kiwi, orange, banana], function(err){
	if(err){
		console.log(err);
	}
	else{
		console.log("Done");
	}
});

// fruit.save(); to prevent multiple same fruit namex
const personSchema= new mongoose.Schema({
	name: String,
	age: Number,
	favouriteFruit: fruitSchema
});
const Person= mongoose.model("Person", personSchema);

const person= new Person({
	name: "John",
	age: 37,
	favouriteFruit: banana
});
person.save();

Fruit.find(function(err, fruits){
	if (err){
		console.log(err);
	}else{

		fruits.forEach(function(fruit){
			console.log(fruit.name);
		});
		
	}
});
// Person.deleteMany({ name: "John"}, function(err){
// 	if(err){
// 		console.log(err);
// 	} else{
// 		console.log("successfully deleted John");
// 	}
// });
// mongoose.connection.close();
