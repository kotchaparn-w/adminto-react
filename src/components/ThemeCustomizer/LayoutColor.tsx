import { Form } from 'react-bootstrap';
import * as layoutConstants from '../../constants/layout';

type LayoutColorProps = {
    changeLayoutColorScheme: (value: string) => void;
    layoutColor: string;
    layoutConstants: typeof layoutConstants.LayoutColor;
};

const LayoutColor = ({ changeLayoutColorScheme, layoutColor, layoutConstants }: LayoutColorProps) => {
    return (
        <>
            <h6 className="fw-medium font-14 mt-4 mb-2 pb-1">Color Scheme</h6>

            <Form.Check className="form-check form-switch mb-1">
                <Form.Check.Input
                    type="radio"
                    name="color"
                    id="light-check"
                    value={layoutConstants.LAYOUT_COLOR_LIGHT}
                    onChange={(e) => changeLayoutColorScheme(e.target.value)}
                    checked={layoutColor === layoutConstants.LAYOUT_COLOR_LIGHT}
                />
                <Form.Check.Label htmlFor="fluid-check">Light Mode</Form.Check.Label>
            </Form.Check>

            <Form.Check className="form-check form-switch mb-1">
                <Form.Check.Input
                    type="radio"
                    name="color"
                    id="dark-check"
                    value={layoutConstants.LAYOUT_COLOR_DARK}
                    onChange={(e) => changeLayoutColorScheme(e.target.value)}
                    checked={layoutColor === layoutConstants.LAYOUT_COLOR_DARK}
                />
                <Form.Check.Label htmlFor="boxed-check">Dark Mode</Form.Check.Label>
            </Form.Check>
        </>
    );
};

export default LayoutColor;
