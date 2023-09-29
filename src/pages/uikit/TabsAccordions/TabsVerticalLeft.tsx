import { Card, Col, Nav, Row, Tab } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// types
import { TabContent } from './types';

type TabsVerticalLeftProps = {
    tabContents: TabContent[];
};

const TabsVerticalLeft = ({ tabContents }: TabsVerticalLeftProps) => {
    return (
        <Card>
            <Card.Body>
                <h4 className="header-title mb-4">Tabs Vertical Left</h4>

                <Row>
                    <Tab.Container defaultActiveKey="Home">
                        <Col sm={3}>
                            <Nav as="ul" variant="pills" className="flex-column">
                                {(tabContents || []).map((tab, index) => {
                                    return (
                                        <Nav.Item as="li" key={index.toString()}>
                                            <Nav.Link as={Link} to="#" className="cursor-pointer" eventKey={tab.title}>
                                                {tab.title}
                                            </Nav.Link>
                                        </Nav.Item>
                                    );
                                })}
                            </Nav>
                        </Col>

                        <Col sm={9}>
                            <Tab.Content className="pt-0">
                                {(tabContents || []).map((tab, index) => {
                                    return (
                                        <Tab.Pane eventKey={tab.title} id={String(tab.id)} key={index.toString()}>
                                            <p>{tab.text}</p>
                                        </Tab.Pane>
                                    );
                                })}
                            </Tab.Content>
                        </Col>
                    </Tab.Container>
                </Row>
            </Card.Body>
        </Card>
    );
};

export default TabsVerticalLeft;
