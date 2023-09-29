import Chart from 'react-apexcharts';
import { Card, Dropdown } from 'react-bootstrap';
import { ApexOptions } from 'apexcharts';

// simple pie chart
const PieChart = () => {
    // default options
    const apexDonutOpts: ApexOptions = {
        chart: {
            height: 320,
            type: 'pie',
        },
        labels: ['Series 1', 'Series 2', 'Series 3', 'Series 4', 'Series 5'],
        colors: ['#35b8e0', '#98a6ad', '#10c469', '#ff5b5b', '#f9c851'],
        legend: {
            show: true,
            position: 'bottom',
            horizontalAlign: 'center',
            floating: false,
            fontSize: '14px',
            offsetX: 0,
            offsetY: -10,
        },
        responsive: [
            {
                breakpoint: 600,
                options: {
                    chart: {
                        height: 240,
                    },
                    legend: {
                        show: false,
                    },
                },
            },
        ],
    };

    // chart data
    const apexDonutData = [44, 55, 41, 17, 15];

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
                <h4 className="header-title mb-3">Pie Chart</h4>
                <Chart options={apexDonutOpts} series={apexDonutData} type="pie" height={320} className="apex-charts" />
            </Card.Body>
        </Card>
    );
};

export default PieChart;
