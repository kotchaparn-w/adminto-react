import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

const CardWithHeaderAndFooter = () => {
    return (
        <Card className="text-center">
            <Card.Header>Featured</Card.Header>
            <Card.Body>
                <Card.Text>
                    With supporting text below as a natural lead-in to additional content. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit.
                </Card.Text>
                <Link to="#" className="btn btn-primary waves-effect waves-light">
                    Go somewhere
                </Link>
            </Card.Body>
            <Card.Footer className="text-muted">2 days ago</Card.Footer>
        </Card>
    );
};

export default CardWithHeaderAndFooter;
