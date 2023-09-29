import { Col, Row } from 'react-bootstrap';

// hooks
import { usePageTitle } from '../../../hooks';

// components
import DefaultTabs from './DefaultTabs';
import TabsJustified from './TabsJustified';
import TabsVerticalLeft from './TabsVerticalLeft';
import TabsVerticalRight from './TabsVerticalRight';
import TabsBordered from './TabsBordered';
import Accordion1 from './Accordion1';
import Accordion2 from './Accordion2';
import CustomCollapse from './CustomCollapse';
import HorizontalCollapse from './HorizontalCollapse';

// dummy data
import { tabContents, accordionContent, accordionContent2 } from './data';

const TabsAccordions = () => {
    // set pagetitle
    usePageTitle({
        title: 'Tabs & Accordions',
        breadCrumbItems: [
            {
                path: '/base-ui/tabs-accordions',
                label: 'Base UI',
            },
            {
                path: '/base-ui/tabs-accordions',
                label: 'Tabs & Accordions',
                active: true,
            },
        ],
    });

    return (
        <>
            <Row>
                <Col xl={6}>
                    <DefaultTabs tabContents={tabContents} />
                </Col>
                <Col xl={6}>
                    <TabsJustified tabContents={tabContents} />
                </Col>
            </Row>
            <Row>
                <Col xl={6}>
                    <TabsVerticalLeft tabContents={tabContents} />
                </Col>
                <Col xl={6}>
                    <TabsVerticalRight tabContents={tabContents} />
                </Col>
            </Row>
            <Row>
                <Col xl={6}>
                    <TabsBordered tabContents={tabContents} />
                </Col>
                <Col xl={6}>
                    <TabsBordered tabContents={tabContents} justify />
                </Col>
            </Row>

            <Row>
                <Col xl={6}>
                    <Accordion1 accordionContent={accordionContent} />
                </Col>
                <Col xl={6}>
                    <Accordion2 accordionContent={accordionContent2} />
                </Col>
                <Col xl={6}>
                    <CustomCollapse />
                </Col>
                <Col xl={6}>
                    <HorizontalCollapse />
                </Col>
            </Row>
        </>
    );
};

export default TabsAccordions;
