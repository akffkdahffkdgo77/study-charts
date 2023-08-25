import { useState } from 'react';

import useFetch from 'hooks/useFetch';

import BarChart, { BarChartData, barOptions, getDataList, stackedBarOptions } from 'chartjs/bar';

export default function BarChartDemo() {
    const { data, isLoading } = useFetch<BarChartData>(() => getDataList({}));

    const [type, setType] = useState<'stacked' | 'default'>('default');
    const [index, setIndex] = useState(3);
    const [additionalInfo, setAdditionalInfo] = useState<BarChartData>();

    const handleAdditionalInfo = () => {
        if (index < 8) {
            setIndex((prev) => prev + 1);
            getDataList({
                index: index + 1,
                delay: 100
            }).then((res) => {
                setAdditionalInfo(res);
            });
        } else {
            alert('데이터가 없습니다...!');
        }
    };

    const handleColorChange = () => {
        getDataList({
            index,
            delay: 100,
            isColorChange: true
        }).then((res) => {
            setAdditionalInfo(res);
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
                <BarChart key={type === 'default' ? 'default-bar' : 'stacked-bar'} options={type === 'default' ? barOptions : stackedBarOptions} data={additionalInfo ?? data} isLoading={isLoading} />
            </main>
        </>
    );
}
