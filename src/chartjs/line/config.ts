export const lineOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        y: {
            min: 0,
            ticks: {
                stepSize: 1
            }
        }
    },
    animation: {
        duration: 500
    },
    elements: {
        line: {
            tension: 0.3
        }
    },
    plugins: {
        legend: {
            position: 'bottom' as const,
            labels: {
                padding: 25
            }
        }
    }
};
