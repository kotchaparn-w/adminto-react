import { ButtonGroup, Dropdown } from 'react-bootstrap';

const DropdownMenuAlignment = () => {
    return (
        <>
            <h5 className="mb-1 mt-5">Menu alignment</h5>
            <p className="text-muted font-13 mb-3">
                Passing <code>right</code> to the <code>menuAligh</code> prop on the
                <code> DropdownButton</code> to right align the dropdown menu.
            </p>

            <Dropdown as={ButtonGroup} className="mb-2 me-1" align="end">
                <Dropdown.Toggle variant="light">
                    Right-aligned <i className="mdi mdi-chevron-down"></i>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item href="#">Action</Dropdown.Item>
                    <Dropdown.Item href="#">Another action</Dropdown.Item>
                    <Dropdown.Item href="#">Something else here</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </>
    );
};

export default DropdownMenuAlignment;
