document.addEventListener("DOMContentLoaded", function() {


const CONVENTIONAL_RATE='5.499%'
const CONVENTIONAL_APR="5.524%"

const FHA_RATE="5.125%"
const FHA_APR="6.025%"

const VA_RATE="5.125%"
const VA_APR="5.334%"

const DISCLAIMER = "*As of 09/17/2024. Rates based on the average purchase price of $525,000 and 720 credit score. 30yr fixed rates at 80% LTV for Conventional Loan - affordable loan program, 96.5% LTV for FHA Loan, and 100% LTV for VA loan."


document.getElementById("rate_conventional").textContent = CONVENTIONAL_RATE; 
document.getElementById("term_conventional").textContent = CONVENTIONAL_APR; 

document.getElementById("rate_fha").textContent = FHA_RATE; 
document.getElementById("term_fha").textContent = FHA_APR; 


document.getElementById("rate_va").textContent = VA_RATE; 
document.getElementById("term_va").textContent = VA_APR; 

document.getElementById("disc_paragraph").textContent =  DISCLAIMER;


});
