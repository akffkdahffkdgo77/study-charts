import { useState } from 'react';

import useFetch from 'hooks/useFetch';

import BarChart from 'chartjs/bar/BarChart';
import { barOptions, stackedBarOptions } from 'chartjs/config/bar';
import getBarList, { BarChartData } from 'chartjs/utils/bar';

export default function BarChartDemo() {
    const { data, isLoading } = useFetch<BarChartData>(() =>
        getBarList({
            index: 3,
            delay: 1000,
            isColorChange: false
        })
    );

    const [type, setType] = useState<'stacked' | 'default'>('default');
    const [index, setIndex] = useState(3);
    const [addInfo, setAddInfo] = useState<BarChartData>();

    const handleAdditionalInfo = () => {
        if (index < 8) {
            setIndex((prev) => prev + 1);
            getBarList({ index: index + 1, delay: 100 }).then((res) => {
                setAddInfo(res);
            });
        } else {
            alert('데이터가 없습니다...!');
        }
    };

    const handleColorChange = () => {
        getBarList({ index, delay: 100, isColorChange: true }).then((res) => {
            setAddInfo(res);
        });
    };

    const handleTypeChange = () => {
        setType((prev) => (prev === 'default' ? 'stacked' : 'default'));
    };

    return (
        <>
            <header className="flex w-full items-center justify-between p-5">
                <h1 className="text-4xl font-bold">Study Charts</h1>
                <div className="flex items-center gap-2.5">
                    <button type="button" onClick={handleAdditionalInfo} className="rounded-md border border-black p-1">
                        Add Data
                    </button>
                    <button type="button" onClick={handleColorChange} className="rounded-md border border-black p-1">
                        Change Colors
                    </button>
                    <button type="button" onClick={handleTypeChange} className="rounded-md border border-black p-1">
                        Change Type : {type === 'stacked' ? 'Stacked' : 'Bar'}
                    </button>
                </div>
            </header>
            <main>
                <BarChart key={type === 'default' ? 'default-bar' : 'stacked-bar'} options={type === 'default' ? barOptions : stackedBarOptions} data={addInfo ?? data} isLoading={isLoading} />
            </main>
        </>
    );
}
