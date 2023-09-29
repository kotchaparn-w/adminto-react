import { Card, Nav, Tab } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// types
import { TabContent } from './types';

type DefaultTabsProps = {
    tabContents: TabContent[];
};

const DefaultTabs = ({ tabContents }: DefaultTabsProps) => {
    return (
        <Card>
            <Card.Body>
                <h4 className="header-title mb-4">Default Tabs</h4>

                <Tab.Container defaultActiveKey="Profile">
                    <Nav as="ul" variant="tabs">
                        {(tabContents || []).map((tab, index) => {
                            return (
                                <Nav.Item as="li" key={index.toString()}>
                                    <Nav.Link as={Link} to="#" eventKey={tab.title} className="cursor-pointer">
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

export default DefaultTabs;
