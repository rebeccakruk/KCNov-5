let company = {
    name: `Bic Pens`,
    yearlyRevenue: 10000000,
    ceo: `Rebecca`,
    numberOfEmployees: 650,
    // managers: [`George`, 'Ringo', `John`, `Paul`, `Yoko`]
    managers: [
        {
            name: `George`,
            salary: 75000,
            isSenior: false
        },
        {
            name: `Ringo`,
            salary: 90000,
            isSenior: false
        },
        {
            name: `John`,
            salary: 100000,
            isSenior: true
        },
        {
            name: `Paul`,
            salary: 125000,
            isSenior: true
        },
             {
            name: `Yoko`,
            salary: 25000,
            isSenior: false
        },
    ]
}

if (company[`yearlyRevenue`] >= 1000000) {
    console.log(`Congratulations to ${company[`name`]}, led by ${company[`ceo`]} and ${company[`numberOfEmployees`]} hard working employees for a great year!`);
} else {
    console.log(`Keep working hard!`);
}

//or
// if (company[`yearlyRevenue`] >= 1000000){
// console.log(`Congratulations on being a company with money!`);
// console.log(company[`name`]);
// console.log(company[`ceo`]);
// console.log(company[`numberOfEmployees`]);
// } 
// else{
//     console.log(`Keep trying to make money!`);
// }



// you need some kind of variable keeping track of number of times the loop has ran (so that you can tell it to stop)
// normally counting through a loop is handy with accessing an array
// make sure that your loop stops. infinite loops will crash your cpu while it does nothing
// in this instance, counter is a number. hover over it and see.
// the number on the while counter line instead of being a number, can be dynamically linked to the number of managers we have?
let counter = 0
while (counter < company[`managers`].length) {
    console.log(company[`managers`][counter][`name`]);
    console.log(company[`managers`][counter][`salary`]);
    if (company[`managers`][counter][`isSenior`] === true) {
        console.log(`You won the manager game!`);
    }
    counter = counter + 1;
}
//OR!
for (let counter = 0; counter < company[`managers`].length; counter++) {
    console.log(company[`managers`][counter][`name`]);
    console.log(company[`managers`][counter][`salary`]);
        if (company[`managers`][counter][`isSenior`] === true) {
        console.log(`You won the manager game!`);
    }
}