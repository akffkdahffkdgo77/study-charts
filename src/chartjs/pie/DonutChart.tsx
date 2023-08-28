import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

import type { Props } from './types';

ChartJS.register(ArcElement, Tooltip, Legend);

function DonutChart({ options, data, isLoading }: Props) {
    return (
        <div className="h-[600px] w-[500px] bg-white p-5">
            {isLoading ? (
                <p className="flex h-full w-full items-center justify-center text-3xl font-bold">Loading...!</p>
            ) : data ? (
                <Doughnut options={options} data={data} />
            ) : (
                <p className="flex h-full w-full items-center justify-center text-3xl font-bold text-red-500">No Data...!</p>
            )}
        </div>
    );
}

export default DonutChart;