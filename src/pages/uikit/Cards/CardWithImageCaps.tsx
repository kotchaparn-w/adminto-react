import { Card } from 'react-bootstrap';

const CardWithImageCaps = ({ position, image }: { position: string; image: string }) => {
    return (
        <Card>
            {position === 'top' && <Card.Img variant={position} src={image} />}
            <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to additional content. This
                    content is a little bit longer.
                </Card.Text>
                <Card.Text>
                    <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Text>
            </Card.Body>
            {position === 'bottom' && <Card.Img variant={position} src={image} />}
        </Card>
    );
};

export default CardWithImageCaps;
