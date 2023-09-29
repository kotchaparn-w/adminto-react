import { ButtonGroup, Dropdown } from 'react-bootstrap';

const DropdownWithText = () => {
    return (
        <>
            <h5 className="mb-1 mt-5">Text</h5>
            <p className="text-muted font-13 mb-3">
                Place any freeform text within a dropdown menu with text and use spacing utilities. Note that you’ll
                likely need additional sizing styles to constrain the menu width.
            </p>

            <Dropdown as={ButtonGroup}>
                <Dropdown.Toggle>
                    Text Dropdown <i className="mdi mdi-chevron-down"></i>
                </Dropdown.Toggle>
                <Dropdown.Menu className="p-3 text-muted" style={{ maxWidth: '200px' }}>
                    <p>Some example text that's free-flowing within the dropdown menu.</p>
                    <p className="mb-0">And this is more example text.</p>
                </Dropdown.Menu>
            </Dropdown>
        </>
    );
};

export default DropdownWithText;
