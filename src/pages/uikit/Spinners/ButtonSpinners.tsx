import { Button, Card, Col, Row } from 'react-bootstrap';

// component
import Spinner from '../../../components/Spinner';

const ButtonSpinners = () => {
    return (
        <Card>
            <Card.Body>
                <h4 className="mt-0 header-title">Buttons spinner</h4>
                <p className="text-muted mb-4">
                    Use spinners within buttons to indicate an action is currently processing or taking place. You may
                    also swap the text out of the spinner element and utilize button text as needed.
                </p>
                <Row>
                    <Col md={6}>
                        <div className="button-list mb-1 mb-sm-0">
                            <Button color="primary" disabled>
                                <Spinner className="spinner-border-sm" tag="span" color="white" />
                                <span className="visually-hidden">Loading...</span>
                            </Button>

                            <Button color="primary" disabled>
                                <Spinner className="spinner-border-sm me-1" tag="span" color="white" />
                                Loading...
                            </Button>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="button-list">
                            <Button color="primary" disabled>
                                <Spinner className="spinner-grow-sm" tag="span" color="white" type="grow" />
                                <span className="visually-hidden">Loading...</span>
                            </Button>

                            <Button color="primary" disabled>
                                <Spinner className="spinner-grow-sm me-1" tag="span" color="white" type="grow" />
                                Loading...
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
};

export default ButtonSpinners;
