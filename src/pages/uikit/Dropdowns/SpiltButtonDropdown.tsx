import { Button, ButtonGroup, Dropdown } from 'react-bootstrap';

// types
import { Variant } from './types';

type SpiltButtonDropdownProps = {
    variants: Variant[];
};

type DropdownVariant = Variant;

const SplitButtonDropdown = ({ variants }: SpiltButtonDropdownProps) => {
    const splitButtonDropdown: DropdownVariant[] = [...variants];

    return (
        <>
            <h5 className="mb-1">Split button dropdowns</h5>
            <p className="text-muted font-13 mb-3">
                You can split button dropdowns by adding <code>SplitButton</code>.
            </p>
            {(splitButtonDropdown || []).map((color, index) => {
                return (
                    <Dropdown key={index.toString()} as={ButtonGroup} className="me-1 mb-2">
                        <Button variant={color}>{color!.charAt(0).toUpperCase() + color!.slice(1)}</Button>

                        <Dropdown.Toggle split variant={color}>
                            <i className="mdi mdi-chevron-down"></i>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                            <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                            <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                );
            })}
        </>
    );
};

export default SplitButtonDropdown;
