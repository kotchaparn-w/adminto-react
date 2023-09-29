import { Col, Row } from 'react-bootstrap';

// hooks
import { usePageTitle } from '../../../hooks';

// component
import LineChart from './LineChart';
import LineAnnotationChart from './LineAnomationChart';
import SplineAreaChart from './SplineChart';
import StackedAreaChart from './StackedAreaChart';
import BarChart from './BarChart';
import StackedBarChart from './StackedBarChart';
import DonutChart from './DonutChart';
import PieChart from './PieChart';
import MixedChart from './MixedChart';

const ApexChart = () => {
    // set pagetitle
    usePageTitle({
        title: 'Apex Charts',
        breadCrumbItems: [
            {
                label: 'Charts',
                path: '/charts/apex',
            },
            {
                label: 'Apex Charts',
                path: '/charts/apex',
                active: true,
            },
        ],
    });

    return (
        <>
            <Row>
                <Col xl={6}>
                    <LineChart />
                </Col>
                <Col xl={6}>
                    <LineAnnotationChart />
                </Col>
            </Row>
            <Row>
                <Col xl={6}>
                    <SplineAreaChart />
                </Col>
                <Col xl={6}>
                    <StackedAreaChart />
                </Col>
            </Row>
            <Row>
                <Col xl={6}>
                    <BarChart />
                </Col>
                <Col xl={6}>
                    <StackedBarChart />
                </Col>
            </Row>
            <Row>
                <Col xl={6}>
                    <DonutChart />
                </Col>
                <Col xl={6}>
                    <PieChart />
                </Col>
            </Row>
            <Row>
                <Col xl={6}>
                    <MixedChart />
                </Col>
            </Row>
        </>
    );
};

export default ApexChart;
