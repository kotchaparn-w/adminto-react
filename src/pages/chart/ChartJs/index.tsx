import { Col, Row } from 'react-bootstrap';

// hooks
import { usePageTitle } from '../../../hooks';

// component
import LineChart from './LineChart';
import BarChart from './BarChart';
import PieChart from './PieChart';
import DonutChart from './DonutChart';
import RadarChart from './RadarChart';
import PolarChart from './PolarChart';

const ChartJs = () => {
    // set pagetitle
    usePageTitle({
        title: 'Chartjs Charts',
        breadCrumbItems: [
            {
                label: 'Charts',
                path: '/charts/chartjs',
            },
            {
                label: 'Chartjs Charts',
                path: '/charts/chartjs',
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
                    <BarChart />
                </Col>
            </Row>

            <Row>
                <Col xl={6}>
                    <PieChart />
                </Col>
                <Col xl={6}>
                    <DonutChart />
                </Col>
            </Row>

            <Row>
                <Col xl={6}>
                    <PolarChart />
                </Col>
                <Col xl={6}>
                    <RadarChart />
                </Col>
            </Row>
        </>
    );
};

export default ChartJs;
