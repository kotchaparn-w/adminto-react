import { Card, Col, Row } from 'react-bootstrap';

// images
import user1 from '../../../assets/images/users/user-7.jpg';
import user2 from '../../../assets/images/users/user-8.jpg';
import user3 from '../../../assets/images/users/user-9.jpg';

const RoundedCircle = () => {
    return (
        <Card>
            <Card.Body>
                <h4 className="header-title">Rounded Circle</h4>
                <p className="text-muted font-14 mb-4">
                    Using an additional class <code>.rounded-circle</code> in <code>&lt;img&gt;</code> element creates
                    the rounded avatar.
                </p>

                <Row>
                    <Col md={4}>
                        <img src={user1} alt="" className="img-fluid avatar-md rounded-circle" />
                        <p className="mt-1">
                            <code>.avatar-md .rounded-circle</code>
                        </p>
                    </Col>
                    <Col md={4}>
                        <img src={user2} alt="" className="img-fluid avatar-lg rounded-circle" />
                        <p className="mt-1">
                            <code>.avatar-lg .rounded-circle</code>
                        </p>
                    </Col>
                    <Col md={4}>
                        <img src={user3} alt="" className="img-fluid avatar-xl rounded-circle" />
                        <p className="mt-1">
                            <code>.avatar-xl .rounded-circle</code>
                        </p>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
};

export default RoundedCircle;
