import { Card, Spinner } from 'react-bootstrap';

const BorderedSpinners = () => {
    return (
        <Card>
            <Card.Body>
                <h4 className="mt-0 header-title">Border spinner</h4>
                <p className="text-muted mb-4">Use the border spinners for a lightweight loading indicator.</p>
                <Spinner animation="border" />
            </Card.Body>
        </Card>
    );
};

export default BorderedSpinners;
