function calculate() {
    const electricityBill = parseFloat(document.getElementById("electricityBill").value);
    const costPerKW = parseFloat(document.getElementById("costPerKW").value);

    if (!electricityBill || !costPerKW) {
        alert("Please fill in all fields.");
        return;
    }

    const recommendedKW = Math.ceil(electricityBill / 1000); // Example logic
    const systemCost = recommendedKW * costPerKW;

    localStorage.setItem("recommendedKW", recommendedKW);
    localStorage.setItem("systemCost", systemCost);

    window.location.href = "report.html";
}
