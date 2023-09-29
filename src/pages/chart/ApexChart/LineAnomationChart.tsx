import Chart from 'react-apexcharts';
import { Card, Dropdown } from 'react-bootstrap';
import { ApexOptions } from 'apexcharts';

// line chart with annotations
const LineAnnotationChart = () => {
    // default options
    const apexLineChartWithAnnotationOpts: ApexOptions = {
        annotations: {
            yaxis: [
                {
                    y: 8200,
                    borderColor: '#10c469',
                    label: {
                        borderColor: '#10c469',
                        style: {
                            color: '#fff',
                            background: '#10c469',
                        },
                        text: 'Support',
                    },
                },
            ],
            xaxis: [
                {
                    x: new Date('23 Nov 2017').getTime(),
                    borderColor: '#5b69bc',
                    label: {
                        borderColor: '#5b69bc',
                        style: {
                            color: '#fff',
                            background: '#5b69bc',
                        },
                        text: 'Anno Test',
                    },
                },
                {
                    x: new Date('03 Dec 2017').getTime(),
                    borderColor: '#f9c851',
                    label: {
                        borderColor: '#f9c851',
                        style: {
                            color: '#fff',
                            background: '#f9c851',
                        },
                        orientation: 'horizontal',
                        text: 'New Beginning',
                    },
                },
            ],
            points: [
                {
                    x: new Date('27 Nov 2017').getTime(),
                    y: 8506.9,
                    marker: {
                        size: 8,
                        fillColor: '#fff',
                        strokeColor: '#ff5b5b',
                        radius: 2,
                    },
                    label: {
                        borderColor: '#ff5b5b',
                        offsetY: 0,
                        style: {
                            color: '#fff',
                            background: '#ff5b5b',
                        },

                        text: 'Point Annotation',
                    },
                },
            ],
        },
        chart: {
            height: 380,
            type: 'line',
            id: 'areachart-2',
        },
        labels: [
            '13 Nov 2017',
            '14 Nov 2017',
            '15 Nov 2017',
            '16 Nov 2017',
            '17 Nov 2017',
            '20 Nov 2017',
            '21 Nov 2017',
            '22 Nov 2017',
            '23 Nov 2017',
            '24 Nov 2017',
            '27 Nov 2017',
            '28 Nov 2017',
            '29 Nov 2017',
            '30 Nov 2017',
            '01 Dec 2017',
            '04 Dec 2017',
            '05 Dec 2017',
            '06 Dec 2017',
            '07 Dec 2017',
            '08 Dec 2017',
        ],
        colors: ['#39afd1'],
        dataLabels: {
            enabled: false,
        },
        stroke: {
            width: [3],
            curve: 'straight',
        },
        title: {
            text: 'Line with Annotations',
            align: 'left',
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
                    legend: {
                        show: false,
                    },
                },
            },
        ],
    };

    // chart data
    const apexLineChartWithAnnotationData = [
        {
            name: 'Prices',
            data: [
                8107.85, 8128, 8122.9, 8165.5, 8340.7, 8423.7, 8423.5, 8514.3, 8481.85, 8487.7, 8506.9, 8626.2, 8668.95,
                8602.3, 8607.55, 8512.9, 8496.25, 8600.65, 8881.1, 9340.85,
            ],
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
                <h4 className="header-title mb-3">Line Chart with Annotations</h4>
                <Chart
                    options={apexLineChartWithAnnotationOpts}
                    series={apexLineChartWithAnnotationData}
                    type="line"
                    className="apex-charts"
                />
            </Card.Body>
        </Card>
    );
};

export default LineAnnotationChart;
