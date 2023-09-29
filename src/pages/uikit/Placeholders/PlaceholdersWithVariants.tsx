import { Card, Placeholder } from 'react-bootstrap';

const PlaceholdersWithVariants = () => {
    return (
        <Card>
            <Card.Body>
                <h4 className="header-title">Color</h4>
                <p className="text-muted">
                    By default, the <code>placeholder</code> uses <code>currentColor</code>. This can be overriden with
                    a custom color or utility class.
                </p>

                <Placeholder xs={12} />

                <Placeholder xs={12} bg="primary" />
                <Placeholder xs={12} bg="secondary" />
                <Placeholder xs={12} bg="success" />
                <Placeholder xs={12} bg="danger" />
                <Placeholder xs={12} bg="warning" />
                <Placeholder xs={12} bg="info" />
                <Placeholder xs={12} bg="light" />
                <Placeholder xs={12} bg="dark" />
            </Card.Body>
        </Card>
    );
};

export default PlaceholdersWithVariants;
