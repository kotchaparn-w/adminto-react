import { Card, Carousel } from 'react-bootstrap';

// images
import img1 from '../../../assets/images/small/img-1.jpg';
import img2 from '../../../assets/images/small/img-3.jpg';
import img3 from '../../../assets/images/small/img-2.jpg';

const SlidesWithCaptions = () => {
    return (
        <Card>
            <Card.Body>
                <h4 className="header-title">With captions</h4>
                <p className="text-muted font-14">
                    Add captions to your slides easily with the <code>.carousel-caption</code> element within any{' '}
                    <code>.carousel-item</code>.
                </p>
                <Carousel indicators={false}>
                    <Carousel.Item>
                        <img className="d-block w-100" src={img1} alt="First slide" />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={img2} alt="Second slide" />
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={img3} alt="Third slide" />
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Card.Body>
        </Card>
    );
};
export default SlidesWithCaptions;
