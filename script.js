// NOT Logical Operator

let temp = 50;
let sun = true;


if(!(temp > 0)){
    console.log("Temperature is warm");
}
else{
    console.log("Temperature is bad");
}
if(!sun){
    console.log("It is sunny");
}
else{
    console.log("It's not sunny");
}

// While Loop

let Username = "";
while(Username == "" || Username == null){
    Username = window.prompt("Enter your name");
}
console.log("Hello", Username);


// DO While Loop

let username;
do{
    username = window.prompt("Enter Your name");
} while(username =="" || username == null)
console.log("Hello", username);


for(i =1; i<=10; i++){
    console.log(i);
}


let coding = [ "Js", "java", "react", "py"];
for( let i = 3; i<7; i++){
    console.log(coding[3]);
}

// Break and Continue

for( let i=1; i<=10; i+=1){

    if (i ==4){
        continue;
    }
    console.log(i);
    
}

// JS Prototype

function Person(name, job, yearOfBirth){ 
	this.name= name; 
	this.job= job; 
	this.yearOfBirth= yearOfBirth; 
} 
Person.prototype.calculateAge= function(){ 
	console.log('The current age is: '+(2024- this.yearOfBirth)); 
}
console.log(Person.prototype);  
 

let person1 = new Person('exzy', 'intern', 2002);
console.log(person1)
let person2 = new Person('loxzy', 'Frontend', 2003);
console.log(person2)

person1.calculateAge();
person2.calculateAge();

