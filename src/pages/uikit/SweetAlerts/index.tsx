import { Row, Col, Card } from 'react-bootstrap';

// hooks
import { usePageTitle } from '../../../hooks';

// component
import Alerts from './Alerts';

const SweetAlerts = () => {
    // set pagetitle
    usePageTitle({
        title: 'Sweet Alerts',
        breadCrumbItems: [
            {
                path: '/extended-ui/sweet-alert',
                label: 'Extended UI',
            },
            {
                path: '/extended-ui/sweet-alert',
                label: 'Sweet Alerts',
                active: true,
            },
        ],
    });

    return (
        <Row>
            <Col>
                <Card>
                    <Card.Body>
                        <h4 className="header-title">Examples</h4>

                        <p className="sub-header">
                            A beautiful, responsive, customizable, accessible (WAI-ARIA) replacement for JavaScript's
                            popup boxes
                        </p>

                        <Alerts />
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
};

export default SweetAlerts;
