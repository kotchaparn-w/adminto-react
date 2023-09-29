import { Card, ProgressBar } from 'react-bootstrap';

const DefaultProgress = () => {
    return (
        <Card>
            <Card.Body>
                <h4 className="header-title">Basic Example</h4>
                <p className="sub-header">Default progress bar.</p>

                <ProgressBar now={0} className="mb-3" />
                <ProgressBar now={33} className="mb-3" />
                <ProgressBar now={66} className="mb-3" />
                <ProgressBar now={100} className="mb-3" />
                <ProgressBar now={25} label={'25%'} className="mb-0" />
            </Card.Body>
        </Card>
    );
};

export default DefaultProgress;
