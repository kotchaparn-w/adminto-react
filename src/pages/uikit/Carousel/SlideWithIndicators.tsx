import { useState } from 'react';
import { Card, Carousel } from 'react-bootstrap';

// images
import img1 from '../../../assets/images/small/img-3.jpg';
import img2 from '../../../assets/images/small/img-2.jpg';
import img3 from '../../../assets/images/small/img-1.jpg';

const SlidesWithIndicators = () => {
    const [index, setIndex] = useState<number>(0);

    const handleSelect = (selectedIndex: number) => {
        setIndex(selectedIndex);
    };

    return (
        <Card>
            <Card.Body>
                <h4 className="header-title">With indicators</h4>
                <p className="text-muted font-14">
                    You can also add the indicators to the carousel, alongside the controls, too.
                </p>
                <Carousel activeIndex={index} onSelect={handleSelect}>
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

export default SlidesWithIndicators;
