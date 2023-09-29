import { Col, Row } from 'react-bootstrap';
import classNames from 'classnames';

// type
import { MdiIcon } from './types';

type NewIconsProps = {
    newIcons: MdiIcon[];
};

const NewIcons = ({ newIcons }: NewIconsProps) => {
    return (
        <Row className="icon-list-demo">
            {(newIcons || []).map((icon, index) => {
                return (
                    <Col key={index.toString()} sm={6} md={4} lg={3}>
                        <i className={classNames('mdi', 'mdi-' + icon.name)}></i>
                        <span>mdi-{icon.name}</span>
                    </Col>
                );
            })}
        </Row>
    );
};

export default NewIcons;
