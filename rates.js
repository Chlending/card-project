document.addEventListener("DOMContentLoaded", function() {


const CONVENTIONAL_RATE='12.934%'
const CONVENTIONAL_APR="6.375%"

const FHA_RATE="15.875%"
const FHA_APR="15.736%"

const VA_RATE="5.875%"
const VA_APR="6.073%"



document.getElementById("rate_conventional").textContent = CONVENTIONAL_RATE; 
document.getElementById("term_conventional").textContent = CONVENTIONAL_APR; 

document.getElementById("rate_fha").textContent = FHA_RATE; 
document.getElementById("term_fha").textContent = FHA_APR; 


document.getElementById("rate_va").textContent = VA_RATE; 
document.getElementById("term_va").textContent = VA_APR; 

console.log("script attached")

});
