import { Col, Row } from 'react-bootstrap';

// hooks
import { usePageTitle } from '../../../hooks';

// components
import DefaultProgress from './DefaultProgress';
import ContextualAlternatives from './ContextualAlternatives';
import Striped from './Striped';
import Sizes from './Sizes';

const Progress = () => {
    // set pagetitle
    usePageTitle({
        title: 'Progress',
        breadCrumbItems: [
            {
                path: '/base-ui/progress',
                label: 'Base UI',
            },
            {
                path: '/base-ui/progress',
                label: 'Progress',
                active: true,
            },
        ],
    });

    return (
        <>
            <Row>
                <Col md={6}>
                    <DefaultProgress />
                </Col>
                <Col md={6}>
                    <ContextualAlternatives />
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                    <Striped />
                </Col>
                <Col md={6}>
                    <Sizes />
                </Col>
            </Row>
        </>
    );
};

export default Progress;
