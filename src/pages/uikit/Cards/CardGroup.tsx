import { Card, CardGroup } from 'react-bootstrap';

// types
import { CardGroupItem } from './types';

type CardGroupProps = {
    details: CardGroupItem[];
};

const CardGroups = ({ details }: CardGroupProps) => {
    return (
        <CardGroup>
            {(details || []).map((detail, index) => {
                return (
                    <Card key={index.toString()}>
                        <Card.Img src={detail.image} />
                        <Card.Body>
                            <Card.Title as="h4">{detail.title}</Card.Title>
                            <Card.Text>{detail.text}</Card.Text>
                            <Card.Text>
                                <small className="text-muted">{detail.subtext}</small>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                );
            })}
        </CardGroup>
    );
};

export default CardGroups;
