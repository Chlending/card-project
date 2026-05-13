document.addEventListener("DOMContentLoaded", function () {
  // Stamp the last updated date for all pages that include rates.js
  // ISO format: YYYY-MM-DD
  window.CHL_UPDATED = "2026-05-13";

  const CONVENTIONAL_RATE = "6.375%";
  const CONVENTIONAL_APR = "6.406%";

  const FHA_RATE = "5.75%";
  const FHA_APR = "6.639%";

  const VA_RATE = "6.125%";
  const VA_APR = "6.351%";

  const DISCLAIMER =
    "*Rates based on the average purchase price of $575,000 and 740 credit score. 30yr fixed rates at 80% LTV for First-time Buyer Conventional Loan - affordable loan program, 96.5% LTV for FHA Loan, and 100% LTV for VA loan.";

  // Safe text setter so pages without a given element do not throw errors
  function setText(id, value) {
    const el = document.getElementById(id);
    if (el) {
      el.textContent = value;
    }
  }

  // Set rates / APR / disclaimer
  setText("rate_conventional", CONVENTIONAL_RATE);
  setText("term_conventional", CONVENTIONAL_APR);

  setText("rate_fha", FHA_RATE);
  setText("term_fha", FHA_APR);

  setText("rate_va", VA_RATE);
  setText("term_va", VA_APR);

  setText("disc_paragraph", DISCLAIMER);

  // Render last updated date if the page includes a <time id="last-updated">
  const updatedEl = document.getElementById("last-updated");

  if (updatedEl && window.CHL_UPDATED) {
    const iso = String(window.CHL_UPDATED).trim().slice(0, 10);

    // Validate YYYY-MM-DD format
    if (/^\d{4}-\d{2}-\d{2}$/.test(iso)) {
      // Use noon UTC to avoid timezone drift
      const d = new Date(iso + "T12:00:00Z");

      const human = d.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
        timeZone: "UTC"
      });

      updatedEl.setAttribute("datetime", iso);
      updatedEl.textContent = human;
    }
  }
});
