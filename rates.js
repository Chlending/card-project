document.addEventListener("DOMContentLoaded", function() {


const CONVENTIONAL_RATE='6.75%'
const CONVENTIONAL_APR="6.782%"

const FHA_RATE="6.125%"
const FHA_APR="7.01%"

const VA_RATE="6.125%"
const VA_APR="6.35%"

const DISCLAIMER = "*As of 05/07/2025. Rates based on the average purchase price of $525,000 and 740 credit score. 30yr fixed rates at 80% LTV for Conventional Loan - affordable loan program, 96.5% LTV for FHA Loan, and 100% LTV for VA loan."


document.getElementById("rate_conventional").textContent = CONVENTIONAL_RATE; 
document.getElementById("term_conventional").textContent = CONVENTIONAL_APR; 

document.getElementById("rate_fha").textContent = FHA_RATE; 
document.getElementById("term_fha").textContent = FHA_APR; 


document.getElementById("rate_va").textContent = VA_RATE; 
document.getElementById("term_va").textContent = VA_APR; 

document.getElementById("disc_paragraph").textContent =  DISCLAIMER;


});
