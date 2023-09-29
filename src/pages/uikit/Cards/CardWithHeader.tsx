import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

const CardWithHeader = () => {
    return (
        <Card>
            <Card.Header as="h5">Featured</Card.Header>
            <Card.Body>
                <Card.Title as="h5">Special title treatment</Card.Title>
                <Card.Text>With supporting text below as a natural lead-in to additional content.</Card.Text>
                <Link to="#" className="btn btn-primary waves-effect waves-light">
                    Go somewhere
                </Link>
            </Card.Body>
        </Card>
    );
};

export default CardWithHeader;
