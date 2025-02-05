document.getElementById('solarForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    // Get user inputs
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;
    const billAmount = parseFloat(document.getElementById('billAmount').value);
    const type = document.getElementById('type').value;

    // Logic for solar system size calculation (simplified for now)
    const solarSize = calculateSolarSize(billAmount, type);

    // Show the result
    document.getElementById('solarSize').textContent = `Estimated Solar System Size: ${solarSize} kW`;

    // You can add additional logic here based on city and state for location-based energy calculations.
});

// Function to calculate solar system size (dummy calculation)
function calculateSolarSize(billAmount, type) {
    // Example calculation (you may adjust this formula based on real-world calculations)
    const averageDailyConsumption = billAmount / 30; // Assuming daily consumption
    const solarEfficiency = 5; // KWh per kW panel (you can adjust this)

    // Calculate based on building type
    let systemSizeMultiplier = 1;
    if (type === 'C') systemSizeMultiplier = 1.5; // Commercial uses more power
    if (type === 'I') systemSizeMultiplier = 2;   // Industrial uses much more

    // Simple formula: System Size = Daily Consumption / Solar Efficiency * Type Multiplier
    return (averageDailyConsumption / solarEfficiency) * systemSizeMultiplier;
}
