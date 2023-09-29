import { Card, Col, Row } from 'react-bootstrap';

// hooks
import { usePageTitle } from '../../../hooks';

// data
import { DRIPICONS_LIST } from './data';

const Dripicons = () => {
    // set pagetitle
    usePageTitle({
        title: 'Dripicons',
        breadCrumbItems: [
            {
                path: '/icons/dripicons',
                label: 'Icons',
            },
            {
                path: '/icons/dripicons',
                label: 'Dripicons',
                active: true,
            },
        ],
    });

    return (
        <Row>
            <Col>
                <Card>
                    <Card.Body>
                        <Row className="icons-list-demo">
                            {(DRIPICONS_LIST || []).map((icon, index) => {
                                return (
                                    <Col key={index.toString()} sm={6} md={4} lg={3}>
                                        <i className={icon.name}></i> {icon.name}
                                    </Col>
                                );
                            })}
                        </Row>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
};

export default Dripicons;
