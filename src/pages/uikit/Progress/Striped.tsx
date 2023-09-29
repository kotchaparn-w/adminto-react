import { Card, ProgressBar } from 'react-bootstrap';

const Striped = () => {
    return (
        <Card>
            <Card.Body>
                <h4 className="header-title">Striped example</h4>
                <p className="sub-header">Uses a gradient to create a striped effect.</p>

                <ProgressBar now={10} className="mb-3" striped />
                <ProgressBar now={25} className="mb-3" variant="success" striped />
                <ProgressBar now={50} className="mb-3" variant="info" striped />
                <ProgressBar now={75} className="mb-3" variant="warning" striped />
                <ProgressBar now={100} className="mb-3" variant="danger" striped />
                <ProgressBar now={75} className="mb-0" striped animated />
            </Card.Body>
        </Card>
    );
};

export default Striped;
