import { Card, Spinner } from 'react-bootstrap';

const SpinnerPlacements = () => {
    return (
        <Card>
            <Card.Body>
                <h4 className="mt-0 header-title">Placement</h4>
                <p className="text-muted mb-4">
                    Use <code>flexbox utilities</code>, <code>float utilities</code>, or <code>text alignment</code>{' '}
                    utilities to place spinners exactly where you need them in any situation.
                </p>
                <div className="d-flex align-items-center">
                    <strong>Loading...</strong>
                    <Spinner className="ms-auto" animation="border" />
                </div>
            </Card.Body>
        </Card>
    );
};

export default SpinnerPlacements;
