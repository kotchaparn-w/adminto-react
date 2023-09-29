import { Card, Spinner } from 'react-bootstrap';

const AlignmentSpinners = () => {
    return (
        <Card>
            <Card.Body>
                <h4 className="mt-0 header-title">Alignment</h4>
                <p className="text-muted mb-4">
                    Use flexbox utilities, float utilities, or text alignment utilities to place spinners exactly where
                    you need them in any situation.
                </p>
                <div className="d-flex justify-content-center">
                    <Spinner animation="border" />
                </div>
            </Card.Body>
        </Card>
    );
};

export default AlignmentSpinners;
