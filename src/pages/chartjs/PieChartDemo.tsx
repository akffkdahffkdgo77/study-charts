import { useState } from 'react';

import { PieChart, pieOptions, getDataList } from '@chartjs/pie';
import type { PieChartData } from '@chartjs/pie/types';

import Button from '@components/Button';
import Header from '@layout/Header';

import useFetch from '@hooks/useFetch';

export default function PieChartDemo() {
    const { data, isLoading } = useFetch<PieChartData>(() => getDataList({}));

    const [index, setIndex] = useState(1);
    const [addInfo, setAddInfo] = useState<PieChartData>();

    const handleAdditionalInfo = () => {
        if (index < 6) {
            setIndex((prev) => prev + 1);
            getDataList<PieChartData>({ index: index + 1, delay: 100 }).then((res) => {
                setAddInfo(res);
            });
        } else {
            alert('데이터가 없습니다...!');
        }
    };

    const handleColorChange = () => {
        getDataList<PieChartData>({ index, delay: 100, isColorChange: true }).then((res) => {
            setAddInfo(res);
        });
    };

    const handleShuffle = () => {
        getDataList<PieChartData>({ index, delay: 100, isColorChange: false }).then((res) => {
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
                <PieChart options={pieOptions} data={addInfo ?? data} isLoading={isLoading} />
            </main>
        </>
    );
}
