import { Card, Carousel } from 'react-bootstrap';

// images
import img1 from '../../../assets/images/small/img-4.jpg';
import img2 from '../../../assets/images/small/img-1.jpg';
import img3 from '../../../assets/images/small/img-2.jpg';

const SlidesWithControls = () => {
    return (
        <Card>
            <Card.Body>
                <h4 className="header-title">With controls</h4>
                <p className="text-muted font-14">Adding in the previous and next controls:</p>
                <Carousel indicators={false}>
                    <Carousel.Item>
                        <img className="d-block w-100" src={img1} alt="First slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={img2} alt="Second slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={img3} alt="Third slide" />
                    </Carousel.Item>
                </Carousel>
            </Card.Body>
        </Card>
    );
};

export default SlidesWithControls;
