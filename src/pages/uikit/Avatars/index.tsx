import { Col, Row } from 'react-bootstrap';

// hooks
import { usePageTitle } from '../../../hooks';

// components
import ImageSizing from './ImageSizing';
import RoundedCircle from './RoundedCircle';
import BackGroundSizing from './BackGroundSizing';
import RoundedCircleBackGround from './RoundedCircleBackGround';
import ImageShapes from './ImageShapes';

const Avatars = () => {
    // set pagetitle
    usePageTitle({
        title: 'Avatars',
        breadCrumbItems: [
            {
                path: '/base-ui/avatars',
                label: 'Base UI',
            },
            {
                path: '/base-ui/avatars',
                label: 'Avatars',
                active: true,
            },
        ],
    });

    return (
        <>
            <Row>
                <Col xl={6}>
                    <ImageSizing />
                </Col>
                <Col xl={6}>
                    <RoundedCircle />
                </Col>
            </Row>
            <Row>
                <Col xl={6}>
                    <BackGroundSizing />
                </Col>
                <Col xl={6}>
                    <RoundedCircleBackGround />
                </Col>
            </Row>

            <Row>
                <Col xl={12}>
                    <ImageShapes />
                </Col>
            </Row>
        </>
    );
};

export default Avatars;
