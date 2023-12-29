import { ChartData } from 'chart.js';

import type { BaseProps } from '../common/types';

export type BarChartData = ChartData<'bar', number[], string>;

export interface Props extends BaseProps {
    data?: BarChartData;
}
