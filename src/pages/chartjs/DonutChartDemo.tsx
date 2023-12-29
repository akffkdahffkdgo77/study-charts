import { useState } from 'react';

import { DonutChart, pieOptions, getDataList } from '@chartjs/pie';
import type { DonutChartData } from '@chartjs/pie/types';

import Button from '@components/Button';
import Header from '@layout/Header';

import useFetch from '@hooks/useFetch';

export default function DonutChartDemo() {
    const { data, isLoading } = useFetch<DonutChartData>(() => getDataList({}));

    const [index, setIndex] = useState(1);
    const [addInfo, setAddInfo] = useState<DonutChartData>();

    const handleAdditionalInfo = () => {
        if (index < 6) {
            setIndex((prev) => prev + 1);
            getDataList<DonutChartData>({ index: index + 1, delay: 100 }).then((res) => {
                setAddInfo(res);
            });
        } else {
            alert('데이터가 없습니다...!');
        }
    };

    const handleColorChange = () => {
        getDataList<DonutChartData>({ index, delay: 100, isColorChange: true }).then((res) => {
            setAddInfo(res);
        });
    };

    const handleShuffle = () => {
        getDataList<DonutChartData>({ index, delay: 100, isColorChange: false }).then((res) => {
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
                <DonutChart options={pieOptions} data={addInfo ?? data} isLoading={isLoading} />
            </main>
        </>
    );
}
