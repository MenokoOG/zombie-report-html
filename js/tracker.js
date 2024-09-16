
// Generate random zombie data
function generateZombieData() {
    return {
        zombieCount: Math.floor(Math.random() * 1000),
        infectionRate: (Math.random() * 100).toFixed(2),
        outbreakLevel: getRandomOutbreakLevel(),
        locations: generateLocations(),
        zombieGrowth: generateZombieGrowth()
    };
}

// Helper function to get a random outbreak level
function getRandomOutbreakLevel() {
    const levels = ["Low", "Moderate", "High", "Critical"];
    return levels[Math.floor(Math.random() * levels.length)];
}

// Generate random locations and zombie counts
function generateLocations() {
    const locations = [
        { name: "New York", zombies: Math.floor(Math.random() * 500) },
        { name: "Los Angeles", zombies: Math.floor(Math.random() * 300) },
        { name: "Chicago", zombies: Math.floor(Math.random() * 200) },
        { name: "Houston", zombies: Math.floor(Math.random() * 100) },
        { name: "Miami", zombies: Math.floor(Math.random() * 50) }
    ];
    return locations;
}

// Generate data for zombie growth over time (for the chart)
function generateZombieGrowth() {
    const growth = [];
    for (let i = 0; i < 12; i++) {
        growth.push(Math.floor(Math.random() * 1000));
    }
    return growth;
}

// Update the zombie data and display it
function updateZombieData() {
    const data = generateZombieData();

    document.getElementById('zombieCount').textContent = data.zombieCount;
    document.getElementById('infectionRate').textContent = `${data.infectionRate}%`;
    document.getElementById('outbreakLevel').textContent = data.outbreakLevel;

    // Display the zombie locations
    const locationsList = document.getElementById('locationsList');
    locationsList.innerHTML = '';
    data.locations.forEach(location => {
        const li = document.createElement('li');
        li.textContent = `${location.name}: ${location.zombies} zombies`;
        locationsList.appendChild(li);
    });

    // Update the chart with the new zombie growth data
    updateZombieChart(data.zombieGrowth);
}

// Create the zombie growth chart using Chart.js
const ctx = document.getElementById('zombieGrowthChart').getContext('2d');
const zombieGrowthChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'Zombie Growth Over Time',
            data: [],
            backgroundColor: 'rgba(255, 0, 0, 0.2)',
            borderColor: 'rgba(255, 0, 0, 1)',
            borderWidth: 1,
            fill: true,
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Update the chart with new data
function updateZombieChart(zombieGrowth) {
    zombieGrowthChart.data.datasets[0].data = zombieGrowth;
    zombieGrowthChart.update();
}

// Call the function on page load and update every 5 seconds
document.addEventListener('DOMContentLoaded', () => {
    updateZombieData();
    setInterval(updateZombieData, 5000); // Update every 5 seconds
});
