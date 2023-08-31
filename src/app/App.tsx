import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import BaseLayout from 'layout/BaseLayout';
import BarChartDemo from 'pages/chartjs/BarChartDemo';
import BubbleChartDemo from 'pages/chartjs/BubbleChartDemo';
import DonutChartDemo from 'pages/chartjs/DonutChartDemo';
import LineChartDemo from 'pages/chartjs/LineChartDemo';
import PieChartDemo from 'pages/chartjs/PieChartDemo';

function App() {
    return (
        <RouterProvider
            router={createBrowserRouter([
                {
                    path: '',
                    element: <BaseLayout />,
                    children: [
                        {
                            path: 'chartjs',
                            children: [
                                {
                                    path: 'bar',
                                    element: <BarChartDemo />
                                },
                                {
                                    path: 'bubble',
                                    element: <BubbleChartDemo />
                                },
                                {
                                    path: 'line',
                                    element: <LineChartDemo />
                                },
                                {
                                    path: 'donut',
                                    element: <DonutChartDemo />
                                },
                                {
                                    path: 'pie',
                                    element: <PieChartDemo />
                                }
                            ]
                        }
                    ]
                }
            ])}
        />
    );
}

export default App;
