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

// JS Prototype (Age Calculate)

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

// JS Prototype (Student)

function Student(name, rollno, joined, subject) {
    this.name = name;
    this.rollno = rollno;
    this.joined = joined;
    this.subject = subject;
}
Student.prototype.printDetails = function() {
    console.log(`This student's name is ${this.name} and his rollno is ${this.rollno} and he joined in ${this.joined}`);
};

let student1 = new Student('asis', 17, 2023, 'computer');
let student2 = new Student('dixzy', 19, 2021, 'IT');

student1.printDetails();
student2.printDetails();

// JS Prototype (Car)

function cars(porsche){
    this.porsche=porsche;    
}
function cars(mercedes){
    this.mercedes=mercedes;
}
cars.prototype.model="super car";

const cars1=new cars("p911");
const cars2=new cars("XTr310");

console.log(cars1);
console.log(cars2);

// JS Class and Getter + Setter Methods

class subject{
    constructor(name, joindate){
        this.name=name;
        this.joingdate=joindate;

    }
    set subjectName(newname){
        this.name = newname;
    }
    get subjectName(){
        return this.name;
    }
    
}
const subject1= new subject("IT", 2023);

subject1.subjectName = "Computer";
console.log(subject1.subjectName);


// JS Class Expression 1

let person = class{
    constructor(name){
        this.name = name
    }
    getName(){
        return this.name
    }
}

const person1 = new person("EXZY");
console.log(person1);

// Js Class Expression 2

let brand="porche";
let model=911; 

const car = {
    brand,
    model 
}

console.log(car);

// Calculation Circumference

let pi=31.111;
let radius;
let circumference;

radius = window.prompt('Enter Number');
radius = Number(radius);
circumference = 2 * pi * radius;

console.log(circumference);

// JS Call Back Function

function display(result){
    console.log(result);

}

function add(num1, num2, mycallback){
    let sum= num1 + num2;
    mycallback(sum)

}
add(10, 20, display)

// JS Anonymous Function

let sum = function(x,y){
    return x+y;
}
console.log(sum (10, 10));

(
function(){
    console.log("HEyy Its Name")
}
)();

// Anonymous Function Ex.1

setTimeout(function(){
    console.log("HEYYY");
}, 1000);

// Recursive function

function log(num){
    if(num > 5){
        return;
    }
    console.log(num);
    log(num + 2);
}

log(1);


// Anonymous function Ex.2

(   
    function(){
        console.log("IMS");
    }
    )();


// JS Object

const company = {
    Name: "facebook",
    Employee: {
        Name="Ashish", 
        Work:"frontend"
    },    
    Job: "Frontend",
    salary: "$17000 in a month"

};
for (let prop in company)
console.log(prop+":"+company[prop]);

// JS Object Ex.2


const company = {
    Name: "facebook",
    Employee: "Exzy",
    Job: "Frontend",
    salary: "$17000 in a month"
};

// used for loop to get all prop
for (let prop in company) {
    console.log(company);
}

// Rough Example Js Object

const employee = {
    firstName: "Exzy",
    lastName: "loxzy",
    hello: function greet(){
        console.log("HEYYYY");
    }
}

employee.hello();


// JS Prototype

function student(name, section){
    this.name=name;
    this.section=section
}

let student1 = new student("ashish", "A");
let student2 = new student("Loxzy", "B");

console.log(student1);


// JS Object Destructing ( new variable add garna use huncha)

const Laptop = {
    Name : "Msi",
    Modelno : 273,
    Country : "china",
}
let{Name, Modelno, country, x=21}=Laptop;

console.log(x);

// JS Class + getter & Setter

class Cars{
    constructor(name,model,ownername,KM){
        this.name=name;
        this.model=model;
        this.ownername=ownername;
        this.KM=KM
    }
    get greet(){ // getter use garey pachi () garna pardaina
        return "HEyyy " +this.name;
    } //setter method use vayo to set new changed name
    set ChangeName(carname){
        this.name=carname;

    }
}

const cars1 = new Cars("porche", 311,"exzy",86);
const cars2 = new Cars("ferrari", 900,"exzy",86);


cars1.ChangeName="mercedeX";

console.log(cars1);