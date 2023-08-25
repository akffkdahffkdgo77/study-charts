import { BORDER_COLORS, COLORS4, COLOR_LIST, getRandom } from 'chartjs/common';

import type { DonutChartData } from './types';

let prevColorIndex = 0;
const createRandomColors = () => {
    let newColorIndex = getRandom(3, 0);
    while (prevColorIndex === newColorIndex) {
        newColorIndex = getRandom(3, 0);
    }
    prevColorIndex = newColorIndex;
    return COLOR_LIST[newColorIndex];
};

export const getDataList = async ({ index = 1, delay = 1000, isColorChange = false }): Promise<DonutChartData> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                labels: ['February', 'April', 'June', 'August', 'October', 'December'].slice(0, index),
                datasets: [
                    {
                        label: '월별 현황',
                        data: Array.from(Array(index)).map(() => getRandom(20, 5)),
                        backgroundColor: isColorChange ? createRandomColors().slice(0, index) : COLORS4.slice(0, index),
                        borderColor: BORDER_COLORS.slice(0, index),
                        borderWidth: 1
                    }
                ]
            });
        }, delay);
    });
};
