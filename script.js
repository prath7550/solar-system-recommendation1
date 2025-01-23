document.getElementById("calculate-btn").addEventListener("click", function () {
  const location = document.getElementById("location").value;
  const monthlyBill = parseFloat(document.getElementById("monthly-bill").value);
  const buildingType = document.getElementById("building-type").value;

  if (!location || isNaN(monthlyBill) || monthlyBill <= 0) {
    alert("Please fill in all fields correctly!");
    return;
  }

  // Solar calculation logic (simple example, customize as needed)
  const avgDailyHours = 5; // Average sunlight hours per day
  const efficiency = 0.8; // System efficiency factor
  const monthlyEnergyUsage = monthlyBill / 7; // Approx kWh/month
  const requiredSystemSize = (monthlyEnergyUsage / avgDailyHours) / efficiency;

  // Display results
  const resultDetails = document.getElementById("result-details");
  resultDetails.innerHTML = `
    <p><strong>Location:</strong> ${location}</p>
    <p><strong>Building Type:</strong> ${capitalize(buildingType)}</p>
    <p><strong>Estimated Solar System Size:</strong> ${requiredSystemSize.toFixed(2)} kW</p>
    <p><strong>Estimated Monthly Savings:</strong> ₹${(monthlyBill * 0.85).toFixed(2)} (approx.)</p>
  `;
  document.getElementById("result").style.display = "block";
});

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
