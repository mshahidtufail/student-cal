#! /usr/bin/env node 
import inquirer from "inquirer";

let calculate = await inquirer.prompt([{
    name:"num1",
    type:"number",
    message:"enter your first number",
},
{name:"num2",
type:"number",
message:"enter your second number",

},
{
    name:"operator",
    type:"list",
    choices:["addition","subraction","multiplying","division"],
    
    message:"enter operator",
}])

//console.log(calculate);

if (calculate.operator==="addition"){ console.log(calculate.num1+ calculate.num2)};
if (calculate.operator==="subraction"){ console.log(calculate.num1- calculate.num2)};
if (calculate.operator==="multiplying"){ console.log(calculate.num1* calculate.num2)};
if (calculate.operator==="division"){ console.log(calculate.num1/ calculate.num2)};

