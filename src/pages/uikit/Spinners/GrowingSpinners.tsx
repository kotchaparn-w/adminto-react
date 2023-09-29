import { Card, Spinner } from 'react-bootstrap';

const GrowingSpinners = () => {
    return (
        <Card>
            <Card.Body>
                <h4 className="mt-0 header-title">Growing spinner</h4>
                <p className="text-muted mb-4">
                    If you don’t fancy a border spinner, switch to the grow spinner. While it doesn’t technically spin,
                    it does repeatedly grow!
                </p>
                <Spinner animation="grow" />
            </Card.Body>
        </Card>
    );
};

export default GrowingSpinners;
