import React from 'react';
import { Row, Col } from 'react-bootstrap';

// hooks
import { usePageTitle } from '../../hooks';

// components
import PricingCard from '../../components/PricingCard';

// dummy data
import { pricingPlans, pricingPlans2 } from './data';

const Pricing = () => {
    // set pagetitle
    usePageTitle({
        title: 'Pricing',
        breadCrumbItems: [
            {
                path: '/pages/pricing',
                label: 'Extra Pages',
            },
            {
                path: '/pages/pricing',
                label: 'Pricing',
                active: true,
            },
        ],
    });

    return (
        <>
            <Row className="mt-2 justify-content-center">
                <Col lg={10}>
                    {/* pricing cards */}
                    <PricingCard plans={pricingPlans} />
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col lg={8}>
                    {/* pricing cards */}
                    <PricingCard plans={pricingPlans2} />
                </Col>
            </Row>
        </>
    );
};

export default Pricing;
