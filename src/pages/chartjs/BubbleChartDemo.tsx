import { useState } from 'react';

import Button from 'components/Button';
import useFetch from 'hooks/useFetch';
import Header from 'layout/Header';

import BubbleChart, { BubbleChartData, bubbleOptions, getDataList } from 'chartjs/bubble';

export default function BubbleChartDemo() {
    const { data, isLoading } = useFetch<BubbleChartData>(() => getDataList({}));

    const [index, setIndex] = useState(3);
    const [addInfo, setAddInfo] = useState<BubbleChartData>();

    const handleAdditionalInfo = () => {
        if (index < 8) {
            setIndex((prev) => prev + 1);
            getDataList({ index: index + 1, delay: 100 }).then((res) => {
                setAddInfo(res);
            });
        } else {
            alert('데이터가 없습니다...!');
        }
    };

    const handleColorChange = () => {
        getDataList({ index, delay: 100, isColorChange: true }).then((res) => {
            setAddInfo(res);
        });
    };

    const handleShuffle = () => {
        getDataList({ index, delay: 100, isColorChange: false }).then((res) => {
            setAddInfo(res);
        });
    };

    return (
        <>
            <Header>
                <Button text="Shuffle" onClick={handleShuffle} />
                <Button text="Add Data" onClick={handleAdditionalInfo} />
                <Button text="Change Colors" onClick={handleColorChange} />
            </Header>
            <main className="flex h-screen items-center justify-center pt-20">
                <BubbleChart options={bubbleOptions} data={addInfo ?? data} isLoading={isLoading} />
            </main>
        </>
    );
}
