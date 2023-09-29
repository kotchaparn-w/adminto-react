import { Col, Row } from 'react-bootstrap';

// hooks
import { usePageTitle } from '../../../hooks';

// component
import BasicPlaceholders from './BasicPlaceholders';
import PlaceholdersAnimation from './PlaceholdersAnimation';
import PlaceholdersConcept from './PlaceholdersConcept';
import PlaceholdersWidth from './PlaceholdersWidth';
import PlaceholdersWithSizes from './PlaceholdersWithSizes';
import PlaceholdersWithVariants from './PlaceholdersWithVariants';

const Placeholders = () => {
    // set pagetitle
    usePageTitle({
        title: 'Placeholders',
        breadCrumbItems: [
            {
                path: '/base-ui/placeholders',
                label: 'Base UI',
            },
            {
                path: '/base-ui/placeholders',
                label: 'Placeholders',
                active: true,
            },
        ],
    });

    return (
        <Row>
            <Col xl={6}>
                <BasicPlaceholders />
                <PlaceholdersWidth />
                <PlaceholdersAnimation />
            </Col>
            <Col xl={6}>
                <PlaceholdersWithVariants />
                <PlaceholdersConcept />
                <PlaceholdersWithSizes />
            </Col>
        </Row>
    );
};

export default Placeholders;
