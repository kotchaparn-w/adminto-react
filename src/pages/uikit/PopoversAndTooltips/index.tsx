import { Col, Row } from 'react-bootstrap';

// hooks
import { usePageTitle } from '../../../hooks';

// component
import DefaultPopover from './DefaultPopovers';
import DefaultTooltips from './DefaultTooltips';

const PopoversAndTooltips = () => {
    // set pagetitle
    usePageTitle({
        title: 'Tooltips & Popovers',
        breadCrumbItems: [
            {
                path: '/base-ui/popovers-tooltips',
                label: 'Base UI',
            },
            {
                path: '/base-ui/popovers-tooltips',
                label: 'Tooltips & Popovers',
                active: true,
            },
        ],
    });

    return (
        <>
            <Row>
                <Col xs={12}>
                    <DefaultPopover />
                </Col>
            </Row>
            <Row>
                <Col xs={12}>
                    <DefaultTooltips />
                </Col>
            </Row>
        </>
    );
};

export default PopoversAndTooltips;
