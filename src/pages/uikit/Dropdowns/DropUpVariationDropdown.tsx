import { Button, ButtonGroup, Dropdown } from 'react-bootstrap';

const DropupVariationDropdowns = () => {
    return (
        <>
            <h5 className="mb-1 mt-5">Dropup variation</h5>
            <p className="text-muted font-13 mb-3">
                Trigger dropdown menus above of their toggle elements, with the <code>drop</code> prop.
            </p>
            <Dropdown as={ButtonGroup} className="mb-2 me-1" drop="up">
                <Dropdown.Toggle variant="light">
                    Dropup <i className="mdi mdi-chevron-up"></i>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item href="#">Action</Dropdown.Item>
                    <Dropdown.Item href="#">Another action</Dropdown.Item>
                    <Dropdown.Item href="#">Something else here</Dropdown.Item>
                    <Dropdown.Divider as="div" />
                    <Dropdown.Item href="#">Separated link</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <Dropdown as={ButtonGroup} className="mb-2" drop="up">
                <Button variant="light">Split Dropup</Button>
                <Dropdown.Toggle variant="light">
                    <i className="mdi mdi-chevron-up"></i>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#">Action</Dropdown.Item>
                    <Dropdown.Item href="#">Another action</Dropdown.Item>
                    <Dropdown.Item href="#">Something else here</Dropdown.Item>
                    <Dropdown.Divider as="div" />
                    <Dropdown.Item href="#">Separated link</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </>
    );
};

export default DropupVariationDropdowns;
