import { ButtonGroup, Dropdown } from 'react-bootstrap';

// type
import { Variant } from './types';

type ColorVariantDropdownProps = {
    variants: Variant[];
};

type DropdownVariant = Variant;

const ColorVariantDropdown = ({ variants }: ColorVariantDropdownProps) => {
    const colorVariantDropdown: DropdownVariant[] = [...variants];
    return (
        <>
            <h5 className="mb-1 mt-5">Variant</h5>
            <p className="text-muted font-13 mb-3">The best part is you can do this with any button variant, too:</p>

            {(colorVariantDropdown || []).map((color, index) => {
                return (
                    <Dropdown key={index.toString()} as={ButtonGroup} className="mb-2 me-1">
                        <Dropdown.Toggle variant={color}>
                            {color!.charAt(0).toUpperCase() + color!.slice(1)}
                            <i className="mdi mdi-chevron-down ms-1"></i>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="#">Action</Dropdown.Item>
                            <Dropdown.Item href="#">Another action</Dropdown.Item>
                            <Dropdown.Item href="#">Something else here</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item href="#">Separated link</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                );
            })}
        </>
    );
};

export default ColorVariantDropdown;
