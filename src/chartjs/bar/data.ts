import { COLORS, COLOR_LIST, DATA_LABELS, LABELS, getRandom } from '../common';

import type { BarChartData } from './types';

const createDatasets = (index: number) =>
    Array.from({ length: index }).map((_, idx) => ({
        label: DATA_LABELS[idx],
        data: LABELS.map(() => getRandom(1000, 0)),
        backgroundColor: COLORS[idx]
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
        label: DATA_LABELS[idx],
        data: LABELS.map(() => getRandom(1000, 0)),
        backgroundColor: randomColors[idx]
    }));
};

export const getDataList = async ({ index = 3, delay = 1000, isColorChange = false }): Promise<BarChartData> => {
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
