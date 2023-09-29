import { Link } from 'react-router-dom';
import { Card, Col } from 'react-bootstrap';
import classNames from 'classnames';

const ColoredCards = () => {
    const colors = ['primary', 'success', 'info', 'warning', 'danger', 'purple', 'pink', 'white'];

    return (
        <>
            <Col md={4}>
                <Card className="text-white bg-secondary">
                    <Card.Body>
                        <Card.Title as="h5" className="text-white">
                            Special title treatment
                        </Card.Title>
                        <Card.Text>With supporting text below as a natural lead-in to additional content.</Card.Text>
                        <Link to="#" className="btn btn-light btn-sm waves-effect">
                            Button
                        </Link>
                    </Card.Body>
                </Card>
            </Col>
            {(colors || []).map((color, index) => {
                return (
                    <Col md={4} key={index.toString()}>
                        <Card
                            className={classNames(
                                'text-xs-center',
                                `bg-${color}`,
                                color === 'white' ? 'text-dark' : 'text-white'
                            )}
                        >
                            <Card.Body>
                                <blockquote className="card-bodyquote mb-0">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a
                                        ante.
                                    </p>
                                    <footer>
                                        Someone famous in <cite title="Source Title">Source Title</cite>
                                    </footer>
                                </blockquote>
                            </Card.Body>
                        </Card>
                    </Col>
                );
            })}
        </>
    );
};

export default ColoredCards;
