import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import classNames from 'classnames';

type CardWithSpecialTitleProps = {
    align: string;
};

const CardWithSpecialTitle = ({ align }: CardWithSpecialTitleProps) => {
    return (
        <Card as={Card.Body} className={classNames('text-' + align)}>
            <Card.Title as="h4">Special title treatment</Card.Title>
            <Card.Text>With supporting text below as a natural lead-in to additional content.</Card.Text>
            <Link to="#" className="btn btn-primary waves-effect waves-light">
                Go somewhere
            </Link>
        </Card>
    );
};

export default CardWithSpecialTitle;
