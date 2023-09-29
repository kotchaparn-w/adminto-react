import { Button, Card, Col, Placeholder, Row } from 'react-bootstrap';

// images
import img1 from '../../../assets/images/small/img-1.jpg';
import img2 from '../../../assets/images/small/img-3.jpg';

const BasicPlaceholders = () => {
    return (
        <Card>
            <Card.Body>
                <h4 className="header-title">Placeholders</h4>
                <p className="text-muted">
                    In the example below, we take a typical card component and recreate it with placeholders applied to
                    create a “loading card”. Size and proportions are the same between the two.
                </p>

                <Row>
                    <Col md={6}>
                        <Card className="border shadow-none">
                            <Card.Img variant="top" src={img1} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of the
                                    card's content.
                                </Card.Text>
                                <Button>Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card className="border shadow-none mb-0">
                            <Card.Img variant="top" src={img2} />
                            <Card.Body>
                                <Placeholder as={Card.Title} animation="glow">
                                    <Placeholder xs={6} />
                                </Placeholder>
                                <Placeholder as={Card.Text} animation="glow">
                                    <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                                    <Placeholder xs={6} /> <Placeholder xs={8} />
                                </Placeholder>
                                <Placeholder.Button variant="primary" xs={6} />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
};

export default BasicPlaceholders;
