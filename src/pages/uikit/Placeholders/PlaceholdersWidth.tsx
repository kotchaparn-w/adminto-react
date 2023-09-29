import { Card, Placeholder } from 'react-bootstrap';

const PlaceholdersWidth = () => {
    return (
        <Card>
            <Card.Body>
                <h4 className="header-title">Width</h4>
                <p className="text-muted">
                    You can change the <code>width</code> through grid column classes, width utilities, or inline
                    styles.
                </p>
                <Placeholder xs={6} />
                <Placeholder className="w-75" /> <br />
                <Placeholder style={{ width: '25%' }} />
            </Card.Body>
        </Card>
    );
};

export default PlaceholdersWidth;
