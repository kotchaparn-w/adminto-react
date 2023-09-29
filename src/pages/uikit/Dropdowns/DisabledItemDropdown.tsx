import { ButtonGroup, Dropdown } from 'react-bootstrap';

const DisabledItemDropdown = () => {
    return (
        <>
            <h5 className="mb-1 mt-5">Disabled Item</h5>
            <p className="text-muted font-13 mb-3">
                Add <code>disabled</code> prop to item in the dropdown to <strong>style them as disabled</strong>.
            </p>

            <Dropdown as={ButtonGroup}>
                <Dropdown.Toggle>
                    Disabled <i className="mdi mdi-chevron-down"></i>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item>Regular link</Dropdown.Item>
                    <Dropdown.Item disabled>Disabled link</Dropdown.Item>
                    <Dropdown.Item>Another link</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </>
    );
};

export default DisabledItemDropdown;
