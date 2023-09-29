import { Col, Row } from 'react-bootstrap';
import classNames from 'classnames';

// type
import { MdiIcon } from './types';

type AllIconsProps = {
    icons: MdiIcon[];
};

const AllIcons = ({ icons }: AllIconsProps) => {
    return (
        <Row className="icon-list-demo">
            {(icons || []).map((icon, index) => {
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

export default AllIcons;
