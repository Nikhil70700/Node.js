import chalk from 'chalk';  


console.table([
    { Name: chalk.green('Alice'), Status: chalk.blue('Online') },
    { Name: chalk.red('Bob'), Status: chalk.gray('Offline') }
]);

