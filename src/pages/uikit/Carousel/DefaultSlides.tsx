import { Card, Carousel } from 'react-bootstrap';

// images
import img1 from '../../../assets/images/small/img-1.jpg';
import img2 from '../../../assets/images/small/img-2.jpg';
import img3 from '../../../assets/images/small/img-3.jpg';

const DefaultSlides = () => {
    return (
        <Card>
            <Card.Body>
                <h4 className="header-title">Slides only</h4>
                <p className="sub-header">
                    Here’s a carousel with slides only. Note the presence of the <code>.d-block</code> and{' '}
                    <code>.img-fluid</code> on carousel images to prevent browser default image alignment.
                </p>

                <Carousel indicators={false} controls={false}>
                    <Carousel.Item>
                        <img className="d-block img-fluid" src={img1} alt="First slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block img-fluid" src={img2} alt="Second slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block img-fluid" src={img3} alt="Third slide" />
                    </Carousel.Item>
                </Carousel>
            </Card.Body>
        </Card>
    );
};

export default DefaultSlides;
