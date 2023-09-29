import { Col, Dropdown, Row } from 'react-bootstrap';

const SingleButtonDropdown = () => {
    return (
        <>
            <h5>Single button dropdowns</h5>
            <p className="text-muted font-13 mb-3">
                You can use <code>DropdownButton</code> to create a simple dropdown. Also, you can use prop{' '}
                <code>as</code> to create custom element typeof dropdown.
            </p>
            <Row>
                <Col sm={6}>
                    <Dropdown>
                        <Dropdown.Toggle variant="light" id="dropdown-basic">
                            Dropdown Button <i className="mdi mdi-chevron-down"></i>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Col>
                <Col sm={6}>
                    <Dropdown className="mt-sm-0 mt-2">
                        <Dropdown.Toggle as="a" variant="light" className="btn btn-light">
                            Dropdown link <i className="mdi mdi-chevron-down"></i>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Col>
            </Row>
        </>
    );
};

export default SingleButtonDropdown;
