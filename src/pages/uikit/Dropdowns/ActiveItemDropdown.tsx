import { ButtonGroup, Dropdown } from 'react-bootstrap';

const ActiveItemDropdown = () => {
    return (
        <>
            <h5 className="mb-1 mt-5">Active Item</h5>
            <p className="text-muted font-13 mb-3">
                Add <code>active</code> prop to item in the dropdown to <strong>style them as active</strong>.
            </p>

            <Dropdown as={ButtonGroup}>
                <Dropdown.Toggle variant="secondary">
                    Active Item <i className="mdi mdi-chevron-down"></i>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item>Regular link</Dropdown.Item>
                    <Dropdown.Item active>Active link</Dropdown.Item>
                    <Dropdown.Item>Another link</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </>
    );
};

export default ActiveItemDropdown;
