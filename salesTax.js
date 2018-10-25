var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];


// console.log(companySalesData[1].sales)
// console.log(salesTaxRates.AB)
function calculateSalesTax(company){

   if(company.toLowerCase() === 'bombardier'){
    var totalSales = 0;
    var totalSalesTax = 0;
    for(i = 0; i < companySalesData[1].sales.length; i++){
      totalSales += companySalesData[1].sales[i];
    }
    totalSalesTax = totalSales * salesTaxRates.AB;
    // console.log(totalSales);
    // console.log(totalSalesTax);
    var result = 'total sales: ' + totalSales + '\n' + 'total taxes: ' + totalSalesTax;
    return result
  }
  else{
    var totalSales = 0;
    var totalSalesTax = 0;
    var totalSales2 = 0;
    for(i = 0; i < companySalesData[0].sales.length; i++){
      totalSales += companySalesData[0].sales[i];
    }
    totalSalesTax = totalSales * salesTaxRates.BC;
    // console.log(totalSales);
    // console.log(totalSalesTax);
    for(i = 0; i < companySalesData[2].sales.length; i++){
      totalSales2 += companySalesData[2].sales[i];
    }
    totalSalesTax2 = (totalSales2 * salesTaxRates.SK);
    // console.log(totalSales2);
    // console.log(totalSalesTax2);
    var totalSales3 = totalSales2 + totalSales;
    var totalSalesTax3 = totalSalesTax + totalSalesTax2;
  // console.log(totalSales3);
  // console.log(totalSalesTax3);
  var result = 'total sales: ' + totalSales3 + '\n' + 'total taxes: ' + totalSalesTax3;
  return result;
  }
}
console.log(calculateSalesTax('Telus'));