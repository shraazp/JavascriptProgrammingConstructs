var number;
const { log } = require('console');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a weekday number (1-7): ', (number) => 
{
    switch(Number(number))
    {
        case 1: 
            console.log("Sunday");
            break;
        case 2: 
            console.log("Monday");
            break;
        case 3: 
            console.log("Tuesday");
            break;
        case 4: 
            console.log("Wednesday");
            break;
        case 5: 
            console.log("Thursday");
            break;
        case 6: 
            console.log("Friday");
            break;
        case 7: 
            console.log("Saturday");
            break;
        default:
            console.log("Invalid weekday number.");
    }
rl.close();
});