import { Card, Placeholder } from 'react-bootstrap';

const PlaceholdersAnimation = () => {
    return (
        <Card>
            <Card.Body>
                <h4 className="header-title">Animation</h4>
                <p className="text-muted">
                    Animate placeholders by setting the prop <code>animation</code> to <code>glow</code> or{' '}
                    <code>wave</code> to better convey the perception of something being <em>actively</em> loaded.
                </p>

                <Placeholder as="p" animation="glow">
                    <Placeholder xs={12} />
                </Placeholder>
                <Placeholder as="p" animation="wave" className="mb-0">
                    <Placeholder xs={12} />
                </Placeholder>
            </Card.Body>
        </Card>
    );
};

export default PlaceholdersAnimation;
