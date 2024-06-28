#! 
import inquirer from "inquirer";
const currency = {
    USD: 1,
    GBP: 1.26,
    SGD: 0.74,
    INR: 0.012,
    PKR: 280,
    EUR: 1.07,
    AED: 0.27,
    BHAT: 0.27,
    SAR: 0.27,
    YUAN: 0.14,
    JPY: 0.0062
};
let useranswer = await inquirer.prompt([
    {
        name: "From",
        message: " Enter from Currency",
        type: "list",
        choices: ["USD", "GBP", "SGD", "INR", "PKR", "EUR", "AED", "BHAT", "SAR", "YUAN", "JPY"]
    },
    {
        name: "To",
        message: " Enter to Currency",
        type: "list",
        choices: ["USD", "GBP", "SGD", "INR", "PKR", "EUR", "AED", "BHAT", "SAR", "YUAN", "JPY"]
    },
    {
        name: "Amount",
        message: "Enter your Amount",
        type: 'number'
    }
]);
let fromAmount = currency[useranswer.From];
let toAmount = currency[useranswer.To];
let amount = useranswer.Amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount / toAmount;
console.log(convertedAmount);
// console.log(fromAmount);
// console.log(toAmount);
// console.log(amount)
