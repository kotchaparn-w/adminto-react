import { Row, Col } from 'react-bootstrap';

// hooks
import { usePageTitle } from '../../../hooks';

// components
import DefaultOffcanvas from './DefaultOffcanvas';
import OffCanvasWithBackdrop from './OffCanvasWithBackdrop';
import OffcanvasPlacement from './OffcanvasPlacement';

// dummy data
import { backdropOptions, placementOptions } from './data';

const Offcanvases = () => {
    // set pagetitle
    usePageTitle({
        title: 'Offcanvas',
        breadCrumbItems: [
            {
                path: '/base-ui/offcanvas',
                label: 'Base UI',
            },
            {
                path: '/base-ui/offcanvas',
                label: 'Offcanvas',
                active: true,
            },
        ],
    });

    return (
        <Row>
            <Col md={6}>
                <DefaultOffcanvas />
                <OffCanvasWithBackdrop options={backdropOptions} />
            </Col>

            <Col md={6}>
                <OffcanvasPlacement options={placementOptions} />
            </Col>
        </Row>
    );
};

export default Offcanvases;
