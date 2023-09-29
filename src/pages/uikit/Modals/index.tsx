import { Col, Row } from 'react-bootstrap';

// hooks
import { usePageTitle } from '../../../hooks';

// components
import ModalSizes from './ModalSizes';
import ModalsWithPages from './ModalWithPages';
import ModalPositions from './ModalPositions';
import ModalWithAlerts from './ModalWithAlerts';
import MultipleModal from './MultipleModal';
import ToggleBetweenModals from './ToggleBetwenModals';
import StaticBackdropModal from './StaticBackDropModal';
import CustomModals from './CustomModals';

const Modals = () => {
    // set pagetitle
    usePageTitle({
        title: 'Modals',
        breadCrumbItems: [
            {
                path: '/base-ui/modals',
                label: 'Base UI',
            },
            {
                path: '/base-ui/modals',
                label: 'Modals',
                active: true,
            },
        ],
    });

    return (
        <>
            <Row>
                <Col md={6}>
                    <ModalSizes />
                </Col>
                <Col md={6}>
                    <ModalsWithPages />
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                    <ModalPositions />
                </Col>
                <Col md={6}>
                    <ModalWithAlerts />
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                    <MultipleModal />
                </Col>
                <Col md={6}>
                    <ToggleBetweenModals />
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                    <StaticBackdropModal />
                </Col>
                <Col md={6}>
                    <CustomModals />
                </Col>
            </Row>
        </>
    );
};

export default Modals;
