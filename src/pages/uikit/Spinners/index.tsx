import { Col, Row } from 'react-bootstrap';

// hooks
import { usePageTitle } from '../../../hooks';

// component
import BorderedSpinners from './BorderSpinners';
import GrowingSpinners from './GrowingSpinners';
import ColorBorderSpinners from './ColorBorderSpinners';
import ColorGrowingSpinners from './ColorGrowingSpinners copy';
import AlignmentSpinners from './AlignmentSpinners';
import SpinnerPlacements from './SpinnersPlacement';
import SpinnersSizes from './SpinnersSize';
import ButtonSpinners from './ButtonSpinners';

const Spinners = () => {
    // set pagetitle
    usePageTitle({
        title: 'Spinners',
        breadCrumbItems: [
            {
                path: '/base-ui/spinners',
                label: 'Base UI',
            },
            {
                path: '/base-ui/spinners',
                label: 'Spinners',
                active: true,
            },
        ],
    });

    return (
        <>
            <Row>
                <Col lg={6}>
                    <BorderedSpinners />
                </Col>
                <Col lg={6}>
                    <GrowingSpinners />
                </Col>
            </Row>
            <Row>
                <Col lg={6}>
                    <ColorBorderSpinners />
                </Col>
                <Col lg={6}>
                    <ColorGrowingSpinners />
                </Col>
            </Row>
            <Row>
                <Col lg={6}>
                    <AlignmentSpinners />
                </Col>
                <Col lg={6}>
                    <SpinnerPlacements />
                </Col>
            </Row>
            <Row>
                <Col lg={6}>
                    <SpinnersSizes />
                </Col>
                <Col lg={6}>
                    <ButtonSpinners />
                </Col>
            </Row>
        </>
    );
};

export default Spinners;
