import { Card, Col, Row } from 'react-bootstrap';

const RoundedCircleBackGround = () => {
    return (
        <Card>
            <Card.Body>
                <h4 className="header-title">Rounded Circle Background</h4>
                <p className="text-muted font-14 mb-3">
                    Using an additional class <code>.rounded-circle</code> in <code>&lt;img&gt;</code> element creates
                    the rounded avatar.
                </p>

                <Row>
                    <Col md={4}>
                        <div className="avatar-md">
                            <span className="avatar-title bg-soft-secondary text-secondary font-20 rounded-circle">
                                MD
                            </span>
                        </div>

                        <p className="mb-0 font-14 mt-1">
                            Using <code>.avatar-md .rounded-circle</code>
                        </p>
                    </Col>
                    <Col md={4}>
                        <div className="avatar-lg">
                            <span className="avatar-title bg-light text-dark font-22 rounded-circle">LG</span>
                        </div>

                        <p className="mb-0 font-14 mt-1">
                            Using <code>.avatar-lg .rounded-circle</code>
                        </p>
                    </Col>
                    <Col md={4}>
                        <div className="avatar-xl">
                            <span className="avatar-title bg-soft-primary text-primary font-24 rounded-circle">XL</span>
                        </div>

                        <p className="mb-0 font-14 mt-1">
                            Using <code>.avatar-xl .rounded-circle</code>
                        </p>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
};

export default RoundedCircleBackGround;
