import { ChartData, Point } from 'chart.js';

import type { BaseProps } from 'chartjs/common';

export type LineChartData = ChartData<'line', (number | Point | null)[], unknown>;

export interface Props extends BaseProps {
    data?: LineChartData;
}
