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

/*

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

*/

// JS Prototype (Student)

/*

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

*/

// JS Prototype (Car)

/*

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
*/

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

/*

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

*/

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

/*

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

*/

// JS Object Ex.2

/*

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

*/

// Rough Example Js Object

/*

const employee = {
    firstName: "Exzy",
    lastName: "loxzy",
    hello: function greet(){
        console.log("HEYYYY");
    }
}

employee.hello();

*/

// JS Prototype

/*
function student(name, section){
    this.name=name;
    this.section=section
}

let student1 = new student("ashish", "A");
let student2 = new student("Loxzy", "B");

console.log(student1);

*/

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


// JS Array

let fruits =["apple", "loxzy", "strawberry"];
//fruits.push("orange");
fruits.pop();
fruits.shift();


console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

// Js Class Expression

let employee = class {
    constructor(name,age,location){
        this.name=name;
        this.age=age;
        this.location=location
    }
    getName(){
        return this.name;
    }  

}
const employee1 = new employee("asis",21,"ktm");

console.log(employee1);


function college(name,subject,location,Phno){
    this.name= name;
    this.subject = subject;
    this.location = location;
    this.Phno = Phno 
}

let Nepal = new college("Islingtion", "BscIT", "KamalPokhari", +97709876);

console.log(Nepal);


// SetTimeout Function of Js

setTimeout(()=> {
    console.log("HEYYYY");
}, 5000);

// JS Call Back Function

function display(result){
    console.log(result);
}
function add(num1 , num2 , mycallback){
    let Sum= num1+num2;
    mycallback(Sum);
}
add(10,20,display)

// Call Back Function 

hello(goodbye, wait, leave);

function hello(callback, waitcallback, leavecallback){
    console.log("Hello");
    waitcallback();
    callback();
    leavecallback();
   
    
}
function wait(){
    console.log("wait");
}
function leave(){
    console.log("leave");
}
function goodbye(){
    console.log("goodbye");
}


// JS Object

const company = {
    Name: "facebook",    
    Job: "Frontend",
    salary: "$17000 in a month"

};
for (let prop in company)
console.log(prop+":"+company[prop]);


// Recursive Function

function count(num){
    console.log(num);
    num++;
    if(num<50){
        count(num);

    }
    
}
count(10);


// Js Function

function IMS(Firstname, Lasname){
    console.log("IT COMPANY " + Firstname+" " + Lasname);
}
 IMS(100, 500);

 // Js Class Inheritance

 class person{
    constructor(fname, lname){
        this.fname=fname;
        this.lname=lname;

    }
    greet(){
        console.log("Hello "+ this.fname , this.lname);
    }
 }
 class student extends person{

 }
 const student1 = new student("Peter","parker");

 student1.greet();
 
// Js Class Inheritance and super method use

class personp1{
    constructor(name){
        this.name=name;

    }
    greet(){
        console.log("Hello "+this.name);
    }

}
class studentx extends personp1{
    constructor(name){                     // created superclass which calls person(name)
        super(name);
    }

}
const studentp1 = new studentx("Exzyy");
studentp1.greet();


// Method Overiding in JS

class Mobile{
    constructor(name){
        this.name=name;

    }
    
    static hey(){
        console.log("HEllo");
    }

    greet(){
        console.log("This mobile  is"+this.name);
    }


}
class lenovo extends Mobile{
    greet(){
        console.log("This laptop is "+this.name);
    }

}
lenovo.hey();
const lenovo1 = new lenovo("lenevo");
lenovo1.greet();


// JS Return Function

function appx(){
    return function(){
        console.log("HEYYY");
    }
}
const app1 = appx();
app1();



function log(num){
    if(num > 5){
        return;
    }
    console.log(num);
    log(num + 2);
}

log(1);