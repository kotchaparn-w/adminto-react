import { Card, ListGroup } from 'react-bootstrap';

// images
import cardImg from '../../../assets/images/gallery/2.jpg';

const CardWithImage2 = () => {
    return (
        <Card>
            <Card.Img src={cardImg} />
            <Card.Body>
                <Card.Title as="h4">Card title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                </Card.Text>
            </Card.Body>

            <ListGroup variant="flush">
                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            </ListGroup>

            <Card.Body>
                <Card.Link href="#" className="text-custom">
                    Card link
                </Card.Link>
                <Card.Link href="#" className="text-custom">
                    Another link
                </Card.Link>
            </Card.Body>
        </Card>
    );
};

export default CardWithImage2;
