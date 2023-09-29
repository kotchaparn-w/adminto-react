import { Card, Col, Row } from 'react-bootstrap';

// hooks
import { usePageTitle } from '../../../hooks';

// component
import ContexualBadges from './ContextualBadges';
import DefaultBadges from './DefaultBadges';
import PillBadges from './PillBadges';
import PositionedBadges from './PositionedBadges';
import DefaultPagination from './DefaultPagination';
import RoundedPagination from './RoundedPagination';
import PaginationSizes from './PaginationSizes';
import PaginationAlignment from './PaginationAlignment';
import BreadcrumbExample from './BreadcrumbExample';

// types
import { Variant } from './types';

const variants: Variant[] = [
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
    'pink',
    'blue',
    'light',
    'dark',
];

const GeneralUI = () => {
    // set pagetitle
    usePageTitle({
        title: 'General UI',
        breadCrumbItems: [
            {
                path: '/base-ui/general',
                label: 'Base UI',
            },
            {
                path: '/base-ui/general',
                label: 'General UI',
                active: true,
            },
        ],
    });

    return (
        <>
            <Row>
                <Col xl={6}>
                    <DefaultBadges />
                    <ContexualBadges variants={variants} />
                </Col>
                <Col xl={6}>
                    <PillBadges variants={variants} />
                    <PositionedBadges />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card>
                        <Card.Body>
                            <Row>
                                <Col md={6}>
                                    <h4 className="header-title">Pagination</h4>
                                    <p className="sub-header">
                                        Provide pagination links for your site or app with the multi-page pagination
                                        component.
                                    </p>

                                    <DefaultPagination />
                                    <RoundedPagination />
                                    <PaginationSizes />
                                    <PaginationAlignment />
                                </Col>
                                <Col md={6}>
                                    <BreadcrumbExample />
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    );
};

export default GeneralUI;
