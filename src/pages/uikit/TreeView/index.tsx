import { Card, Col, Dropdown, Row } from 'react-bootstrap';
import DeniReactTreeView from 'deni-react-treeview';

// hooks
import { usePageTitle } from '../../../hooks';

// dummy data
import { basicNodes, checkboxNodes } from './data';

const TreeViewExample = () => {
    // set pagetitle
    usePageTitle({
        title: 'Tree View',
        breadCrumbItems: [
            {
                path: '/extended-ui/treeview',
                label: 'Extended UI',
            },
            {
                path: '/extended-ui/treeview',
                label: 'Tree View',
                active: true,
            },
        ],
    });

    return (
        <Row>
            <Col md={6}>
                <Card>
                    <Card.Body>
                        <Dropdown className="float-end" align="end">
                            <Dropdown.Toggle as="a" className="cursor-pointer card-drop">
                                <i className="mdi mdi-dots-vertical"></i>
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item>Action</Dropdown.Item>
                                <Dropdown.Item>Anothther Action</Dropdown.Item>
                                <Dropdown.Item>Something Else</Dropdown.Item>
                                <Dropdown.Item>Separated link</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <h4 className="header-title mt-0 mb-3">Basic Tree</h4>
                        <DeniReactTreeView items={basicNodes} showRoot />
                    </Card.Body>
                </Card>
            </Col>
            <Col md={6}>
                <Card>
                    <Card.Body>
                        <Dropdown className="float-end" align="end">
                            <Dropdown.Toggle as="a" className="cursor-pointer card-drop">
                                <i className="mdi mdi-dots-vertical"></i>
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item>Action</Dropdown.Item>
                                <Dropdown.Item>Anothther Action</Dropdown.Item>
                                <Dropdown.Item>Something Else</Dropdown.Item>
                                <Dropdown.Item>Separated link</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <h4 className="header-title mt-0 mb-3">Checkbox Tree</h4>
                        <DeniReactTreeView items={checkboxNodes} showCheckbox showRoot />
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
};

export default TreeViewExample;
