// Business (or back-end) logic:
//Marking Scheme
var grades = function() {
var inputGrade = prompt("Please insert marks to receive your grade.");
alert(inputGrade);

if (inputGrade >= 80 && inputGrade <100) {
alert("Your grade is grade A");
}
else if(inputGrade >= 60 && inputGrade <=79){
alert("Your grade is B");
}
else if(inputGrade >= 40 && inputGrade <=59) {
alert("Your grade is C");
}
else if(inputGrade >= 20 && inputGrade <=39){
alert("Your grade is D");
}
else if(inputGrade >=0 && inputGrade <=19){
alert("Your grade is E");
}
else{
alert("Incorrect input");
}
};

// Everything below this line is user interface (or front-end) logic:
