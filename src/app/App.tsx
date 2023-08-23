import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import BaseLayout from 'layout/BaseLayout';
import BarChartDemo from 'pages/chartjs/BarChartDemo';
import BubbleChartDemo from 'pages/chartjs/BubbleChartDemo';

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
