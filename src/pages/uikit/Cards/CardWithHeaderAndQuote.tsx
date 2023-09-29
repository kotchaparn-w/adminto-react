import { Card } from 'react-bootstrap';

const CardWithHeaderAndQuote = () => {
    return (
        <Card>
            <Card.Header>Quote</Card.Header>
            <Card.Body>
                <blockquote className="card-bodyquote mb-0">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                    <footer className="blockquote-footer text-muted">
                        Someone famous in <cite title="Source Title">Source Title</cite>
                    </footer>
                </blockquote>
            </Card.Body>
        </Card>
    );
};

export default CardWithHeaderAndQuote;
