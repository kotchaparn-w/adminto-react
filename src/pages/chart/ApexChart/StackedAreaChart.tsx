import Chart from 'react-apexcharts';
import { Card, Dropdown } from 'react-bootstrap';
import { ApexOptions } from 'apexcharts';

// StackedAreaChart
const StackedAreaChart = () => {
    // default options
    const apexAreaChart2Opts: ApexOptions = {
        chart: {
            height: 422,
            type: 'area',
            stacked: true,
            events: {
                selection: (chart, e) => {
                    console.log(new Date(e.xaxis.min));
                },
            },
        },
        colors: ['#35b8e0', '#10c469', '#98a6ad'],
        dataLabels: {
            enabled: false,
        },
        stroke: {
            width: 2,
            curve: 'smooth',
        },
        fill: {
            gradient: {
                opacityFrom: 0.6,
                opacityTo: 0.8,
            },
        },
        legend: {
            position: 'top',
            horizontalAlign: 'left',
        },
        xaxis: {
            type: 'datetime',
        },
        grid: {
            row: {
                colors: ['transparent', 'transparent'], // takes an array which will be repeated on columns
                opacity: 0.2,
            },
            borderColor: '#f7f7f7',
        },
        responsive: [
            {
                breakpoint: 600,
                options: {
                    chart: {
                        toolbar: {
                            show: false,
                        },
                    },
                },
            },
        ],
    };

    /*
     * generate day wise time series
     */
    const generateDayWiseTimeSeries = (baseval: number, count: number, yrange: { min: number; max: number }) => {
        var i = 0;
        var series = [];
        while (i < count) {
            var x = baseval;
            var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

            series.push([x, y]);
            baseval += 86400000;
            i++;
        }
        return series;
    };

    // chart data
    const apexAreaChart2Data = [
        {
            name: 'South',
            data: generateDayWiseTimeSeries(new Date('11 Feb 2017').getTime(), 20, {
                min: 10,
                max: 60,
            }),
        },
        {
            name: 'North',
            data: generateDayWiseTimeSeries(new Date('11 Feb 2017').getTime(), 20, {
                min: 10,
                max: 20,
            }),
        },

        {
            name: 'Central',
            data: generateDayWiseTimeSeries(new Date('11 Feb 2017').getTime(), 20, {
                min: 10,
                max: 15,
            }),
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
                <h4 className="header-title mb-3">Stacked Area</h4>
                <Chart options={apexAreaChart2Opts} series={apexAreaChart2Data} type="area" className="apex-charts" />
            </Card.Body>
        </Card>
    );
};

export default StackedAreaChart;
