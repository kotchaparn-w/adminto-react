import { Card, Col, Row } from 'react-bootstrap';

const BackGroundSizing = () => {
    return (
        <Card>
            <Card.Body>
                <h4 className="header-title">Sizing - Background Color</h4>
                <p className="text-muted font-14 mb-4">
                    Using utilities classes of background e.g. <code>bg-*</code> allows you to have any background color
                    as well.
                </p>

                <Row>
                    <Col md={3}>
                        <div className="avatar-xs">
                            <span className="avatar-title bg-primary rounded">xs</span>
                        </div>
                        <p className="mb-2 font-14 mt-1">
                            Using <code>.avatar-xs</code>
                        </p>

                        <div className="avatar-sm mt-3">
                            <span className="avatar-title bg-success rounded">sm</span>
                        </div>

                        <p className="mb-0 font-14 mt-1">
                            Using <code>.avatar-sm</code>
                        </p>
                    </Col>

                    <Col md={3}>
                        <div className="avatar-md">
                            <span className="avatar-title bg-soft-info text-info font-20 rounded">MD</span>
                        </div>

                        <p className="mb-0 font-14 mt-1">
                            Using <code>.avatar-md</code>
                        </p>
                    </Col>

                    <Col md={3}>
                        <div className="avatar-lg">
                            <span className="avatar-title bg-danger font-22 rounded">LG</span>
                        </div>

                        <p className="mb-0 font-14 mt-1">
                            Using <code>.avatar-lg</code>
                        </p>
                    </Col>

                    <Col md={3}>
                        <div className="avatar-xl">
                            <span className="avatar-title bg-soft-warning text-warning font-24 rounded">XL</span>
                        </div>

                        <p className="mb-0 font-14 mt-1">
                            Using <code>.avatar-xl</code>
                        </p>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
};

export default BackGroundSizing;
