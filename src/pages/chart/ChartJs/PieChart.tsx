import { Pie } from 'react-chartjs-2';
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

const PieChart = () => {
    // chart data
    const donutChartData = {
        labels: ['Desktops', 'Tablets', 'Mobiles'],
        datasets: [
            {
                fill: true,
                data: [300, 50, 100],
                backgroundColor: ['#ff8acc', '#5b69bc', '#f9c851'],
                borderColor: '#fff',
            },
        ],
    };

    // default options
    const donutChartOpts = {
        maintainAspectRatio: false,
        cutoutPercentage: 800,
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
                <h4 className="header-title">Pie Chart</h4>
                <div className="mt-4 chartjs-chart" style={{ height: '350px' }}>
                    <Pie data={donutChartData} options={donutChartOpts} />
                </div>
            </Card.Body>
        </Card>
    );
};

export default PieChart;
