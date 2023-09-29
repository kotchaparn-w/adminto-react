import { Card, Col, Row } from 'react-bootstrap';

// hooks
import { usePageTitle } from '../../../hooks';

// component
import SingleButtonDropdown from './SingleButtonDropdown';
import ColorVariantDropdown from './ColorVariantDropdown';
import DropdownSizes from './DropdownSizes';
import SplitButtonDropdown from './SpiltButtonDropdown';
import DropendVariationDropdowns from './DropEndVariationDropdown';
import DropstartVariationDropdowns from './DropStartVariationDropdown';
import DropupVariationDropdowns from './DropUpVariationDropdown';
import DropdownMenuAlignment from './DropdownMenuAlignment';
import ActiveItemDropdown from './ActiveItemDropdown';
import DisabledItemDropdown from './DisabledItemDropdown';
import DropdownWithHeader from './DropdownWithHeader';
import CustomDropdown from './CustomDropdown';
import DropdownWithText from './DropdownWithText';

// type
import { Variant } from './types';

const variants: Variant[] = ['primary', 'secondary', 'success', 'info', 'warning', 'danger'];

const Dropdowns = () => {
    // set pagetitle
    usePageTitle({
        title: 'Dropdowns',
        breadCrumbItems: [
            {
                path: '/base-ui/dropdowns',
                label: 'Base UI',
            },
            {
                path: '/base-ui/dropdowns',
                label: 'Dropdowns',
                active: true,
            },
        ],
    });

    return (
        <Row>
            <Col xs={12}>
                <Card>
                    <Card.Body>
                        <h4 className="header-title">Examples</h4>
                        <p className="sub-header">
                            Toggle contextual overlays for displaying lists of links and more with the Bootstrap
                            dropdown plugin.
                        </p>

                        <Row>
                            <Col xl={6}>
                                <SingleButtonDropdown />
                                <ColorVariantDropdown variants={variants} />
                                <DropendVariationDropdowns />
                                <DropupVariationDropdowns />
                                <ActiveItemDropdown />
                                <DropdownWithHeader />
                                <CustomDropdown />
                            </Col>
                            <Col xl={6}>
                                <SplitButtonDropdown variants={variants} />
                                <DropdownSizes />
                                <DropstartVariationDropdowns />
                                <DropdownMenuAlignment />
                                <DisabledItemDropdown />
                                <DropdownWithText />
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
};

export default Dropdowns;
