import { Col, Row } from 'react-bootstrap';

// hooks
import { usePageTitle } from '../../../hooks';

// components
import DefaultToasts from './DefaultToasts';
import CustomToast from './CustomToast';
import PlacementToast from './PlacementToast';
import DefaultAlerts from './DefaultAlerts';
import DismissibleAlerts from './DismissibleAlerts';
import CustomBackgroundAlerts from './CustomBackgroundAlerts';
import CustomDismissibleAlerts from './CustomDismissibleAlerts';
import LiveAlert from './LiveAlert';

const Notifications = () => {
    // set pagetitle
    usePageTitle({
        title: 'Notifications',
        breadCrumbItems: [
            {
                path: '/base-ui/notifications',
                label: 'Base UI',
            },
            {
                path: '/base-ui/notifications',
                label: 'Notifications',
                active: true,
            },
        ],
    });

    return (
        <>
            <Row>
                <Col xs={12}>
                    <DefaultToasts />
                </Col>
            </Row>
            <Row>
                <Col lg={6}>
                    <CustomToast />
                </Col>

                <Col lg={6}>
                    <PlacementToast />
                </Col>
            </Row>

            <Row>
                <Col lg={6}>
                    <DefaultAlerts />
                </Col>
                <Col lg={6}>
                    <DismissibleAlerts />
                </Col>
            </Row>

            <Row>
                <Col lg={6}>
                    <CustomBackgroundAlerts />
                </Col>
                <Col lg={6}>
                    <CustomDismissibleAlerts />
                </Col>
            </Row>

            <Row>
                <Col lg={6}>
                    <LiveAlert />
                </Col>
            </Row>
        </>
    );
};

export default Notifications;
