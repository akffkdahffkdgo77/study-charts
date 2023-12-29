import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import BaseLayout from 'layout/BaseLayout';
import { BarChartDemo, BubbleChartDemo, DonutChartDemo, LineChartDemo, PieChartDemo } from 'pages/ChartJS';

function App() {
    return (
        <RouterProvider
            router={createBrowserRouter([
                {
                    path: '',
                    element: <BaseLayout />,
                    children: [
                        {
                            path: '',
                            element: <BarChartDemo />
                        },
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
