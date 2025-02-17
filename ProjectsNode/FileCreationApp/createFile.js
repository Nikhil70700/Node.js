import readline from 'readline';
import fs from 'fs';
import chalk from 'chalk';


const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})


const fileCreation=()=>{
    rl.question(chalk.blueBright('Enter the File Name:'),(fileName)=>{
        rl.question(chalk.blue(`Enter Your Content:`),(content)=>{
            fs.writeFile(`${fileName}.html`,content,(err)=>{
                if(err)console.error(`Invalid Input! ${err.message}`)
                    else console.log(chalk.greenBright(`File ${fileName} Created Successfully 🎉!`))
            })
            rl.close();

        });
    })
}

fileCreation();