import { Card, ProgressBar } from 'react-bootstrap';

const Sizes = () => {
    return (
        <Card>
            <Card.Body>
                <h4 className="header-title">Size example</h4>
                <p className="sub-header">
                    We only set a <code>height</code> value on the <code>.progress</code>, so if you change that value
                    the inner <code>.progress-bar</code> will automatically resize accordingly.
                </p>

                <ProgressBar now={70} className="mb-3" style={{ height: 1 }} />
                <ProgressBar now={30} className="progress-sm mb-3" />
                <ProgressBar now={25} className="mb-3 progress-md" variant="success" />
                <ProgressBar now={50} className="mb-3 progress-lg" variant="info" />
                <ProgressBar now={75} className="mb-3 progress-xl" variant="warning" />
                <ProgressBar now={38} className="mb-0 progress-xxl" variant="danger" />
            </Card.Body>
        </Card>
    );
};

export default Sizes;
