// console.log('Hello');
// ===================================================================
//                  Data types
// ===================================================================
var isDialogOpen = true;
var marks = 55544;
var myname = "devendra";
var namdde = "Devendra prajapati";
var fullname = "my name is ".concat(namdde);
var users = {
    name: 'devendra',
    state: 'gujarat',
};
var names = ['hello', 'world', 'how'];
var numbers = [545454, 54545, 1212, 5454];
var allData = ['Hello', 556565, false, 'dfkfjsdf'];
var fruits = ['mango', 'apple'];
var user1 = ['hello', 4555];
var b = undefined;
var c = null;
var z = 9988858662;
z = true;
z = 'hello';
// here any not checked function or endpoints exist or not
// let a:any = 'Hello';
// a.xyz();
// here unknown checked function or endpoints exist or not - its checked and give errror
// let d:unknown = 'Hello';
// d.xyz();
// you can use any data type using any
var abc = 'you can use any data type';
// ===================================================================
//                  functions
// ===================================================================
// function sum(num1: number, num2: number) {
//     console.log(num1 + num2);
// }
// sum(10, 20);
// let sum = function (num1: number, num2: number) {
//     console.log(num1 + num2);
// }
// sum(10, 20);
// let sum = (num1: number, num2: number) => {
//     console.log(num1 + num2);
// }
// sum(10, 20);
// if you cannot return in function you can use void
// function sayhello(): void {
//     console.log('kaise ho');
// }
// If you want to retun number, so you must be retun function as a type number
// function sum(num1: number, num2: number): number {
//     return num1 + num2;
// }
// sum(20, 50);
// if you want to don't put value of lastname its provide undefined value here
// function welcome(firstname: string, lastname?: string): void {
//     console.log(`welcome ${firstname} ${lastname}`);
// }
// welcome('devendra');
// give it default value
// function welcome2(firstname: string, lastname = 'prajapati'): void {
//     console.log(`welcome ${firstname} ${lastname}`);
// }
// welcome2('devendra');
// using rest operator
// function restfunction(firstname: string, ...marks: number[]) {
//     console.log(firstname);
//     console.log(marks.join(','));
// }
// restfunction('devendra', 54,25,69,85,78);
// ===================================================================
//                  Unions 
// ===================================================================
// if you want to set more than one data type you can simply use pipe (|). below you can use either a boolean or string
var xyz = false;
// also in funcation you can you more than one data type
function helloDost(firstName) {
    // code
}
// unions with conditions
var El = document.getElementById('demo');
function setWidth(width) {
    if (typeof width === "number") {
        El.style.width = width + 'px';
    }
    if (typeof width === "string") {
        El.style.width = width;
    }
}
function setHeight(height) {
    if (typeof height === "number") {
        El.style.height = height + 'px';
    }
    if (typeof height === "string") {
        El.style.height = height;
    }
}
setWidth(500);
setHeight(300);
// its object using interface
var user = {
    id: 54,
    name: 'sdfsf',
    email: 'hello@gmail.com',
    isNew: true,
};
// its array using interface
var allUsers = [
    {
        id: 54,
        name: 'sdfsf',
        email: 'hello@gmail.com',
        isNew: true,
    },
    {
        id: 54,
        name: 'sdfsf',
        email: 'hello@gmail.com',
        isNew: true,
    },
];
// add user
function addUser(user) {
    allUsers.push(user);
}
// get a user
function getUser(index) {
    return allUsers[index];
}
addUser({ id: 3, name: 'Hellosl', email: 'helloworld@gmail.com' });
// console.log(allUsers)
// console.log(getUser(2))
// ===================================================================
//                  Object orinted programing
// ===================================================================
// can't understand now
// ===================================================================
//                  Generics
// ===================================================================
// here T as a type using generic typescript
function genericsFunction(xyz) {
    return xyz;
}
var aa = genericsFunction("Hello Devendra");
var bb = genericsFunction(5465);
var cc = genericsFunction(true);
console.log(aa, bb, cc);
// use multple type in generic typescript
function showStudentInfo(rollNumber, name) {
    console.log("Roll: ".concat(rollNumber, ", Name:").concat(name));
}
showStudentInfo(11, "Hello");
showStudentInfo('11', 'Hello');
// ===================================================================
//                  Generics
// ===================================================================
