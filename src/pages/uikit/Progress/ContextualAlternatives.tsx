import { Card, ProgressBar } from 'react-bootstrap';

const ContextualAlternatives = () => {
    return (
        <Card>
            <Card.Body>
                <h4 className="header-title">Contextual alternatives</h4>
                <p className="sub-header">
                    Progress bars use some of the same button and alert classes for consistent styles.
                </p>

                <ProgressBar now={25} variant="success" className="mb-3" />
                <ProgressBar now={50} variant="info" className="mb-3" />
                <ProgressBar now={75} variant="warning" className="mb-3" />
                <ProgressBar now={100} variant="danger" className="mb-3" />
                <ProgressBar className="mb-0">
                    <ProgressBar now={15} key={1} />
                    <ProgressBar variant="success" now={30} key={2} />
                    <ProgressBar variant="info" now={20} key={3} />
                </ProgressBar>
            </Card.Body>
        </Card>
    );
};

export default ContextualAlternatives;
