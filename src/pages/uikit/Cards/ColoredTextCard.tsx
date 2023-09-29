import { Card, Col } from 'react-bootstrap';
import classNames from 'classnames';

const ColoredTextCards = () => {
    const colors = ['primary', 'secondary', 'success'];

    return (
        <>
            {(colors || []).map((color, index) => {
                return (
                    <Col md={4} key={index.toString()}>
                        <Card className={classNames('border', 'border-' + color)}>
                            <Card.Body className={classNames('text-' + color)}>
                                <Card.Title as="h5" className={classNames('text-' + color)}>
                                    {color} card title
                                </Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of the
                                    card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                );
            })}
        </>
    );
};

export default ColoredTextCards;
