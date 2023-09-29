import { Form } from 'react-bootstrap';
import * as layoutConstants from '../../constants/layout';

type LayoutTypesProps = {
    changeLayoutType: (value: string) => void;
    layoutType: string;
    layoutConstants: typeof layoutConstants.LayoutTypes;
};

const LayoutTypes = ({ changeLayoutType, layoutType, layoutConstants }: LayoutTypesProps) => {
    return (
        <>
            <h6 className="fw-medium font-14 mt-4 mb-2 pb-1">Layout</h6>

            <Form.Check className="form-check form-switch mb-1">
                <Form.Check.Input
                    type="radio"
                    onChange={(e) => changeLayoutType(e.target.value)}
                    name="layout-type"
                    value={layoutConstants.LAYOUT_VERTICAL}
                    id="vertical-layout"
                    checked={layoutType === layoutConstants.LAYOUT_VERTICAL}
                />
                <Form.Check.Label htmlFor="vertical-layout">Vertical Layout</Form.Check.Label>
            </Form.Check>

            <Form.Check className="form-check form-switch mb-1">
                <Form.Check.Input
                    type="radio"
                    onChange={(e) => changeLayoutType(e.target.value)}
                    name="layout-type"
                    value={layoutConstants.LAYOUT_HORIZONTAL}
                    id="horizontal-layout"
                    checked={layoutType === layoutConstants.LAYOUT_HORIZONTAL}
                />
                <Form.Check.Label htmlFor="horizontal-layout">Horizontal Layout</Form.Check.Label>
            </Form.Check>
        </>
    );
};

export default LayoutTypes;
