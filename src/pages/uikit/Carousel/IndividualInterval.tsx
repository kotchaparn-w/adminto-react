import { Card, Carousel } from 'react-bootstrap';

// images
import img1 from '../../../assets/images/small/img-2.jpg';
import img2 from '../../../assets/images/small/img-3.jpg';
import img3 from '../../../assets/images/small/img-1.jpg';

const IndividualInterval = () => {
    return (
        <Card>
            <Card.Body>
                <h4 className="header-title">Individual interval</h4>
                <p className="text-muted font-14">
                    Add <code>data-bs-interval=""</code> to a <code>.carousel-item</code> to change the amount of time
                    to delay between automatically cycling to the next item.
                </p>
                <Carousel fade indicators={false}>
                    <Carousel.Item interval={1000}>
                        <img className="d-block w-100" src={img1} alt="First slide" />
                    </Carousel.Item>
                    <Carousel.Item interval={2000}>
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

export default IndividualInterval;
