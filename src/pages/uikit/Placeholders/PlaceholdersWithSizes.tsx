import { Card, Placeholder } from 'react-bootstrap';

const PlaceholdersWithSizes = () => {
    return (
        <Card>
            <Card.Body>
                <h4 className="header-title">Sizing</h4>
                <p className="text-muted">
                    The size of <code>placeholder</code>s are based on the typographic style of the parent element.
                    Customize them with sizing props: <code>lg</code>, <code>sm</code>, or <code>xs</code>.
                </p>

                <Placeholder xs={12} size="lg" />
                <Placeholder xs={12} />
                <Placeholder xs={12} size="sm" />
                <Placeholder xs={12} size="xs" />
            </Card.Body>
        </Card>
    );
};

export default PlaceholdersWithSizes;
