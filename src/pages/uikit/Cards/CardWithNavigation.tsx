import { Button, Card, Nav } from 'react-bootstrap';

const CardWithNavigation = ({ variant }: { variant: 'tabs' | 'pills' }) => {
    return (
        <Card className="text-center">
            <Card.Header className="bg-transparent border-bottom">
                <Nav variant={variant} defaultActiveKey="#first">
                    <Nav.Item>
                        <Nav.Link href="#first">Active</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#link">Link</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#disabled" disabled>
                            Disabled
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </Card.Header>
            <Card.Body>
                <Card.Title as="h4" className="mb-1">
                    Special title treatment
                </Card.Title>
                <Card.Text className="mb-3">
                    With supporting text below as a natural lead-in to additional content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    );
};

export default CardWithNavigation;
