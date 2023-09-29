import { Button, ButtonGroup, Dropdown } from 'react-bootstrap';

const DropstartVariationDropdowns = () => {
    return (
        <>
            <h5 className="mb-1 mt-5">Dropstart variation</h5>
            <p className="text-muted font-13 mb-3">
                Trigger dropdown menus left of their toggle elements, with the <code>drop</code> prop.
            </p>
            <Dropdown as={ButtonGroup} className="mb-2 me-1" drop="start">
                <Dropdown.Toggle variant="blue">
                    <i className="mdi mdi-chevron-left me-1"></i>Dropstart
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item href="#">Action</Dropdown.Item>
                    <Dropdown.Item href="#">Another action</Dropdown.Item>
                    <Dropdown.Item href="#">Something else here</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item href="#">Separated link</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <Dropdown as={ButtonGroup} className="mb-2" drop="end">
                <Dropdown.Toggle variant="success">
                    <i className="mdi mdi-chevron-left"></i>
                </Dropdown.Toggle>
                <Button variant="success">Split Dropend</Button>
                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </>
    );
};

export default DropstartVariationDropdowns;
