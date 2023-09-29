import { Card, Carousel } from 'react-bootstrap';

// images
import img1 from '../../../assets/images/small/img-1.jpg';
import img2 from '../../../assets/images/small/img-2.jpg';
import img3 from '../../../assets/images/small/img-3.jpg';

const CrossFade = () => {
    return (
        <Card>
            <Card.Body>
                <h4 className="header-title">Crossfade</h4>
                <p className="text-muted font-14">
                    Add <code>.carousel-fade</code> to your carousel to animate slides with a fade transition instead of
                    a slide.
                </p>
                <Carousel fade indicators={false}>
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

export default CrossFade;
