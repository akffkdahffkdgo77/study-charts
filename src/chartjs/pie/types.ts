import { ChartData } from 'chart.js';

import { BaseProps } from '../common';

export type DonutChartData = ChartData<'doughnut', number[], unknown>;
export type PieChartData = ChartData<'pie', number[], unknown>;
export interface Props extends BaseProps {
    data?: DonutChartData;
}

export interface PieProps extends BaseProps {
    data?: PieChartData;
}
