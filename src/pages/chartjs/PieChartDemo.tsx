import { useState } from 'react';

import useFetch from 'hooks/useFetch';

import { PieChart, pieOptions, getDataList } from 'chartjs/pie';
import type { PieChartData } from 'chartjs/pie/types';

export default function PieChartDemo() {
    const { data, isLoading } = useFetch<PieChartData>(() => getDataList({}));

    const [index, setIndex] = useState(1);
    const [addInfo, setAddInfo] = useState<PieChartData>();

    const handleAdditionalInfo = () => {
        if (index < 6) {
            setIndex((prev) => prev + 1);
            getDataList<PieChartData>({
                index: index + 1,
                delay: 100
            }).then((res) => {
                setAddInfo(res);
            });
        } else {
            alert('데이터가 없습니다...!');
        }
    };

    const handleColorChange = () => {
        getDataList<PieChartData>({
            index,
            delay: 100,
            isColorChange: true
        }).then((res) => {
            setAddInfo(res);
        });
    };

    const handleShuffle = () => {
        getDataList<PieChartData>({
            index,
            delay: 100,
            isColorChange: false
        }).then((res) => {
            setAddInfo(res);
        });
    };

    return (
        <>
            <header className="flex w-full items-center justify-between p-5">
                <h1 className="text-4xl font-bold">Study Charts</h1>
                <div className="flex items-center gap-2.5">
                    <button type="button" onClick={handleShuffle} className="rounded-md border border-black p-1">
                        Shuffle
                    </button>
                    <button type="button" onClick={handleAdditionalInfo} className="rounded-md border border-black p-1">
                        Add Data
                    </button>
                    <button type="button" onClick={handleColorChange} className="rounded-md border border-black p-1">
                        Change Colors
                    </button>
                </div>
            </header>
            <main>
                <PieChart options={pieOptions} data={addInfo ?? data} isLoading={isLoading} />
            </main>
        </>
    );
}
