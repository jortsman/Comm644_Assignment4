// Practice with JavaScript OOP Concepts

// 1	Create a namespace called Animal. Then, define two sub classes from the namespace, one called Cat and another called Dog.
// First Way
// var ANIMAL = {
//   Cat: function () {};
//   Dog: function () {};
// };
// Second Method
// var ANIMAL = ANIMAL || {};
// ANIMAL.Cat = function () {};
// ANIMAL.Dog = function () {};


// 2  Abandon the use of namespaces and start over. Now, create two classes, one called Cat and another called Dog. The Cat class should be created using literal notation and the Dog class should be created using constructor notation.
// var Cat = {};
// var Dog = function () {};


// 3  Directly underneath, create a new instance of the Dog class.
// var Cat = {};
// var Dog = function () {};
// var rex = new Dog();


// 4  Start over and now create a new class using constructor notation called Animal. When a new instance of the Animal class is created, the message “The Animal has been created” should be displayed in the console window.
// var Animal = function () {
//   console.log('The animal has been created');
// };
//
// var rex = new Animal();
// var sophie = new Animal();


// 5  Now, change the above code so that it accepts a parameter and that value is what should be displayed in the console window. The message should be passed as an argument into the constructor at the moment that the Animal class is instantiated.
// var Animal = function (dog) {
//   console.log('The animal has been created and it\'s a ' + dog);
// };
//
// var rex = new Animal('French Bulldog');
// var sophie = new Animal('Golden Retriever');


// 6  Start over and now create a new class using constructor notation called Animal. Define five properties within your class including type, breed, color, height, and length. These properties will be set in the constructor so you’ll need to pass in parameters into the function’s constructor, set the properties, and then pass in the actual arguments during the object’s instantiation.
// var Animal = function (type, breed, color, height, length) {
//   this.type = type;
//   this.breed = breed;
//   this.color = color;
//   this.height = height;
//   this.length = length;
// };
//
// var rex = new Animal('Dog','Golden Retriever', 'Blonde', '30in', '50in');
// console.log('Rex is a ' + rex.type + ' more specifically a ' + rex.breed + ' that is ' + rex.color + ' and is ' + rex.height + ' tall and ' + rex.length + ' long.');


// 7  Use a for-in loop to loop through and display all of the properties in the Animal class. You should see a total of 5 properties displayed in a list within the console window.
// var Animal = function (type, breed, color, height, length) {
//   this.type = type;
//   this.breed = breed;
//   this.color = color;
//   this.height = height;
//   this.length = length;
// };
// var i;
// var rex = new Animal();
// for (i in rex) {
//   console.log(i);
// }


// 8  Now, create a public method called speak. Within the speak method you will use a conditional to check the type of Animal being created. If it’s a dog, return “The <color> dog is barking!” If it’s a cat return “The <color> cat is meowing!” instead. Call that method after the Animal class has been instantiated.
// var Animal = function (type, breed, color, height, length) {
//   this.type = type.toLowerCase();
//   this.breed = breed;
//   this.color = color;
//   this.height = height;
//   this.length = length;
//   this.speak = function() {
//     if(this.type == 'dog') {
//       return 'The ' + this.color + ' ' + this.type + ' is barking';
//     } else if (this.type == 'cat') {
//       return 'The ' + this.color + ' ' + this.type + ' is meowing';
//     }
//   };
// };
//
// var rex = new Animal('dog', 'French Bulldog', 'black', '20in', '35in');
// var jeff = new Animal('cat', 'Persian', ' white', '15in', '25in');
//
// console.log(rex.speak());
// console.log(jeff.speak());

// 9  Now, convert all of your properties to private properties. Then, create a private method called checkType(). In this method you will check to see what the type is. If it’s dog, return dog, otherwise, return cat. Then, create a public method called speak that returns the value of the checkType() method. The console window should now display “The <animal type> has made a noise!”
// var Animal = function (type, breed, color, height, length) {
//   var type = type.toLowerCase();
//   var breed = breed;
//   var color = color;
//   var height = height;
//   var length = length;
//   var checkType = function () {
//     if (type == 'dog') {
//       return 'dog';
//     } else {
//       return 'cat';
//     }
//   }
//   this.speak = function() {
//     return 'The ' + checkType() + ' has made a noise!';
//   };
// };
//
// var rex = new Animal('dog', 'French Bulldog', 'black', '20in', '35in');
// var jeff = new Animal('cat', 'Persian', ' white', '15in', '25in');
//
// console.log(rex.speak());
// console.log(jeff.speak());


// 10 Create your own String method called findWords() that inherits from the native String Object. This method should find all instances of a specific word within a provided paragraph of text. It should then alert out to the user the number of times that word was found in the paragraph.
// String.prototype.findWords = function(word) {
//   var wordCounter = 0;
//   var matchWord = new RegExp(word, 'g');
//   var parseText = this.match(matchWord);
//   for (var i in parseText) {
//     wordCounter++;
//   }
//   return wordCounter;
// };
// var paragraph = 'Woke VHS street art keytar green juice, next level activated coloring book irony art party brooklyn unicorn yuccie. Locavore fingerstache gluten-free, bruh ramps seitan coloring book keffiyeh brunch. Pop-up bruh subway tile fixie bruh kogi ethical iPhone direct bruh chicharrones copper mug single-origin coffee swag asymmetrical austin. Butcher intelligentsia freegan, flannel pork belly enamel pin quinoa fashion axe seitan. La croix thundercats cronut VHS sriracha. Pug activated charcoal scenester humblebrag gentrify before they sold out. Slow-carb affogato pabst food truck, vice la croix hot chicken VHS occupy glossier small batch gluten-free.';
// console.log(paragraph.findWords('bruh'));


/////////////////////// The Recipe Card

// var Recipe = function () {
//   var recipeTitle = 'Vlad\'s Guac';
//   var servings = 3;
//   var ingredients = ['- 2-3 Avocados', '- 1 Lemon', '- 1 large tablespoon of sea salt', '- 2 teaspoons of cayenne pepper', '- 1/2 tablespoon of ground black pepper', '- 1/2 of a red onion', '- pinch of chopped cilantro'];
//   this.displayRecipe = function () {
//     console.log(recipeTitle + '\n' + 'Serves: ' + servings + '\n' + 'Ingredients: ' + '\n');
//     for (var i in ingredients) {
//       console.log(ingredients[i]);
//     };
//   }
//
// }
// var myRecipe = new Recipe()
// myRecipe.displayRecipe();

/////////////////////////// The Reading list

// var Book = function(title, author, alreadyRead) {
//   this.bookTitle = title;
//   this.bookAuthor = author;
//   this.alreadyRead = alreadyRead;
//   this.toRead = function() {
//     if (alreadyRead) {
//       console.log('You already read ' + title);
//     } else {
//       console.log('You still need to read ' + title);
//     }
//   }
// };
// var contagious = new Book('Contagious', 'Jonah Berger', true);
// var theLordOfTheRings = new Book('The Lord of the Rings', 'J.R.R. Tolkein', false);
// var jQuery = new Book('jQuery Fundamentals', 'Zak Ruvalcaba', false);
// var the10xRule = new Book('The 10x Rule', 'Grant Cardone', true);
// var theGreatGatsby = new Book('The Great Gatsby', 'F. Scott Fitzgerald', true)
//
// contagious.toRead();
// theLordOfTheRings.toRead();
// jQuery.toRead();
// the10xRule.toRead();
// theGreatGatsby.toRead();
