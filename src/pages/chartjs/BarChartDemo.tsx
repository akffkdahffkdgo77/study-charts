import { useState } from 'react';

import Button from 'components/Button';
import useFetch from 'hooks/useFetch';
import Header from 'layout/Header';

import BarChart, { BarChartData, barOptions, getDataList, stackedBarOptions } from 'chartjs/bar';

export default function BarChartDemo() {
    const { data, isLoading } = useFetch<BarChartData>(() => getDataList({}));

    const [type, setType] = useState<'stacked' | 'default'>('default');
    const [index, setIndex] = useState(3);
    const [additionalInfo, setAdditionalInfo] = useState<BarChartData>();

    const handleAdditionalInfo = () => {
        if (index < 8) {
            setIndex((prev) => prev + 1);
            getDataList({ index: index + 1, delay: 100 }).then((res) => {
                setAdditionalInfo(res);
            });
        } else {
            alert('데이터가 없습니다...!');
        }
    };

    const handleColorChange = () => {
        getDataList({ index, delay: 100, isColorChange: true }).then((res) => {
            setAdditionalInfo(res);
        });
    };

    const handleTypeChange = () => {
        setType((prev) => (prev === 'default' ? 'stacked' : 'default'));
    };

    return (
        <>
            <Header>
                <Button text="Add Data" onClick={handleAdditionalInfo} />
                <Button text="Change Colors" onClick={handleColorChange} />
                <Button text={`Change Type : ${type === 'stacked' ? 'Stacked' : 'Bar'}`} onClick={handleTypeChange} />
            </Header>
            <main className="flex h-screen items-center justify-center pt-20">
                <BarChart key={type === 'default' ? 'default-bar' : 'stacked-bar'} options={type === 'default' ? barOptions : stackedBarOptions} data={additionalInfo ?? data} isLoading={isLoading} />
            </main>
        </>
    );
}
