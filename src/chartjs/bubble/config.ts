export const bubbleOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            position: 'bottom' as const,
            labels: {
                padding: 25
            }
        }
    },
    scales: {
        y: {
            beginAtZero: true
        }
    }
};
