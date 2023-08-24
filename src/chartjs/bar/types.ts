import { ChartData } from 'chart.js';

import type { BaseProps } from 'chartjs/common/types';

export type BarChartData = ChartData<'bar', number[], string>;

export interface Props extends BaseProps {
    data?: BarChartData;
}
