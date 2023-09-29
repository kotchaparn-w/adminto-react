import { Col, Row } from 'react-bootstrap';

// hooks
import { usePageTitle } from '../../../hooks';

// component
import CardWithImage1 from './CardWithImage1';
import CardWithImage2 from './CardWithImage2';
import CardWithImage3 from './CardWithImage3';
import CardWithTitleAndImage from './CardWithTitleAndImage';
import CardWithSpecialTitle from './CardWithSpecialTitle';
import CardWithHeader from './CardWithHeader';
import CardWithHeaderAndQuote from './CardWithHeaderAndQuote';
import CardWithHeaderAndFooter from './CardWithHeaderAndFooter';
import CardWithImageCaps from './CardWithImageCaps';
import CardWithImageOverlay from './CardWithImageOverlay';
import ColoredCards from './ColoredCard';
import ColoredTextCards from './ColoredTextCard';
import CardGroups from './CardGroup';
import CardWithNavigation from './CardWithNavigation';
import GridCards from './GridCards';

// images
import cardImg1 from '../../../assets/images/gallery/5.jpg';
import cardImg2 from '../../../assets/images/gallery/7.jpg';

// dummy data
import { CardGroupDetails } from './data';

const Cards = () => {
    // set pagetitle
    usePageTitle({
        title: 'Cards',
        breadCrumbItems: [
            {
                path: '/base-ui/cards',
                label: 'Base UI',
            },
            {
                path: '/base-ui/cards',
                label: 'Cards',
                active: true,
            },
        ],
    });

    return (
        <>
            <Row>
                <Col xl={3} md={6}>
                    <CardWithImage1 />
                </Col>
                <Col xl={3} md={6}>
                    <CardWithImage2 />
                </Col>
                <Col xl={3} md={6}>
                    <CardWithImage3 />
                </Col>
                <Col xl={3} md={6}>
                    <CardWithTitleAndImage />
                </Col>
            </Row>
            <Row>
                <Col sm={6}>
                    <CardWithSpecialTitle align="start" />
                </Col>
                <Col sm={6}>
                    <CardWithSpecialTitle align="start" />
                </Col>
            </Row>
            <Row>
                <Col md={4}>
                    <CardWithSpecialTitle align="start" />
                </Col>
                <Col md={4}>
                    <CardWithSpecialTitle align="center" />
                </Col>
                <Col md={4}>
                    <CardWithSpecialTitle align="end" />
                </Col>
            </Row>
            <Row>
                <Col md={4}>
                    <CardWithHeader />
                </Col>
                <Col md={4}>
                    <CardWithHeaderAndQuote />
                </Col>
                <Col md={4}>
                    <CardWithHeaderAndFooter />
                </Col>
            </Row>
            <Row>
                <Col md={4}>
                    <CardWithImageCaps position={'top'} image={cardImg1} />
                </Col>
                <Col md={4}>
                    <CardWithImageCaps position={'bottom'} image={cardImg2} />
                </Col>
                <Col md={4}>
                    <CardWithImageOverlay />
                </Col>
            </Row>
            <Row>
                <ColoredCards />
            </Row>
            <Row>
                <ColoredTextCards />
            </Row>
            <Row>
                <h4 className="mt-2 mb-3">Card Group</h4>
                <CardGroups details={CardGroupDetails} />
            </Row>
            <Row>
                <Col xs={12}>
                    <h4 className="mt-2 mb-3">Navigation</h4>
                    <Row>
                        <Col md={6}>
                            <CardWithNavigation variant="tabs" />
                        </Col>
                        <Col md={6}>
                            <CardWithNavigation variant="pills" />
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col xs={12}>
                    <h4 className="mt-2 mb-3">Navigation</h4>
                    <Row>
                        <GridCards />
                    </Row>
                </Col>
            </Row>
        </>
    );
};

export default Cards;
