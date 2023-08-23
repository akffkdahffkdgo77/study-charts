import { ChartData } from 'chart.js';

import { colorList, colors } from 'chartjs/config/styles';

function getRandom(max: number, min: number) {
    return Math.floor(Math.random() * (max - min) + min);
}

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const dataLabels = ['Channel', 'Gucci', 'Prada', 'MiuMiu', 'Hermes', 'Cartier', 'Dior', 'Burberry'];

const createDatasets = (index: number) =>
    Array.from({ length: index }).map((_, idx) => ({
        label: dataLabels[idx],
        data: labels.map(() => getRandom(1000, 0)),
        backgroundColor: colors[idx]
    }));

let prevColorIndex = 0;
const createRandomDatasets = (index: number) => {
    let newColorIndex = getRandom(3, 0);
    while (prevColorIndex === newColorIndex) {
        newColorIndex = getRandom(3, 0);
    }
    prevColorIndex = newColorIndex;

    const randomColors = colorList[newColorIndex];
    return Array.from({ length: index }).map((_, idx) => ({
        label: dataLabels[idx],
        data: labels.map(() => getRandom(1000, 0)),
        backgroundColor: randomColors[idx]
    }));
};

export type BarChartData = ChartData<'bar', number[], string>;
const getBarList = async ({ index = 3, delay = 1000, isColorChange = false }): Promise<BarChartData> => {
    let datasets = createDatasets(index);

    if (isColorChange) {
        datasets = createRandomDatasets(index);
    }

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ labels, datasets });
        }, delay);
    });
};

export default getBarList;
