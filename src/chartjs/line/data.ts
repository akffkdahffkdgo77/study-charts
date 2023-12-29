import { COLORS, COLOR_LIST, LABELS, getRandom } from '../common';

import type { LineChartData } from './types';

const createDatasets = (index: number) =>
    Array.from({ length: index }).map((_, idx) => ({
        label: `202${idx}년`,
        data: Array.from(Array(12)).map(() => getRandom(500, 50)),
        backgroundColor: COLORS[idx],
        borderColor: COLORS[idx]
    }));

let prevColorIndex = 0;
const createRandomDatasets = (index: number) => {
    let newColorIndex = getRandom(3, 0);
    while (prevColorIndex === newColorIndex) {
        newColorIndex = getRandom(3, 0);
    }
    prevColorIndex = newColorIndex;

    const randomColors = COLOR_LIST[newColorIndex];
    return Array.from({ length: index }).map((_, idx) => ({
        label: `202${idx}년`,
        data: Array.from(Array(12)).map(() => getRandom(500, 50)),
        backgroundColor: randomColors[idx],
        borderColor: randomColors[idx]
    }));
};

export const getDataList = async ({ index = 3, delay = 1000, isColorChange = false }): Promise<LineChartData> => {
    let datasets = createDatasets(index);

    if (isColorChange) {
        datasets = createRandomDatasets(index);
    }

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ labels: LABELS, datasets });
        }, delay);
    });
};
