import Chart from 'react-apexcharts';
import { Card, Dropdown } from 'react-bootstrap';
import { ApexOptions } from 'apexcharts';

// SplineAreaChart
const SplineAreaChart = () => {
    // default options
    const apexAreaChart1Opts: ApexOptions = {
        chart: {
            height: 380,
            type: 'area',
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            width: 3,
            curve: 'smooth',
        },
        colors: ['#35b8e0', '#98a6ad'],
        legend: {
            offsetY: -10,
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        },
        tooltip: {
            fixed: {
                enabled: false,
                position: 'topRight',
            },
        },
        grid: {
            row: {
                colors: ['transparent', 'transparent'], // takes an array which will be repeated on columns
                opacity: 0.2,
            },
            borderColor: '#f7f7f7',
        },
    };

    // chart data
    const apexAreaChart1Data = [
        {
            name: 'Series 1',
            data: [31, 40, 28, 51, 42, 109, 100],
        },
        {
            name: 'Series 2',
            data: [11, 32, 45, 32, 34, 52, 41],
        },
    ];

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
                <h4 className="header-title mb-3">Spline Area</h4>
                <Chart options={apexAreaChart1Opts} series={apexAreaChart1Data} type="area" className="apex-charts" />
            </Card.Body>
        </Card>
    );
};

export default SplineAreaChart;
