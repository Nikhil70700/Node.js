import chalk, { Chalk } from 'chalk';
import readline from 'readline';
 //!The readline module in Node.js is used to read input from the command line interactively. It allows handling user input from the console, making it useful for CLI applications, prompts, and interactive scripts.

 const rl=readline.createInterface({
    input:process.stdin, // Standard input (keyboard)
    output:process.stdout  // Standard output (console)
 })

 const todos=[];
 const showMenu=()=>{
    console.log("\n1: Add a Task:");
    console.log("2: View Task:");
    console.log("3: Delete Task:");

    rl.question(chalk.bgBlueBright("Choose an Option:"),handleInput)
 }

 const handleInput=(option)=>{
    if(option==1){
        rl.question(chalk.blue("Enter the Task:"),(task)=>{
            todos.push(task);
            console.log(("Task Added:"),chalk.blue(task));
            showMenu();

        })
    } else if(option==2){
        console.log("\n Your Todo Lists:");
        todos.forEach((task,index)=>{
            console.log((chalk.red.bgMagenta(`${index+1}.${task}`)));
            
        })
        showMenu();
    }else if(option==3){
        console.log(chalk.red("Goodbye!"));
        rl.close();
    }else{
        console.log(chalk.red("Invalid Option Choose ! Please try again"));
    }

 }


 showMenu();


 //!question():

 //?The .question() method in the readline module is used to take user input in a command-line interface (CLI). It prompts the user with a question and executes a callback function with the user's response.
 // ex:rl.question(question, callback)
//  question: A string that is displayed to the user.
// callback(answer): A function that receives the user's input.
