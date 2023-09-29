import { Card, Col } from 'react-bootstrap';

// images
import cardImg1 from '../../../assets/images/gallery/2.jpg';
import cardImg2 from '../../../assets/images/gallery/3.jpg';
import cardImg3 from '../../../assets/images/gallery/4.jpg';

const GridCards = () => {
    return (
        <>
            <Col xs={12} md={4}>
                <Card>
                    <Card.Img src={cardImg1} />
                    <Card.Body>
                        <Card.Title as="h4">Card title that wraps to a new line</Card.Title>
                        <Card.Text>
                            This is a longer card with supporting text below as a natural lead-in to additional content.
                            This content is a little bit longer.
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card as={Card.Body}>
                    <blockquote className="card-bodyquote mb-0">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                        <footer className="blockquote-footer text-muted">
                            <small className="text-muted">
                                Someone famous in <cite title="Source Title">Source Title</cite>
                            </small>
                        </footer>
                    </blockquote>
                </Card>
            </Col>
            <Col xs={12} md={4}>
                <Card>
                    <Card.Img src={cardImg2} />
                    <Card.Body>
                        <Card.Title as="h4">Card title</Card.Title>
                        <Card.Text>
                            This card has supporting text below as a natural lead-in to additional content.
                        </Card.Text>
                        <Card.Text>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card as={Card.Body} className="text-center">
                    <blockquote className="card-bodyquote mb-0">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat.</p>
                        <footer className="blockquote-footer text-muted">
                            <small>
                                Someone famous in <cite title="Source Title">Source Title</cite>
                            </small>
                        </footer>
                    </blockquote>
                </Card>
                <Card as={Card.Body} className="text-xs-center">
                    <Card.Title as="h4">Card title</Card.Title>
                    <Card.Text>
                        This card has supporting text below as a natural lead-in to additional content.
                    </Card.Text>
                    <Card.Text>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Text>
                </Card>
            </Col>
            <Col xs={12} md={4}>
                <Card>
                    <Card.Img src={cardImg3} className="img-fluid" />
                </Card>
                <Card as={Card.Body} className="text-end">
                    <blockquote className="card-bodyquote mb-0">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                        <footer className="blockquote-footer text-muted">
                            <small className="text-muted">
                                Someone famous in <cite title="Source Title">Source Title</cite>
                            </small>
                        </footer>
                    </blockquote>
                </Card>
                <Card as={Card.Body}>
                    <Card.Title as="h4">Card title</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to additional content. This
                        card has even longer content than the first to show that equal height action.
                    </Card.Text>
                    <Card.Text>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Text>
                </Card>
            </Col>
        </>
    );
};

export default GridCards;
