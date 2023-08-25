import { Chart as ChartJS, LinearScale, PointElement, Tooltip, Legend } from 'chart.js';
import { Bubble } from 'react-chartjs-2';

import type { Props } from './types';

ChartJS.register(LinearScale, PointElement, Tooltip, Legend);

export default function BubbleChart({ options, data, isLoading }: Props) {
    return (
        <div className="h-[600px] w-full bg-white p-5">
            {isLoading ? (
                <p className="flex h-full w-full items-center justify-center text-3xl font-bold">Loading...!</p>
            ) : data ? (
                <Bubble options={options} data={data} />
            ) : (
                <p className="flex h-full w-full items-center justify-center text-3xl font-bold text-red-500">No Data...!</p>
            )}
        </div>
    );
}
