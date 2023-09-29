import { PolarArea } from 'react-chartjs-2';
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

const PolarChart = () => {
    // chart data
    const polarChartData = {
        labels: ['Series 1', 'Series 2', 'Series 3', 'Series 4', 'Series 5'],
        datasets: [
            {
                label: 'My First Dataset',
                data: [11, 16, 7, 3, 14],
                backgroundColor: ['#ff8acc', '#5b69bc', '#f9c851', '#ced4da', '#10c469'],
            },
        ],
    };

    // default options
    const polarChartOpts = {
        maintainAspectRatio: false,
        scales: {
            r: {
                ticks: {
                    backdropColor: 'transparent',
                },
                angleLines: {
                    color: 'rgba(150, 150, 150, 0.1)', // lines radiating from the center
                },
                grid: {
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
                <h4 className="header-title">Polar area Chart</h4>
                <div className="mt-4 chartjs-chart" style={{ height: '350px' }}>
                    <PolarArea data={polarChartData} options={polarChartOpts} />
                </div>
            </Card.Body>
        </Card>
    );
};

export default PolarChart;
