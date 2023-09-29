import { useState } from 'react';
import { Button, Card, Collapse } from 'react-bootstrap';

const HorizontalCollapse = () => {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <>
            <p>
                <Button onClick={() => setOpen(!open)} aria-controls="example-collapse-text" aria-expanded={open}>
                    Toggle width collapse
                </Button>
            </p>
            <Collapse in={open} dimension="width">
                <div>
                    <Card as={Card.Body} className="mb-0" style={{ width: '450px' }}>
                        This is some placeholder content for a horizontal collapse. It's hidden by default and shown
                        when triggered.
                    </Card>
                </div>
            </Collapse>
        </>
    );
};

export default HorizontalCollapse;
