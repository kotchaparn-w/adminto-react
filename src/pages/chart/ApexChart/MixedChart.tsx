import Chart from 'react-apexcharts';
import { Card, Dropdown } from 'react-bootstrap';
import { ApexOptions } from 'apexcharts';

// Mixed chart
const MixedChart = () => {
    // default options
    const apexMixedOpts: ApexOptions = {
        chart: {
            height: 380,
            type: 'line',
            stacked: false,
            toolbar: {
                show: false,
            },
        },
        stroke: {
            width: [0, 2, 4],
            curve: 'smooth',
        },
        plotOptions: {
            bar: {
                columnWidth: '50%',
            },
        },
        colors: ['#35b8e0', '#39afd1', '#ff5b5b'],
        fill: {
            opacity: [0.85, 0.25, 1],
            gradient: {
                inverseColors: false,
                shade: 'light',
                type: 'vertical',
                opacityFrom: 0.85,
                opacityTo: 0.55,
                stops: [0, 100, 100, 100],
            },
        },
        labels: [
            '01/01/2003',
            '02/01/2003',
            '03/01/2003',
            '04/01/2003',
            '05/01/2003',
            '06/01/2003',
            '07/01/2003',
            '08/01/2003',
            '09/01/2003',
            '10/01/2003',
            '11/01/2003',
        ],
        markers: {
            size: 0,
        },
        legend: {
            offsetY: -10,
        },
        xaxis: {
            type: 'datetime',
        },
        yaxis: {
            title: {
                text: 'Points',
            },
        },
        tooltip: {
            shared: true,
            intersect: false,
            y: {
                formatter: function (y) {
                    if (typeof y !== 'undefined') {
                        return y.toFixed(0) + ' points';
                    }
                    return y;
                },
            },
        },
        grid: {
            borderColor: '#f7f7f7',
        },
    };

    // chart data
    const apexMixedData = [
        {
            name: 'Team A',
            type: 'column',
            data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
        },
        {
            name: 'Team B',
            type: 'area',
            data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
        },
        {
            name: 'Team C',
            type: 'line',
            data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
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
                <h4 className="header-title mb-3">Line, Bar and Area (Mixed)</h4>
                <Chart
                    options={apexMixedOpts}
                    series={apexMixedData}
                    type="line"
                    height={320}
                    className="apex-charts"
                />
            </Card.Body>
        </Card>
    );
};

export default MixedChart;
