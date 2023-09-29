import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

// images
import cardImg from '../../../assets/images/gallery/1.jpg';

const CardWithImage1 = () => {
    return (
        <Card>
            <Card.Img src={cardImg} />
            <Card.Body>
                <Card.Title as="h4">Card title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                </Card.Text>
                <Link to="#" className="btn btn-primary waves-effect waves-light">
                    Button
                </Link>
            </Card.Body>
        </Card>
    );
};

export default CardWithImage1;
