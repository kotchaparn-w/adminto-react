import { Card, Col, Row } from 'react-bootstrap';
import classNames from 'classnames';

// hooks
import { usePageTitle } from '../../../hooks';

// data
import { FEATHERICON_LIST } from './data';

const FeatherIcons = () => {
    // set pagetitle
    usePageTitle({
        title: 'Feather Icons',
        breadCrumbItems: [
            {
                path: '/icons/feather',
                label: 'Icons',
            },
            {
                path: '/icons/feather',
                label: 'Feather Icons',
                active: true,
            },
        ],
    });

    return (
        <Row>
            <Col>
                <Card>
                    <Card.Body>
                        <Row className="icons-list-demo">
                            {(FEATHERICON_LIST || []).map((icon, index) => {
                                return (
                                    <Col key={index.toString()} sm={6} md={4} lg={3}>
                                        <i className={classNames(icon.name)}></i> <span>{icon.name}</span>
                                    </Col>
                                );
                            })}
                        </Row>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
};

export default FeatherIcons;
