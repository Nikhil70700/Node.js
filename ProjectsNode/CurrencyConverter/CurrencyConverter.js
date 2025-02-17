import https from 'https';
import readline from 'readline';
import chalk from 'chalk';


const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
const apiKey='2d67d48e712a79dca3218816';
const url=`https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;

const convertCurrency=(amount,rate)=>{
    return (amount*rate).toFixed(1);
}


https.get(url,(response)=>{
    let data="";
    response.on('data',(chunk)=>{
        data=data+chunk;
    });

    response.on('end',()=>{
        const rates=JSON.parse(data).conversion_rates;

        rl.question(chalk.blue.bold('Enter the Amount in USD: '),(amount)=>{
            rl.question(chalk.blue.bold('Enter the target Currency (e.g: INR,EUR,NPR):'),(currency)=>{
                const rate=rates[currency.toUpperCase()];
                if(rate){
                    console.log(chalk.blue.bold(`${chalk.red.bold(amount)} USD is approximately ${chalk.red(convertCurrency(amount,rate))} ${chalk.greenBright.bold(currency.toUpperCase())}`));
                    
                }else{
                    console.log(chalk.red.bold('Invalid Currency Code ❌'));
                }
                rl.close();
                
            })
        })

    })
    
})