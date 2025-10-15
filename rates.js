document.addEventListener("DOMContentLoaded", function() {

// Stamp the last updated date for all pages that include rates.js
// ISO format: YYYY-MM-DD
window.CHL_UPDATED = '2025-10-15';
  
const CONVENTIONAL_RATE='6.0%'
const CONVENTIONAL_APR="6.031%"

const FHA_RATE="5.75%"
const FHA_APR="6.64%"

const VA_RATE="5.75%"
const VA_APR="5.97%"

const DISCLAIMER = "*Rates based on the average purchase price of $575,000 and 740 credit score. 30yr fixed rates at 80% LTV for First-time Buyer Conventional Loan - affordable loan program, 96.5% LTV for FHA Loan, and 100% LTV for VA loan."


document.getElementById("rate_conventional").textContent = CONVENTIONAL_RATE; 
document.getElementById("term_conventional").textContent = CONVENTIONAL_APR; 

document.getElementById("rate_fha").textContent = FHA_RATE; 
document.getElementById("term_fha").textContent = FHA_APR; 


document.getElementById("rate_va").textContent = VA_RATE; 
document.getElementById("term_va").textContent = VA_APR; 

document.getElementById("disc_paragraph").textContent =  DISCLAIMER;

 


});






















