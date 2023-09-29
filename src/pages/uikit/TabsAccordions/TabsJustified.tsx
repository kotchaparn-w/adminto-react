import { Card, Nav, Tab } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// types
import { TabContent } from './types';

type TabsJustifiedProps = {
    tabContents: TabContent[];
};

const TabsJustified = ({ tabContents }: TabsJustifiedProps) => {
    return (
        <Card>
            <Card.Body>
                <h4 className="header-title mb-4">Tabs Justified</h4>

                <Tab.Container defaultActiveKey="Profile">
                    <Nav as="ul" variant="pills" justify className="navtab-bg">
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

                    <Tab.Content>
                        {(tabContents || []).map((tab, index) => {
                            return (
                                <Tab.Pane eventKey={tab.title} id={String(tab.id)} key={index.toString()}>
                                    <p>{tab.text}</p>
                                </Tab.Pane>
                            );
                        })}
                    </Tab.Content>
                </Tab.Container>
            </Card.Body>
        </Card>
    );
};

export default TabsJustified;
