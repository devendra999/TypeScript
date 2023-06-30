// console.log('Hello');

// ===================================================================
//                  Data types
// ===================================================================

let isDialogOpen: boolean = true;

let marks: number = 55544;

let myname: string = "devendra";

let namdde = "Devendra prajapati";
let fullname: string = `my name is ${namdde}`;

let users: object = {
    name: 'devendra',
    state: 'gujarat',
}

let names: string[] = ['hello', 'world', 'how'];

let numbers: number[] = [545454, 54545, 1212, 5454];

let allData: any[] = ['Hello', 556565, false, 'dfkfjsdf'];

let fruits: Array<String> = ['mango', 'apple'];

let user1: [string, number] = ['hello', 4555];

let b: undefined = undefined;
let c: null = null;

let z: unknown = 9988858662;
z = true;
z = 'hello';

// here any not checked function or endpoints exist or not
        // let a:any = 'Hello';
        // a.xyz();

// here unknown checked function or endpoints exist or not - its checked and give errror
        // let d:unknown = 'Hello';
        // d.xyz();


        // you can use any data type using any
let abc: any = 'you can use any data type'




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
let xyz:boolean | string = false;

// also in funcation you can you more than one data type
function helloDost (firstName: number | string) {
        // code
}

// unions with conditions
let El = document.getElementById('demo');
function setWidth(width: number | string) {
        if (typeof width === "number") {
                El.style.width = width + 'px';
        } 
        if (typeof width === "string") {
                El.style.width = width;
        } 
}

function setHeight(height: number | string) {
        if (typeof height === "number") {
                El.style.height = height + 'px';
        }
        if (typeof height === "string") {
                El.style.height = height;
        }
}

setWidth(500);
setHeight(300);






// ===================================================================
//                  interface
// ===================================================================

// if you want to assing key types in object used interface
interface user {
        id: number,
        name: string,
        email: string,
        isNew?: boolean, // this is optional you can define it or not defined it.
}

// its object using interface
let user : user =  {
        id: 54,
        name: 'sdfsf',
        email: 'hello@gmail.com',
        isNew: true,
}

// its array using interface
let allUsers: user[] = [
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
function addUser(user:user) {
        allUsers.push(user);
}

// get a user
function getUser(index: number): user {
        return allUsers[index];
}


addUser({id:3, name:'Hellosl', email:'helloworld@gmail.com'}); 
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
function genericsFunction<T>(xyz: T): T {
        return xyz;
}
let aa = genericsFunction<string>("Hello Devendra");
let bb = genericsFunction<number>(5465);
let cc = genericsFunction<boolean>(true);
console.log(aa,bb,cc);

// use multple type in generic typescript
function showStudentInfo<R, N>(rollNumber: R, name: N):void {
        console.log(`Roll: ${rollNumber}, Name:${name}`);
}
showStudentInfo<number, string>(11, "Hello");
showStudentInfo<string, string>('11', 'Hello');



// ===================================================================
//                  Module like component
// ===================================================================

// math.ts file (module file)
        // export const firstName: string = "Devendra";
        // export const lastName: string = "Prajapati";

// index.ts file (call module components)
        // import {firstName, lastName} from './math.js';
        // console.log(firstName, lastName);



// ===================================================================
//                  Namspaces
// ===================================================================




