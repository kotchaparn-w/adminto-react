import { Card } from 'react-bootstrap';

// images
import cardImg from '../../../assets/images/gallery/4.jpg';

const CardWithTitleAndImage = () => {
    return (
        <Card>
            <Card.Body>
                <Card.Title as="h4">Card title</Card.Title>
                <Card.Subtitle as="h6" className="text-muted">
                    Support card subtitle
                </Card.Subtitle>
            </Card.Body>
            <Card.Img src={cardImg} className="img-fluid" />
            <Card.Body>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                </Card.Text>
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

export default CardWithTitleAndImage;
