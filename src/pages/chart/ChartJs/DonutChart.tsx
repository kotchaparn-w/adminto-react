import { Doughnut } from 'react-chartjs-2';
import { Card, Dropdown } from 'react-bootstrap';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    ArcElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, ArcElement, Title, Tooltip, Legend);

const DonutChart = () => {
    // chart data
    const donutChartData = {
        labels: ['Direct', 'Affilliate', 'Sponsored'],
        datasets: [
            {
                fill: true,
                data: [300, 50, 100],
                backgroundColor: ['#71b6f9', '#10c469', '#f9c851'],
                borderColor: '#fff',
            },
        ],
    };

    // default options
    const donutChartOpts = {
        maintainAspectRatio: false,
        cutout: '60%',
        plugins: {
            legend: {
                display: true,
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
                <h4 className="header-title">Donut Chart</h4>
                <div className="mt-4 chartjs-chart" style={{ height: '350px' }}>
                    <Doughnut data={donutChartData} options={donutChartOpts} />
                </div>
            </Card.Body>
        </Card>
    );
};

export default DonutChart;
