import Chart from 'react-apexcharts';
import { Card, Dropdown } from 'react-bootstrap';
import { ApexOptions } from 'apexcharts';

// simple bar chart
const BarChart = () => {
    // default options
    const apexBarChartOpts: ApexOptions = {
        chart: {
            height: 380,
            type: 'bar',
            toolbar: {
                show: false,
            },
        },
        plotOptions: {
            bar: {
                horizontal: false,
                dataLabels: {
                    position: 'top',
                },
            },
        },
        dataLabels: {
            enabled: true,
            offsetX: -6,
            style: {
                fontSize: '12px',
                colors: ['#fff'],
            },
        },
        colors: ['#ff5b5b', '#98a6ad'],
        stroke: {
            show: true,
            width: 1,
            colors: ['#fff'],
        },

        xaxis: {
            categories: [2001, 2002, 2003, 2004, 2005, 2006, 2007],
        },
        legend: {
            offsetY: -10,
        },
        states: {
            hover: {
                filter: {
                    type: 'none',
                },
            },
        },
        grid: {
            borderColor: '#f7f7f7',
        },
    };

    // chart data
    const apexBarChartData = [
        {
            name: 'Series 1',
            data: [44, 55, 41, 64, 22, 43, 21],
        },
        {
            name: 'Series 2',
            data: [53, 32, 33, 52, 13, 44, 32],
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
                <h4 className="header-title mb-3">Bar Chart</h4>
                <Chart options={apexBarChartOpts} series={apexBarChartData} type="bar" className="apex-charts" />
            </Card.Body>
        </Card>
    );
};

export default BarChart;
