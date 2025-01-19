document.getElementById("solarForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Get form values
  const monthlyBill = parseFloat(document.getElementById("monthlyBill").value);
  const costPerKW = parseFloat(document.getElementById("costPerKW").value);
  const tariffRate = parseFloat(document.getElementById("tariffRate").value);
  const recommendedSize = (monthlyBill / 1200).toFixed(1); // Rough calculation for recommended size
  const systemCost = (recommendedSize * costPerKW).toFixed(2);
  const subsidy = 78000; // Fixed subsidy
  const investmentAfterSubsidy = (systemCost - subsidy).toFixed(2);
  const unitsGenerated = (recommendedSize * 4 * 365).toFixed(2);
  const savingsPerYear = (unitsGenerated * tariffRate).toFixed(2);
  const roi = ((savingsPerYear / investmentAfterSubsidy) * 100).toFixed(2);
  const treesPlanted = Math.round(recommendedSize * 43); // Approximation
  const co2Reduced = Math.round(recommendedSize * 1000); // Approximation in kg

  // Populate the report page
  document.getElementById("recommendedSize").textContent = recommendedSize;
  document.getElementById("systemCost").textContent = systemCost;
  document.getElementById("investmentAfterSubsidy").textContent = investmentAfterSubsidy;
  document.getElementById("savingsPerYear").textContent = savingsPerYear;
  document.getElementById("roi").textContent = roi;
  document.getElementById("unitsGenerated").textContent = unitsGenerated;
  document.getElementById("treesPlanted").textContent = treesPlanted;
  document.getElementById("co2Reduced").textContent = co2Reduced;

  // Redirect to the report page
  window.location.href = "report.html";
});

function goBack() {
  window.location.href = "index.html";
}
