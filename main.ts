#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const quiz: {
    
    question_1: string;
    question_2: string;
    question_3: string;
    question_4: string;
    question_5: string;
} = await inquirer.prompt([
    {
        name: "question_1",
        type: "list",
        message: chalk.cyanBright("Q1.What is the correct way to check if two values are not equal in TypeScript?"),
        choices: ["a == b", "a === b", "a = b", "a !==b"]
    },
    {
        name: "question_2",
        type: "list",
        message: chalk.cyanBright("Q2.Which of the following characters is commonly allowed in variable names in TypeScript?"),
        choices: ["$", "@", "#", "&"]

    },
    {
        name: "question_3",
        type: "list",
        message: chalk.cyanBright("Q3.Which operator is commonly used for string concatenation in TypeScript?"),
         choices:["+", ":", ";", ","]

    },
    {
        name: "question_4",
        type: "list",
        message: chalk.cyanBright("Q4.In TypeScript, which symbol is commonly used to terminate a statement?"),
        choices: [".", ":", ";", ","]
    },
    {
        name: "question_5",
        type: "list",
        message: chalk.cyanBright("Q5.Whhich method of Inquirer.js is used to start the prompt interface and recive user input?"),
        choices: ["start()", "prompt()", "init()", "run()"]
    }
]);

let score: number = 0;

switch(quiz.question_1) {
    case "a !==b":
        console.log (chalk.bold.greenBright("1. Correct"));
        ++score;
        break;
        default:
         console.log (chalk.bold.redBright("1. Incorrect!"));
            
}
switch(quiz.question_2) {
    case "$":
        console.log(chalk.bold.greenBright("2. Correct"));
        ++score;
        break;
        default:
         console.log (chalk.bold.redBright("2. Incorrect!"));
}

switch(quiz.question_3) {
    case "+":
        console.log (chalk.bold.greenBright("3. Correct"));
        ++score;
        break;
        default:
         console.log (chalk.bold.redBright("3. Incorrect!"));
}

switch(quiz.question_4) {
    case ";":
        console.log (chalk.bold.greenBright("4. Correct"));
        ++score;
        break;
        default:
         console.log (chalk.bold.redBright("4. Incorrect!"));
}

switch(quiz.question_5) {
    case "prompt()":
        console.log (chalk.bold.greenBright("5. Correct"));
        ++score;
        break;
        default:
         console.log (chalk.bold.redBright("5. Incorrect!"));
}

console.log (chalk.bold.magentaBright(`Score: ${score}`));


