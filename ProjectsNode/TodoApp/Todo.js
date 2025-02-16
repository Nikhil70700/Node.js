import readline from 'readline';
 //The readline module in Node.js is used to read input from the command line interactively. It allows handling user input from the console, making it useful for CLI applications, prompts, and interactive scripts.

 const rl=readline.createInterface({
    input:process.stdin, //to read from the standard input
    output:process.stdout //to write to the standard output
 })

 const todos=[];
 const showMenu=()=>{
    console.log("\n1: Add a Task:");
    console.log("2: View Task:");
    console.log("3: Delete Task:");

    rl.question("Choose an Option:",handleInput)
 }

 const handleInput=(option)=>{
    if(option==1){
        rl.question("Enter the Task:",(task)=>{
            todos.push(task);
            console.log("Task Added:",task);
            showMenu();

        })
    } else if(option==2){
        console.log("\n Your Todo Lists:");
        todos.forEach((task,index)=>{
            console.log(`${index+1}.${task}`);
            
        })
        showMenu();
    }else if(option==3){
        console.log("Goodbye!");
        rl.close();
    }else{
        console.log("Invalid Option Choose ! Please try again");
    }

 }


 showMenu();