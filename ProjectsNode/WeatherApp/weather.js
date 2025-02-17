import chalk from 'chalk';
import readline from 'readline/promises';

const apiKey='c6feafe1e795fe78daef0de19eafe266';
const Base_url='https://api.openweathermap.org/data/2.5/weather';


const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout

});


const getWeather=async()=>{
    const url=`${Base_url}?q=${city}&appid=${apiKey}&units=metric`;
    try{
        const response=await fetch(url);
        if(!response.ok){
            throw new Error('Failed to fetch data from Api');
        }




        
        const weatherData=await response.json();




        function convertUnixTimestampToTime(timestamp) {
            const date = new Date(timestamp * 1000); // Convert seconds to milliseconds
            return date.toLocaleString('en-GB', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true ,year: 'numeric', 
                month: 'long', day: 'numeric'});
        }
        
        
       
        
        // console.log(weatherData)  //=> Details of Api

        console.log(chalk.red.bold(chalk.bold.bgMagentaBright('\nWeather Information🌥️:')));
        console.log(chalk.red.bold(`City: ${chalk.blue(weatherData.name)}🏠`));  
        console.log(chalk.red.bold(`Feels-like: ${chalk.blue(weatherData.main.feels_like)}`)); 
        console.log(chalk.red.bold(`Sunrise☀️: ${chalk.blue(convertUnixTimestampToTime(weatherData.sys.sunrise))}`));
        console.log(chalk.red.bold(`Sunset 🌇: ${chalk.blue(convertUnixTimestampToTime(weatherData.sys.sunset))}`));
        console.log(chalk.red.bold(`Temperature:${chalk.blue(weatherData.main.temp)} °C`));
        console.log(chalk.red.bold(`Description: ${chalk.blue(weatherData.weather[0].description)}`));
        console.log(chalk.red.bold(`Humidity: ${chalk.blue(weatherData.main.humidity)} %`));
        console.log(chalk.red.bold(`Wind Speed: ${chalk.blue(weatherData.wind.speed)} m/s\n`));
        // console.log(chalk.red.bold(`${chalk.blue(weatherData.weather[0].icon)}`));
    }catch(error){
        console.log(error);
    }
}

const city= await rl.question(chalk.blue.bgMagenta('Enter Your City Name:'));

await getWeather(city);
rl.close();