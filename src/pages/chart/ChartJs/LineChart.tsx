import { Line } from 'react-chartjs-2';
import { Card, Dropdown } from 'react-bootstrap';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const LineChart = () => {
    // chart data
    const lineChartData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'Auguest', 'September  '],
        datasets: [
            {
                label: 'Sales Analytics',
                data: [65, 59, 80, 81, 56, 55, 40, 35, 30],
                fill: false,
                borderColor: '#10c469',
                tension: 0.1,
            },
        ],
    };

    // chart options
    const lineChartOpts = {
        bezierCurve: false,
        maintainAspectRatio: false,
        hover: {
            intersect: false,
        },
        plugins: {
            filler: {
                propagate: false,
            },
            legend: {
                display: true,
            },
            tooltip: {
                intersect: false,
            },
        },
        zeroLineColor: () => 'rgba(150, 150, 150, 0.9)',
        scales: {
            x: {
                display: true,
                grid: {
                    color: () => 'rgba(150, 150, 150, 0.1)',
                    drawBorder: false,
                },
            },
            y: {
                ticks: {
                    stepSize: 20,
                },
                display: true,
                borderDash: [5, 5],
                grid: {
                    color: () => 'rgba(0,0,0,0)',
                    drawBorder: false,
                    fontColor: '#fff',
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
                <h4 className="header-title">Line Chart</h4>
                <div style={{ height: '350px' }} className="mt-4 chartjs-chart">
                    <Line data={lineChartData} options={lineChartOpts} />
                </div>
            </Card.Body>
        </Card>
    );
};

export default LineChart;
