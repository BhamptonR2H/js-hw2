// VE
function min(num1, num2){
    if (num1 < num2) {
        return num1;
    }else{
        return num2
    }
    
}
console.log(min(35,1234))
console.log(min(5678,1234))
// Easy
var newStudents = [
    ["Brenden", "Hampton", "18"],
    ["Joe", "Mama", "35"],
    ["Micah", "Mike", "111111"]
];

var Joe = newStudents[1];
console.log(`Hello my name is ${Joe[0]} ${Joe[1]} and my age is ${Joe[2]}`)
// Medium
let userInput = parseInt(prompt("Enter number 1-12"))
let month = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "November", "December"];

for (let i = 0; i <= 12; i++){
   switch(userInput){
       case i:
       console.log(userInput = month[i - 1])
       break;

   }
}
if (userInput >12){
    alert("invalid number")
}

//Hard
let tomHeight = 9;
let tomMass = 8;
let jerryHeight = 10;
let jerryMass = 45;

tomBMI = tomMass / (tomHeight * tomHeight);
jerryBMI = jerryMass / (jerryHeight * jerryHeight);


console.log(tomBMI, jerryBMI);
if(tomBMI > jerryBMI){
  console.log("Tom's BMI is bigger than Jerry's");
}
else {
  console.log("Jerry's BMI is bigger than Toms's");
}


