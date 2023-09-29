import { Badge, Button, Card, Row } from 'react-bootstrap';

const PositionedBadges = () => {
    return (
        <Card>
            <Card.Body>
                <h4 className="header-title">Badge Positioned</h4>
                <p className="sub-header">
                    Use the <code>.rounded-pill</code> modifier class to make badges more rounded.
                </p>

                <Row>
                    <div className="col-6">
                        <Button className="btn btn-primary position-relative">
                            Inbox
                            <Badge pill bg="danger" className="position-absolute top-0 start-100 translate-middle">
                                99+
                                <span className="visually-hidden">unread messages</span>
                            </Badge>
                        </Button>
                    </div>

                    <div className="col-6">
                        <Button className="btn btn-primary position-relative">
                            Profile
                            <Badge
                                bg="danger"
                                className="position-absolute top-0 start-100 translate-middle p-1 border border-light rounded-circle"
                            >
                                <span className="visually-hidden">New alerts</span>
                            </Badge>
                        </Button>
                    </div>

                    <div className="col-6">
                        <Button className="btn btn-success mt-4">
                            Notifications
                            <Badge bg="light" className=" text-dark ms-1">
                                4
                            </Badge>
                        </Button>
                    </div>
                </Row>
            </Card.Body>
        </Card>
    );
};

export default PositionedBadges;
