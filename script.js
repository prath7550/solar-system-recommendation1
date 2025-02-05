document.getElementById('calculateButton').addEventListener('click', function() {
    // Get user input values
    const billAmount = parseFloat(document.getElementById('billAmount').value);
    const type = document.getElementById('type').value;

    // Use real-time tariff data (assumed rates for Maharashtra)
    const tariffRates = {
        'R': 7,  // Residential: ₹7 per kWh
        'C': 9,  // Commercial: ₹9 per kWh
        'I': 10  // Industrial: ₹10 per kWh
    };

    const tariffRate = tariffRates[type];

    // Calculate Solar System Size (simplified model based on bill amount and tariff rate)
    const systemSize = (billAmount / 30) / tariffRate;  // Simplified solar size calculation

    // Estimate Energy Generation (assuming 4.5 hours of sunlight per day in Maharashtra)
    const dailyGeneration = systemSize * 4.5;  // kWh/day
    const monthlyGeneration = dailyGeneration * 30;
    const yearlyGeneration = monthlyGeneration * 12;

    // Estimate Yearly Savings
    const yearlySavings = yearlyGeneration * tariffRate;

    // Calculate ROI and Payback Period
    const installationCostPerKW = 500000; // ₹500,000 per kW installed (assumed)
    const totalInstallationCost = systemSize * installationCostPerKW;
    const roi = ((yearlySavings / totalInstallationCost) * 100).toFixed(2);
    const paybackPeriod = (totalInstallationCost / yearlySavings).toFixed(2);

    // Display results dynamically
    document.getElementById('systemSize').textContent = systemSize.toFixed(2);
    document.getElementById('monthlyGeneration').textContent = monthlyGeneration.toFixed(2);
    document.getElementById('yearlyGeneration').textContent = yearlyGeneration.toFixed(2);
    document.getElementById('yearlySavings').textContent = yearlySavings.toFixed(2);
    document.getElementById('roi').textContent = roi + '%';
    document.getElementById('paybackPeriod').textContent = paybackPeriod;

    // Show ROI Chart
    const ctx = document.getElementById('roiChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Year 1', 'Year 2', 'Year 3', 'Year 4'],
            datasets: [{
                label: 'ROI (%)',
                data: [roi, roi, roi, roi],  // Simulated constant ROI for simplicity
                borderColor: '#4CAF50',
                backgroundColor: 'rgba(76, 175, 80, 0.3)',
                fill: true,
                tension: 0.1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 25
                }
            }
        }
    });

    // Show the results section
    document.getElementById('resultContainer').style.display = 'block';
});
