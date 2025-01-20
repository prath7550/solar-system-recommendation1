document.getElementById("solarForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const city = document.getElementById("city").value;
    const consumerType = document.getElementById("consumerType").value;
    const monthlyBill = parseFloat(document.getElementById("monthlyBill").value);
    const costPerKW = parseFloat(document.getElementById("costPerKW").value);

    const rates = {
        residential: { fixed: 105, energy: [3.01, 6.02, 8.25, 9.50] },
        commercial: { fixed: 250, energy: 7.50 },
        industrial: { fixed: 250, energy: 6.50 },
    };

    const selectedRate = rates[consumerType];
    const avgRate =
        consumerType === "residential"
            ? selectedRate.energy.reduce((a, b) => a + b) / selectedRate.energy.length
            : selectedRate.energy;

    const recommendedSystemSize = Math.ceil(monthlyBill / (avgRate * 30));
    const totalCost = recommendedSystemSize * costPerKW;

    const monthlyGeneration = recommendedSystemSize * 4 * 30; // 4 units/day per kW
    const yearlyGeneration = monthlyGeneration * 12;

    localStorage.setItem("city", city);
    localStorage.setItem("consumerType", consumerType);
    localStorage.setItem("recommendedSystemSize", recommendedSystemSize);
    localStorage.setItem("totalCost", totalCost);
    localStorage.setItem("monthlyGeneration", monthlyGeneration);
    localStorage.setItem("yearlyGeneration", yearlyGeneration);

    window.location.href = "results.html";
});
