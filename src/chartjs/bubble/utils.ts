import { COLORS, COLOR_LIST, getRandom } from 'chartjs/common';

import type { BubbleChartData } from './types';

const createDatasets = (index: number) =>
    Array.from({ length: index }).map((_, idx) => ({
        label: `202${idx}년`,
        data: Array.from({ length: 50 }, () => ({
            x: getRandom(100, -100),
            y: getRandom(100, -100),
            r: getRandom(20, 5)
        })),
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
        label: `202${idx}년`,
        data: Array.from({ length: 50 }, () => ({
            x: getRandom(100, -100),
            y: getRandom(100, -100),
            r: getRandom(20, 5)
        })),
        backgroundColor: randomColors[idx]
    }));
};

export const getDataList = async ({ index = 3, delay = 1000, isColorChange = false }): Promise<BubbleChartData> => {
    let datasets = createDatasets(index);

    if (isColorChange) {
        datasets = createRandomDatasets(index);
    }

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ datasets });
        }, delay);
    });
};
