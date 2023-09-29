import { Button, ButtonGroup, Col, Dropdown, Row } from 'react-bootstrap';

const ButtonGroups = () => {
    return (
        <>
            <h4 className="header-title mt-4">Button Group</h4>
            <p className="sub-header">
                Wrap a series of buttons with <code>&lt;Button&gt;</code> in <code>&lt;ButtonGroup&gt;</code>.
            </p>

            <ButtonGroup className="mb-2">
                <Button variant="secondary">Left</Button>
                <Button variant="secondary">Middle</Button>
                <Button variant="secondary">Right</Button>
            </ButtonGroup>

            <br />

            <ButtonGroup className="mb-2 me-1">
                <Button variant="secondary">1</Button>
                <Button variant="secondary">2</Button>
                <Button variant="secondary">3</Button>
                <Button variant="secondary">4</Button>
            </ButtonGroup>
            <ButtonGroup className="mb-2 me-1">
                <Button variant="secondary">5</Button>
                <Button variant="secondary">6</Button>
                <Button variant="secondary">7</Button>
            </ButtonGroup>
            <ButtonGroup className="mb-2">
                <Button variant="secondary">8</Button>
            </ButtonGroup>

            <br />
            <ButtonGroup className="mb-2">
                <Button variant="secondary">1</Button>
                <Button variant="primary">2</Button>
                <Button variant="secondary">3</Button>
                <Dropdown as={ButtonGroup}>
                    <Dropdown.Toggle variant="secondary">
                        Dropdown <i className="mdi mdi-chevron-down"></i>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#">Dropdown link</Dropdown.Item>
                        <Dropdown.Item href="#">Dropdown link</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </ButtonGroup>

            <br />

            <Row>
                <Col md={2}>
                    <ButtonGroup vertical>
                        <Button variant="secondary">Top</Button>
                        <Button variant="secondary">Middle</Button>
                        <Button variant="secondary">Bottom</Button>
                    </ButtonGroup>
                </Col>
                <Col md={3}>
                    <ButtonGroup vertical>
                        <Button variant="secondary">Button 1</Button>
                        <Button variant="secondary">Button 2</Button>
                        <Dropdown as={ButtonGroup}>
                            <Dropdown.Toggle variant="secondary">
                                Button 3 <i className="mdi mdi-chevron-down"></i>
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#">Dropdown link</Dropdown.Item>
                                <Dropdown.Item href="#">Dropdown link</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </ButtonGroup>
                </Col>
            </Row>
        </>
    );
};

export default ButtonGroups;
