var authorsName = "William Doane";

person = new Object();
	person.firstName = "John";
	person.lastName = "Doe";
	person.age = "50";
	
var main = function() {
	return prompt(person.firstName + " " + person.lastName + " is " + person.age + " years old.");
};