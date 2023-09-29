import { Card } from 'react-bootstrap';

// images
import cardImg from '../../../assets/images/gallery/3.jpg';

const CardWithImage3 = () => {
    return (
        <Card>
            <Card.Img src={cardImg} />
            <Card.Body>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default CardWithImage3;
