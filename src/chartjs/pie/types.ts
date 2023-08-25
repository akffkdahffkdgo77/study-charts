import { ChartData } from 'chart.js';

import { BaseProps } from 'chartjs/common';

export type DonutChartData = ChartData<'doughnut', number[], unknown>;

export interface Props extends BaseProps {
    data?: DonutChartData;
}
