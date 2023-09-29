import { ButtonGroup, Dropdown } from 'react-bootstrap';

const DropdownWithHeader = () => {
    return (
        <>
            <h5 className="mb-1 mt-5">Headers</h5>
            <p className="text-muted font-13 mb-3">Add a header to label sections of actions.</p>

            <Dropdown as={ButtonGroup}>
                <Dropdown.Toggle variant="secondary">
                    Header <i className="mdi mdi-chevron-down"></i>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Header>Dropdown header</Dropdown.Header>
                    <Dropdown.Item>Action</Dropdown.Item>
                    <Dropdown.Item>Another action</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </>
    );
};

export default DropdownWithHeader;
