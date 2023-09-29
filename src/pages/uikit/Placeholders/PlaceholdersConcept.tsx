import { Card, Placeholder } from 'react-bootstrap';

const PlaceholdersConcept = () => {
    return (
        <Card>
            <Card.Body>
                <h4 className="header-title">How it works</h4>
                <p className="text-muted">
                    Create placeholders with the <code>Placeholder</code> component and a grid column prop (e.g.,{' '}
                    <code>xs={6}</code>) to set the <code>width</code>. They can replace the text inside an element or
                    be added to an existing component via the <code>as</code> prop.
                </p>

                <p aria-hidden="true">
                    <Placeholder xs={6} />
                </p>

                <Placeholder.Button xs={4} aria-hidden="true" />
            </Card.Body>
        </Card>
    );
};

export default PlaceholdersConcept;
