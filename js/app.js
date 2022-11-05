let company = {
    name: `Bic Pens`,
    yearlyRevenue: 10000000,
    ceo: `Rebecca`,
    numberOfEmployees: 650
}

if (company[`yearlyRevenue`] >= 1000000){
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