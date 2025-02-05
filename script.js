document.getElementById('calculatorForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const billAmount = parseFloat(document.getElementById('billAmount').value);
    const type = document.getElementById('type').value;

    // Tariff rates for Maharashtra (simulated data)
    const tariffRates = {
        'R': 7,   // Residential: ₹7 per kWh
        'C': 9,   // Commercial: ₹9 per kWh
        'I': 10   // Industrial: ₹10 per kWh
    };

    const tariffRate = tariffRates[type];

    // Calculate Solar System Size (simplified model)
    const systemSize = (billAmount / 30) / tariffRate;  // Simplified formula for solar size calculation

    // Energy Generation (assuming 4.5 hours of full sunlight per day in Maharashtra)
    const dailyGeneration = systemSize * 4.5; // kWh/day
    const monthlyGeneration = dailyGeneration * 30;
    const yearlyGeneration = monthlyGeneration * 12;

    // Estimated savings
    const yearlySavings = yearlyGeneration * tariffRate;

    // ROI Calculation (assuming a fixed installation cost for now)
    const installationCost = 500000; // ₹500,000 per kW installed (simplified)
    const totalInstallationCost = systemSize * installationCost;
    const roi = ((yearlySavings / totalInstallationCost) * 100).toFixed(2);

    // Payback Period Calculation
    const paybackPeriod = (totalInstallationCost / yearlySavings).toFixed(2);

    // Display results
    document.getElementById('systemSize').textContent = systemSize.toFixed(2);
    document.getElementById('monthlyGeneration').textContent = monthlyGeneration.toFixed(2);
    document.getElementById('yearlyGeneration').textContent = yearlyGeneration.toFixed(2);
    document.getElementById('yearlySavings').textContent = yearlySavings.toFixed(2);
    document.getElementById('roi').textContent = roi + '%';
    document.getElementById('paybackPeriod').textContent = paybackPeriod;

    // Display ROI Chart
    const ctx = document.getElementById('roiChart').getContext('2d');
    const roiChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Year 1', 'Year 2', 'Year 3', 'Year 4'],
            datasets: [{
                label: 'ROI (%)',
                data: [roi, roi, roi, roi], // Simulated constant ROI for simplicity
                backgroundColor: '#28a745',
                borderColor: '#218838',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    max: 20
                }
            }
        }
    });
});
