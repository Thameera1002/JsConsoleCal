// // console.log('Hello js World 🌎')
//
// // // string
// // name="Nimal";
// // address="Kamal";
// // letter="A";
// //
// // // number
// // age=27
// // salary=25000;
// // avg=12.56
// // neg=-10;
// //
// // // array
// // languages=['Java', 'Php','Js'];
// // first=languages[0]; // java
// //
// // // object
// // customer={name:'nimal',address:'colombo',salary:25000
// // }
// // customer_salary=customer.salary; // 25000
//
// // boolean
// ifExists=true; // false
//
// // null | undefined
//
// // java==> Object oriented p\L | jS===> Object Based Language (prototype)
// // conditions / flow-controls & operators
//
// // ==> if, else, if else, switch, while, forLoop, do-While, forEach
// // == +, -, *, /, %, [**]
//
// //===> variables + flow-controls + operators
// //=================
//
//
//
// // number1=10;
// // number2=20;
// // number1=Number(prompt('Insert Number 1 '));
// // number2=Number(prompt('Insert Number 2'));
// // result = number1+number2;
// // // console.log(result);
// // // console.log("result : "+result);
// // // console.log("result : "+number1+number2); // string concatenation
// // // console.log('result :',result) // ; ==> not necessary
// // console.log('result :',result);
//
//
// // valueNumber=100;
// // valueString="Nimal";
// // if (isNaN(valueString)){ // if it is a number, then returns false, otherwise returns true (string == true)
// //     console.log("String")
// // }else{
// //     console.log("Number")
// // }
//
// // number1=Number(prompt('insert number 1')); // Integer.parseInt(some text);
// // // prompt => value as a string ==> so we have to cast that value into a number.(type casting)
// // number2=Number(prompt('insert number 2'));
// //
// // if (!isNaN(number1) || !isNaN(number2)){
// //     result = number1+number2;
// //     console.log('result :',result);
// // }else{
// //     alert('Please insert valid numbers');
// // }
//
// // /*number = Math.random() * (101-0 + 1)+0;*/
// // number = Math.random() * 101;
// // num1=Math.floor(number);
// // num2=Math.ceil(number);
// // console.log('number ',number);
// // console.log('num 1 :',num1);
// // console.log('num 2 :',num2);
//
// // number1 = Math.floor(Math.random() * 101)
// // number2 = Math.floor(Math.random() * 101)
// // result = number1 + number2;
// // console.log('result :', result);
//
// // function printValue() {
// //     console.log('Hello World 🌎')
// // }
//
//
// // // function
// //
// // function printValue(){
// //     console.log("hello world 🌎");
// // }
// // printValue();
// // //===========
// // function printValueWithArgs(value){
// //     console.log(value);
// // }
// // printValueWithArgs("Nimal");
// // //==========
// // function calculate(num1, num2){
// //     return (num1+num2);
// // }
// // total = calculate(10,20);
// // console.log(total);
// // //============
//
// // function (Arrow-functions)
//
// // printValue=()=>{
// //     console.log("hello world 🌎");
// // }
// // printValue();
// // //===========
// // printValueWithArgs=(value)=>{
// //     console.log(value);
// // }
// // printValueWithArgs("Nimal");
// // //==========
// // calculate1=(num1, num2)=>{
// //     return (num1+num2); // explicit return
// // }
// // total = calculate1(10,20);
// // console.log(total);
// // //============
// // calculate2=(num1, num2)=>num1+num2; // implicit return
// //
// // total = calculate2(10,20);
// // console.log(total);
//
//
// // animalsArray = ['🐈', '🐕', '🦁', '🐘', '🐟'];
// // animal1 = animalsArray[0];// 1st element=> index = 0
// // console.log(animal1);
// // animal2 = animalsArray[1];// 1st element=> index = 0
// // console.log(animal2);
// // //===============
// // console.log(animalsArray);
// // //===============
// // for (let i = 0; i < animalsArray.length; i++) {
// //     console.log(animalsArray[i]);
// // }
// // //===============
// // console.log("=============")
// // for(const tempData of animalsArray){
// //     console.log(tempData)
// // }
// // //=======add data========
// // animalsArray.push('🐍');
// // console.log(animalsArray)
// // //===========splice============
// // console.log(animalsArray.slice(2,4));// '🦁','🐘'
// // //===========splice============
// // animalsArray.splice(2,1);
// // console.log(animalsArray)
//
// // crazyThings={
// //     name:'Nimal',
// //     age:50,
// //     available:true,
// //     salary:25000,
// //     deduction:2000,
// //     skills:['Js','C#','Php'],
// //     netSalary:function (){return crazyThings.salary-crazyThings.deduction;},
// //     findDesignation:()=>"Manager!",
// //     children:{
// //         childOne:[
// //             {name:'bandara',age:12},
// //             {name:'Kamal',age:18}
// //         ]
// //     }
// // };
// // console.log(crazyThings)
//
//
// crazyThings={
//     name:'Nimal',
//     age:50,
//     available:true,
//     salary:25000,
//     deduction:2000,
//     skills:['Js','C#','Php'],
//     netSalary:function (){return crazyThings.salary-crazyThings.deduction;},
//     findDesignation:()=>"Manager!",
//     members:{
//         children:[
//             {name:'bandara',age:12},
//             {name:'Kamal',age:18}
//         ]
//     }
// };
// console.log(crazyThings);
// // name===
// console.log(crazyThings.name);
// // age===
// console.log(crazyThings['age']);
// // skills
// console.log(crazyThings.skills)
// // nett salary
// console.log(crazyThings.netSalary());
// // child
// for(const tempData of crazyThings.members.children){
//     console.log(tempData);
// }

//select level
let level=prompt('Select your LEVEL !');


//generate questions
generateQuestions=()=>{
    let range = findLevelRange();
    let number1;
    let number2;
    let exp;
    let question='';
    let answer =0;
    let sheet=[];
    for (let i = 0; i < 10; i++) {
        number1 = generateNumber(range);
        number2 = generateNumber(range);
        exp = pickOperator();
        question = number1+' '+exp+' '+number2;
        answer=findAnswer(number1,number2,exp);
        let data= {
            question: question,
            answer:answer
        }
        sheet.push(data);
    }
    console.log(sheet);
}

findAnswer=(num1,num2,exp)=>{
    switch (exp) {
        case '+': return num1+num2;
        case '-': return num1-num2;
        case '*': return num1*num2;
        case '/': return num1/num2;
        case '%': return num1%num2;
    }
}

pickOperator=()=>{
    let operators=['+','-','*','/','%'];
    return operators[generateNumber(5)];
}

generateNumber=(maxVal)=>{
    return Math.floor(Math.random()*maxVal);
}
findLevelRange=()=> {
    switch (level) {
        case 'B': return 50;
        case 'M': return 500;
        case 'A': return 1000;
    }
}

generateQuestions();
