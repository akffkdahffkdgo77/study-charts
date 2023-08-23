import { Bar } from 'react-chartjs-2';

import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ChartData } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

type DataType = ChartData<'bar', number[], string>;

interface Props {
    options: any;
    isLoading: boolean;
    data?: DataType;
}

export default function BarChart({ options, isLoading, data }: Props) {
    return (
        <div className="h-[600px] w-full bg-white p-5">
            {isLoading ? (
                <p className="flex h-full w-full items-center justify-center text-3xl font-bold">Loading...!</p>
            ) : data ? (
                <Bar options={options} data={data} />
            ) : (
                <p className="flex h-full w-full items-center justify-center text-3xl font-bold text-red-500">No Data...!</p>
            )}
        </div>
    );
}
