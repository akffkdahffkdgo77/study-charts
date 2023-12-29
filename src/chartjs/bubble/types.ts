import { ChartData } from 'chart.js';

import type { BaseProps } from '../common/types';

export type BubbleChartData = ChartData<'bubble', { x: number; y: number; r: number }[], unknown>;

export interface Props extends BaseProps {
    data?: BubbleChartData;
}
