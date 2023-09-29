import { Col, Row } from 'react-bootstrap';

// hooks
import { usePageTitle } from '../../../hooks';

// component
import DefaultSlides from './DefaultSlides';
import SlidesWithControls from './SlideWithControls';
import SlidesWithIndicators from './SlideWithIndicators';
import SlidesWithCaptions from './SlideWithCaptions';
import CrossFade from './Crossfade';
import IndividualInterval from './IndividualInterval';

const Carousel = () => {
    // set pagetitle
    usePageTitle({
        title: 'Carousel',
        breadCrumbItems: [
            {
                path: '/base-ui/carousel',
                label: 'Base UI',
            },
            {
                path: '/base-ui/carousel',
                label: 'Carousel',
                active: true,
            },
        ],
    });

    return (
        <>
            <Row>
                <Col lg={6}>
                    <DefaultSlides />
                </Col>
                <Col lg={6}>
                    <SlidesWithControls />
                </Col>
            </Row>
            <Row>
                <Col lg={6}>
                    <SlidesWithIndicators />
                </Col>
                <Col lg={6}>
                    <SlidesWithCaptions />
                </Col>
            </Row>
            <Row>
                <Col lg={6}>
                    <CrossFade />
                </Col>
                <Col lg={6}>
                    <IndividualInterval />
                </Col>
            </Row>
        </>
    );
};

export default Carousel;
