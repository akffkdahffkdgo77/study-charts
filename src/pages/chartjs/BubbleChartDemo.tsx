import { useState } from 'react';

import useFetch from 'hooks/useFetch';

import BubbleChart, { BubbleChartData, bubbleOptions, getDataList } from 'chartjs/bubble';

export default function BubbleChartDemo() {
    const { data, isLoading } = useFetch<BubbleChartData>(() => getDataList({}));

    const [index, setIndex] = useState(3);
    const [addInfo, setAddInfo] = useState<BubbleChartData>();

    const handleAdditionalInfo = () => {
        if (index < 8) {
            setIndex((prev) => prev + 1);
            getDataList({
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
        getDataList({
            index,
            delay: 100,
            isColorChange: true
        }).then((res) => {
            setAddInfo(res);
        });
    };

    const handleShuffle = () => {
        getDataList({
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
                <BubbleChart options={bubbleOptions} data={addInfo ?? data} isLoading={isLoading} />
            </main>
        </>
    );
}
