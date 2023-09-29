import { Radar } from 'react-chartjs-2';
import { Card, Dropdown } from 'react-bootstrap';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    RadialLinearScale,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, RadialLinearScale, Title, Tooltip, Legend);

const RadarChart = () => {
    // chart data
    const radarChartData = {
        labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
        datasets: [
            {
                label: 'Desktops',
                backgroundColor: 'rgba(81,83,85, 0.3)',
                borderColor: '#ced4da',
                pointBackgroundColor: '#ced4da',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: '#ced4da',
                data: [65, 59, 90, 81, 56, 55, 40],
            },
            {
                label: 'Tablets',
                backgroundColor: 'rgba(246,114,167,0.3)',
                borderColor: '#f672a7',
                pointBackgroundColor: '#f672a7',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: '#f672a7',
                data: [28, 48, 40, 19, 96, 27, 100],
            },
        ],
    };

    // default options
    const radarChartOpts = {
        maintainAspectRatio: false,
        scales: {
            r: {
                ticks: {
                    backdropColor: 'transparent',
                },
                grid: {
                    color: 'rgba(150, 150, 150, 0.1)',
                },
                angleLines: {
                    color: 'rgba(150, 150, 150, 0.1)',
                },
            },
        },
    };

    return (
        <Card>
            <Card.Body>
                <Dropdown className="float-end" align="end">
                    <Dropdown.Toggle as="a" className="cursor-pointer card-drop">
                        <i className="mdi mdi-dots-vertical"></i>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item>Action</Dropdown.Item>
                        <Dropdown.Item>Anothther Action</Dropdown.Item>
                        <Dropdown.Item>Something Else</Dropdown.Item>
                        <Dropdown.Item>Separated link</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <h4 className="header-title mb-3">Radar Chart</h4>
                <div className="mt-4 chartjs-chart" style={{ height: '350px' }}>
                    <Radar data={radarChartData} options={radarChartOpts} />
                </div>
            </Card.Body>
        </Card>
    );
};

export default RadarChart;
