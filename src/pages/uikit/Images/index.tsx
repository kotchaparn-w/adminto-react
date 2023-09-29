import { Card, Col, Row } from 'react-bootstrap';

// hooks
import { usePageTitle } from '../../../hooks';

// component
import ImageShapes from './ImageShape';
import ImageSizes from './ImageSizes';

const Images = () => {
    // set pagetitle
    usePageTitle({
        title: 'Images',
        breadCrumbItems: [
            {
                path: '/base-ui/images',
                label: 'Base UI',
            },
            {
                path: '/base-ui/images',
                label: 'Images',
                active: true,
            },
        ],
    });

    return (
        <Row>
            <Col xs={12}>
                <Card>
                    <Card.Body>
                        <Row>
                            <Col xl={6}>
                                <ImageShapes />
                            </Col>
                            <Col xl={6}>
                                <ImageSizes />
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
};

export default Images;
