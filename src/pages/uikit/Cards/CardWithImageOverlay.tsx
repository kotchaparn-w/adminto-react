import { Card } from 'react-bootstrap';

// images
import cardImg from '../../../assets/images/gallery/6.jpg';

const CardWithImageOverlay = () => {
    return (
        <Card className="text-white">
            <Card.Img src={cardImg} alt="" />
            <Card.ImgOverlay>
                <Card.Title className="text-white">Card title</Card.Title>
                <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to additional content. This
                    content is a little bit longer.
                </Card.Text>
                <Card.Text>
                    <small>Last updated 3 mins ago</small>
                </Card.Text>
            </Card.ImgOverlay>
        </Card>
    );
};

export default CardWithImageOverlay;
