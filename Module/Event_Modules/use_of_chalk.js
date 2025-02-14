import EventEmitter from 'events';  // ✅ Use import
import chalk from 'chalk';          // ✅ Import Chalk properly

const emitter = new EventEmitter();

emitter.on("myData", (args) => {
    console.log(
        (chalk.bgCyan.bold(
            `Hello! ${chalk.green(args.name)} You Are a ${chalk.red.bold(args.profession)} at ${chalk.bold.bgBlue(args.companyName)} Right!`)
        )
    );
});

emitter.emit("myData", { name: "Nikhil", profession: "Software Engineer", companyName: "Microsoft" });
