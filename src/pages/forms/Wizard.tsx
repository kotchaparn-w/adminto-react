import { useState } from 'react';
import { Row, Col, Card, Form, Button, ProgressBar, Tab, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Wizard, Steps, Step } from 'react-albus';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

// hooks
import { usePageTitle } from '../../hooks';

// components
import { FormInput } from '../../components/form/';

const BasicWizard = () => {
    // active tab key
    const [key, setKey] = useState<string | null>('account');

    return (
        <Card>
            <Card.Body>
                <h4 className="header-title mb-3"> Basic Wizard</h4>

                <Wizard>
                    <Steps>
                        <Tab.Container
                            id="left-tabs-example"
                            defaultActiveKey="account"
                            activeKey={key ? key : 'account'}
                            onSelect={(k) => setKey(k)}
                        >
                            <Nav variant="pills" as="ul" className="nav-justified bg-light form-wizard-header mb-4">
                                <Nav.Item as="li">
                                    <Nav.Link as={Link} to="#" eventKey="account" className="rounded-0 pt-2 pb-2">
                                        <i className="mdi mdi-account-circle me-1"></i>
                                        <span className="d-none d-sm-inline">Account</span>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Nav.Link as={Link} to="#" eventKey="profile" className="rounded-0 pt-2 pb-2">
                                        <i className="mdi mdi-face-profile me-1"></i>
                                        <span className="d-none d-sm-inline">Profile</span>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Nav.Link as={Link} to="#" eventKey="contact" className="rounded-0 pt-2 pb-2">
                                        <i className="mdi mdi-checkbox-marked-circle-outline me-1"></i>
                                        <span className="d-none d-sm-inline">Finish</span>
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content className="pb-0 mb-0 pt-0">
                                <Tab.Pane eventKey="account">
                                    <Step
                                        id="account"
                                        render={({ next }) => (
                                            <Form>
                                                <Form.Group as={Row} className="mb-3">
                                                    <Form.Label htmlFor="uname" column md={3}>
                                                        User name
                                                    </Form.Label>
                                                    <Col md={9}>
                                                        <Form.Control
                                                            type="text"
                                                            name="uname"
                                                            id="uname"
                                                            defaultValue="Coderthemes"
                                                        />
                                                    </Col>
                                                </Form.Group>

                                                <Form.Group as={Row} className="mb-3">
                                                    <Form.Label htmlFor="examplePassword" column md={3}>
                                                        Password
                                                    </Form.Label>
                                                    <Col md={9}>
                                                        <Form.Control
                                                            type="password"
                                                            name="examplePassword"
                                                            id="examplePassword1"
                                                            defaultValue="12345"
                                                        />
                                                    </Col>
                                                </Form.Group>

                                                <Form.Group as={Row} className="mb-3">
                                                    <Form.Label htmlFor="examplerePassword" column md={3}>
                                                        Re-Password
                                                    </Form.Label>
                                                    <Col md={9}>
                                                        <Form.Control
                                                            type="password"
                                                            name="exampleRepassword"
                                                            id="examplerePassword1"
                                                            defaultValue="12345"
                                                        />
                                                    </Col>
                                                </Form.Group>

                                                <ul className="pager wizard mb-0 list-inline text-end mt-2">
                                                    <li className="next list-inline-item">
                                                        <Button
                                                            onClick={() => {
                                                                setKey('profile');
                                                                next();
                                                            }}
                                                            variant="secondary"
                                                        >
                                                            Next
                                                        </Button>
                                                    </li>
                                                </ul>
                                            </Form>
                                        )}
                                    />
                                </Tab.Pane>
                                <Tab.Pane eventKey="profile">
                                    <Step
                                        id="profile"
                                        render={({ next, previous }) => (
                                            <Form>
                                                <Form.Group as={Row} className="mb-3">
                                                    <Form.Label htmlFor="fname" column md={3}>
                                                        First name
                                                    </Form.Label>
                                                    <Col md={9}>
                                                        <Form.Control
                                                            type="text"
                                                            name="fname"
                                                            id="fname1"
                                                            defaultValue={'Francis'}
                                                        />
                                                    </Col>
                                                </Form.Group>

                                                <Form.Group as={Row} className="mb-3">
                                                    <Form.Label htmlFor="lname" column md={3}>
                                                        Last name
                                                    </Form.Label>
                                                    <Col md={9}>
                                                        <Form.Control
                                                            type="text"
                                                            name="lname"
                                                            id="lname1"
                                                            defaultValue={'Brinkman'}
                                                        />
                                                    </Col>
                                                </Form.Group>

                                                <Form.Group as={Row} className="mb-3">
                                                    <Form.Label htmlFor="phone" column md={3}>
                                                        Email
                                                    </Form.Label>
                                                    <Col md={9}>
                                                        <Form.Control
                                                            type="email"
                                                            name="exampleemail"
                                                            id="exampleemail"
                                                            defaultValue={'cory1979@hotmail.com'}
                                                        />
                                                    </Col>
                                                </Form.Group>

                                                <ul className="pager wizard mb-0 list-inline mt-2">
                                                    <li className="previous list-inline-item">
                                                        <Button
                                                            onClick={() => {
                                                                setKey('account');
                                                                previous();
                                                            }}
                                                            variant="secondary"
                                                        >
                                                            Previous
                                                        </Button>
                                                    </li>
                                                    <li className="next list-inline-item float-end">
                                                        <Button
                                                            onClick={() => {
                                                                setKey('contact');
                                                                next();
                                                            }}
                                                            variant="secondary"
                                                        >
                                                            Next
                                                        </Button>
                                                    </li>
                                                </ul>
                                            </Form>
                                        )}
                                    />
                                </Tab.Pane>
                                <Tab.Pane eventKey="contact">
                                    <Step
                                        id="contact"
                                        render={({ previous }) => (
                                            <Form>
                                                <Row>
                                                    <Col sm={12}>
                                                        <div className="text-center">
                                                            <h2 className="mt-0">
                                                                <i className="mdi mdi-check-all"></i>
                                                            </h2>
                                                            <h3 className="mt-0">Thank you !</h3>

                                                            <p className="w-75 mb-2 mx-auto">
                                                                Quisque nec turpis at urna dictum luctus. Suspendisse
                                                                convallis dignissim eros at volutpat. In egestas mattis
                                                                dui. Aliquam mattis dictum aliquet.
                                                            </p>

                                                            <div className="mb-3">
                                                                <Form.Check
                                                                    type="checkbox"
                                                                    id="check-box-1"
                                                                    className="d-inline-block"
                                                                >
                                                                    <Form.Check.Input type="checkbox" />{' '}
                                                                    <Form.Check.Label>
                                                                        I agree with the Terms and Conditions
                                                                    </Form.Check.Label>
                                                                </Form.Check>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                </Row>
                                                <ul className="pager wizard mb-0 list-inline">
                                                    <li className="previous list-inline-item">
                                                        <Button
                                                            onClick={() => {
                                                                setKey('profile');
                                                                previous();
                                                            }}
                                                            variant="secondary"
                                                        >
                                                            Previous
                                                        </Button>
                                                    </li>
                                                    <li className="next list-inline-item float-end">
                                                        <Button variant="primary">Submit</Button>
                                                    </li>
                                                </ul>
                                            </Form>
                                        )}
                                    />
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Steps>
                </Wizard>
            </Card.Body>
        </Card>
    );
};

const ButtonWizard = () => {
    //active tab key
    const [key, setKey] = useState<string | null>('account');
    return (
        <Card>
            <Card.Body>
                <h4 className="header-title mb-3"> Button Wizard</h4>

                <Wizard>
                    <Steps>
                        <Tab.Container
                            id="left-tabs-example"
                            defaultActiveKey="account"
                            activeKey={key ? key : 'account'}
                            onSelect={(k) => setKey(k)}
                        >
                            <Nav variant="pills" as="ul" className="nav-justified bg-light form-wizard-header mb-4">
                                <Nav.Item as="li">
                                    <Nav.Link as={Link} to="#" eventKey="account" className="rounded-0 pt-2 pb-2">
                                        <i className="mdi mdi-account-circle me-1"></i>
                                        <span className="d-none d-sm-inline">Account</span>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Nav.Link as={Link} to="#" eventKey="profile" className="rounded-0 pt-2 pb-2">
                                        <i className="mdi mdi-face-profile me-1"></i>
                                        <span className="d-none d-sm-inline">Profile</span>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Nav.Link as={Link} to="#" eventKey="contact" className="rounded-0 pt-2 pb-2">
                                        <i className="mdi mdi-checkbox-marked-circle-outline me-1"></i>
                                        <span className="d-none d-sm-inline">Finish</span>
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content className="pb-0 mb-0 pt-0">
                                <Tab.Pane eventKey="account">
                                    <Step
                                        id="account"
                                        render={({ next }) => (
                                            <Form>
                                                <Form.Group as={Row} className="mb-3">
                                                    <Form.Label htmlFor="uname2" column md={3}>
                                                        User name
                                                    </Form.Label>
                                                    <Col md={9}>
                                                        <Form.Control
                                                            type="text"
                                                            name="uname2"
                                                            id="uname2"
                                                            defaultValue="Coderthemes"
                                                        />
                                                    </Col>
                                                </Form.Group>

                                                <Form.Group as={Row} className="mb-3">
                                                    <Form.Label htmlFor="examplePassword" column md={3}>
                                                        Password
                                                    </Form.Label>
                                                    <Col md={9}>
                                                        <Form.Control
                                                            type="password"
                                                            name="examplePassword"
                                                            id="examplePassword2"
                                                            placeholder="password placeholder"
                                                            defaultValue="12345"
                                                        />
                                                    </Col>
                                                </Form.Group>

                                                <Form.Group as={Row} className="mb-3">
                                                    <Form.Label htmlFor="examplerePassword" column md={3}>
                                                        Re-Password
                                                    </Form.Label>
                                                    <Col md={9}>
                                                        <Form.Control
                                                            type="password"
                                                            name="exampleRepassword"
                                                            id="examplerePassword2"
                                                            placeholder="password"
                                                            defaultValue="12345"
                                                        />
                                                    </Col>
                                                </Form.Group>

                                                <div className="float-end">
                                                    <Button
                                                        onClick={() => {
                                                            setKey('profile');
                                                            next();
                                                        }}
                                                        variant="secondary"
                                                        className="button-next me-1"
                                                    >
                                                        Next
                                                    </Button>

                                                    <Button
                                                        onClick={() => {
                                                            setKey('contact');
                                                        }}
                                                        variant="secondary"
                                                        className="button-last"
                                                    >
                                                        Last
                                                    </Button>
                                                </div>
                                                <div className="float-start">
                                                    <Button
                                                        onClick={() => {
                                                            setKey('account');
                                                        }}
                                                        variant="secondary"
                                                        className="button-first me-1"
                                                    >
                                                        First
                                                    </Button>

                                                    <Button
                                                        disabled={true}
                                                        variant="secondary"
                                                        className="button-previous"
                                                    >
                                                        Previous
                                                    </Button>
                                                </div>

                                                <div className="clearfix"></div>
                                            </Form>
                                        )}
                                    />
                                </Tab.Pane>
                                <Tab.Pane eventKey="profile">
                                    <Step
                                        id="profile"
                                        render={({ next, previous }) => (
                                            <Form>
                                                <Form.Group as={Row} className="mb-3">
                                                    <Form.Label htmlFor="fname2" column md={3}>
                                                        First name
                                                    </Form.Label>
                                                    <Col md={9}>
                                                        <Form.Control
                                                            type="text"
                                                            name="fname2"
                                                            id="fname2"
                                                            placeholder="Enter first name"
                                                        />
                                                    </Col>
                                                </Form.Group>

                                                <Form.Group as={Row} className="mb-3">
                                                    <Form.Label htmlFor="lname2" column md={3}>
                                                        Last name
                                                    </Form.Label>
                                                    <Col md={9}>
                                                        <Form.Control
                                                            type="text"
                                                            name="lname2"
                                                            id="lname2"
                                                            placeholder="enter last name"
                                                        />
                                                    </Col>
                                                </Form.Group>

                                                <Form.Group as={Row} className="mb-3">
                                                    <Form.Label htmlFor="exampleemail2" column md={3}>
                                                        Email
                                                    </Form.Label>
                                                    <Col md={9}>
                                                        <Form.Control
                                                            type="email"
                                                            name="exampleemail2"
                                                            id="exampleemail2"
                                                            defaultValue={'cory1979@hotmail.com'}
                                                        />
                                                    </Col>
                                                </Form.Group>

                                                <div className="float-end">
                                                    <Button
                                                        onClick={() => {
                                                            setKey('contact');
                                                            next();
                                                        }}
                                                        variant="secondary"
                                                        className="button-next me-1"
                                                    >
                                                        Next
                                                    </Button>

                                                    <Button
                                                        onClick={() => {
                                                            setKey('contact');
                                                        }}
                                                        variant="secondary"
                                                        className="button-last"
                                                    >
                                                        Last
                                                    </Button>
                                                </div>
                                                <div className="float-start">
                                                    <Button
                                                        onClick={() => {
                                                            setKey('account');
                                                        }}
                                                        variant="secondary"
                                                        className="button-first me-1"
                                                    >
                                                        First
                                                    </Button>

                                                    <Button
                                                        onClick={() => {
                                                            setKey('account');
                                                            previous();
                                                        }}
                                                        variant="secondary"
                                                        className="button-previous"
                                                    >
                                                        Previous
                                                    </Button>
                                                </div>

                                                <div className="clearfix"></div>
                                            </Form>
                                        )}
                                    />
                                </Tab.Pane>
                                <Tab.Pane eventKey="contact">
                                    <Step
                                        id="contact"
                                        render={({ previous }) => (
                                            <Form>
                                                <Row>
                                                    <Col sm={12}>
                                                        <div className="text-center">
                                                            <h2 className="mt-0">
                                                                <i className="mdi mdi-check-all"></i>
                                                            </h2>
                                                            <h3 className="mt-0">Thank you !</h3>

                                                            <p className="w-75 mb-2 mx-auto">
                                                                Quisque nec turpis at urna dictum luctus. Suspendisse
                                                                convallis dignissim eros at volutpat. In egestas mattis
                                                                dui. Aliquam mattis dictum aliquet.
                                                            </p>

                                                            <div className="mb-3">
                                                                <Form.Check
                                                                    type="checkbox"
                                                                    id="check-box-2"
                                                                    className="d-inline-block"
                                                                >
                                                                    <Form.Check.Input type="checkbox" />{' '}
                                                                    <Form.Check.Label>
                                                                        I agree with the Terms and Conditions
                                                                    </Form.Check.Label>
                                                                </Form.Check>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                </Row>
                                                <div className="float-end">
                                                    <Button
                                                        disabled={true}
                                                        variant="secondary"
                                                        className="button-next me-1"
                                                    >
                                                        Next
                                                    </Button>

                                                    <Button
                                                        onClick={() => {
                                                            setKey('contact');
                                                        }}
                                                        variant="secondary"
                                                        className="button-last"
                                                    >
                                                        Last
                                                    </Button>
                                                </div>
                                                <div className="float-start">
                                                    <Button
                                                        onClick={() => {
                                                            setKey('account');
                                                        }}
                                                        variant="secondary"
                                                        className="button-first me-1"
                                                    >
                                                        First
                                                    </Button>

                                                    <Button
                                                        onClick={() => {
                                                            setKey('profile');
                                                            previous();
                                                        }}
                                                        variant="secondary"
                                                        className="button-previous"
                                                    >
                                                        Previous
                                                    </Button>
                                                </div>

                                                <div className="clearfix"></div>
                                            </Form>
                                        )}
                                    />
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Steps>
                </Wizard>
            </Card.Body>
        </Card>
    );
};

const WizardWithProgressbar = () => {
    //active tab key
    const [key, setKey] = useState<string | null>('account');
    const tabs: string[] = ['account', 'profile', 'contact'];

    return (
        <Card>
            <Card.Body>
                <h4 className="header-title mb-3">Wizard with Progress bar</h4>

                <Wizard
                    render={({ step, steps }) => (
                        <Steps>
                            <Tab.Container
                                id="left-tabs-example"
                                defaultActiveKey="account"
                                activeKey={key ? key : 'account'}
                                onSelect={(k) => setKey(k)}
                            >
                                <Nav variant="pills" as="ul" className="nav-justified bg-light form-wizard-header mb-3">
                                    <Nav.Item as="li">
                                        <Nav.Link as={Link} to="#" eventKey="account" className="rounded-0 pt-2 pb-2">
                                            <i className="mdi mdi-account-circle me-1"></i>
                                            <span className="d-none d-sm-inline">Account</span>
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                        <Nav.Link as={Link} to="#" eventKey="profile" className="rounded-0 pt-2 pb-2">
                                            <i className="mdi mdi-face-profile me-1"></i>
                                            <span className="d-none d-sm-inline">Profile</span>
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                        <Nav.Link as={Link} to="#" eventKey="contact" className="rounded-0 pt-2 pb-2">
                                            <i className="mdi mdi-checkbox-marked-circle-outline me-1"></i>
                                            <span className="d-none d-sm-inline">Finish</span>
                                        </Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <ProgressBar
                                    animated
                                    striped
                                    variant="success"
                                    now={((tabs.indexOf(key!) + 1) / tabs.length) * 100}
                                    className="mb-3"
                                    style={{ height: 7 }}
                                />
                                <Tab.Content className="pb-0 mb-0 pt-0">
                                    <Tab.Pane eventKey="account">
                                        <Step
                                            id="account"
                                            render={({ next }) => (
                                                <Form>
                                                    <Form.Group as={Row} className="mb-3">
                                                        <Form.Label htmlFor="uname" column md={3}>
                                                            User name
                                                        </Form.Label>
                                                        <Col md={9}>
                                                            <Form.Control
                                                                type="text"
                                                                name="uname"
                                                                id="uname3"
                                                                defaultValue="Coderthemes"
                                                            />
                                                        </Col>
                                                    </Form.Group>

                                                    <Form.Group as={Row} className="mb-3">
                                                        <Form.Label htmlFor="examplePassword" column md={3}>
                                                            Password
                                                        </Form.Label>
                                                        <Col md={9}>
                                                            <Form.Control
                                                                type="password"
                                                                name="examplePassword"
                                                                id="examplePassword3"
                                                                defaultValue="12345"
                                                            />
                                                        </Col>
                                                    </Form.Group>

                                                    <Form.Group as={Row} className="mb-3">
                                                        <Form.Label htmlFor="examplerePassword" column md={3}>
                                                            Re-Password
                                                        </Form.Label>
                                                        <Col md={9}>
                                                            <Form.Control
                                                                type="password"
                                                                name="exampleRepassword"
                                                                id="examplerePassword3"
                                                                defaultValue="12345"
                                                            />
                                                        </Col>
                                                    </Form.Group>

                                                    <ul className="pager wizard mb-0 list-inline text-end mt-2">
                                                        <li className="next list-inline-item">
                                                            <Button
                                                                onClick={() => {
                                                                    setKey('profile');
                                                                    next();
                                                                }}
                                                                variant="secondary"
                                                            >
                                                                Next
                                                            </Button>
                                                        </li>
                                                    </ul>
                                                </Form>
                                            )}
                                        />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="profile">
                                        <Step
                                            id="profile"
                                            render={({ next, previous }) => (
                                                <Form>
                                                    <Form.Group as={Row} className="mb-3">
                                                        <Form.Label htmlFor="fname" column md={3}>
                                                            First name
                                                        </Form.Label>
                                                        <Col md={9}>
                                                            <Form.Control
                                                                type="text"
                                                                name="fname"
                                                                id="fname3"
                                                                defaultValue={'Francis'}
                                                            />
                                                        </Col>
                                                    </Form.Group>

                                                    <Form.Group as={Row} className="mb-3">
                                                        <Form.Label htmlFor="lname" column md={3}>
                                                            Last name
                                                        </Form.Label>
                                                        <Col md={9}>
                                                            <Form.Control
                                                                type="text"
                                                                name="lname"
                                                                id="lname3"
                                                                defaultValue={'Brinkman'}
                                                            />
                                                        </Col>
                                                    </Form.Group>

                                                    <Form.Group as={Row} className="mb-3">
                                                        <Form.Label htmlFor="phone" column md={3}>
                                                            Email
                                                        </Form.Label>
                                                        <Col md={9}>
                                                            <Form.Control
                                                                type="email"
                                                                name="exampleemail"
                                                                id="exampleemail3"
                                                                defaultValue={'cory1979@hotmail.com'}
                                                            />
                                                        </Col>
                                                    </Form.Group>

                                                    <ul className="pager wizard mb-0 list-inline mt-2">
                                                        <li className="previous list-inline-item">
                                                            <Button
                                                                onClick={() => {
                                                                    setKey('account');
                                                                    previous();
                                                                }}
                                                                variant="secondary"
                                                            >
                                                                Previous
                                                            </Button>
                                                        </li>
                                                        <li className="next list-inline-item float-end">
                                                            <Button
                                                                onClick={() => {
                                                                    setKey('contact');
                                                                    next();
                                                                }}
                                                                variant="secondary"
                                                            >
                                                                Next
                                                            </Button>
                                                        </li>
                                                    </ul>
                                                </Form>
                                            )}
                                        />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="contact">
                                        <Step
                                            id="contact"
                                            render={({ previous }) => (
                                                <Form>
                                                    <Row>
                                                        <Col sm={12}>
                                                            <div className="text-center">
                                                                <h2 className="mt-0">
                                                                    <i className="mdi mdi-check-all"></i>
                                                                </h2>
                                                                <h3 className="mt-0">Thank you !</h3>

                                                                <p className="w-75 mb-2 mx-auto">
                                                                    Quisque nec turpis at urna dictum luctus.
                                                                    Suspendisse convallis dignissim eros at volutpat. In
                                                                    egestas mattis dui. Aliquam mattis dictum aliquet.
                                                                </p>

                                                                <div className="mb-3">
                                                                    <Form.Check
                                                                        type="checkbox"
                                                                        id="check-box-3"
                                                                        className="d-inline-block"
                                                                    >
                                                                        <Form.Check.Input type="checkbox" />{' '}
                                                                        <Form.Check.Label>
                                                                            I agree with the Terms and Conditions
                                                                        </Form.Check.Label>
                                                                    </Form.Check>
                                                                </div>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                    <ul className="pager wizard mb-0 list-inline">
                                                        <li className="previous list-inline-item">
                                                            <Button
                                                                onClick={() => {
                                                                    setKey('profile');
                                                                    previous();
                                                                }}
                                                                variant="secondary"
                                                            >
                                                                Previous
                                                            </Button>
                                                        </li>
                                                        <li className="next list-inline-item float-end">
                                                            <Button variant="primary">Submit</Button>
                                                        </li>
                                                    </ul>
                                                </Form>
                                            )}
                                        />
                                    </Tab.Pane>
                                </Tab.Content>
                            </Tab.Container>
                        </Steps>
                    )}
                />
            </Card.Body>
        </Card>
    );
};

const WizardWithFormValidation = () => {
    //active tab key
    const [key, setKey] = useState<string | null>('account');

    /*
     * form validation schema
     */
    const validationSchema = yupResolver(
        yup.object().shape({
            uname: yup.string().required(''),
            password: yup.string().required(''),
            rePassword: yup.string().required(''),
        })
    );
    const validationSchema2 = yupResolver(
        yup.object().shape({
            firstname: yup.string().required(''),
            lastname: yup.string().required(''),
            exampleemail4: yup.string().required('').email('Enter valid email'),
        })
    );

    const method1 = useForm<{ email: string; password: string; rePassword: string }>({
        resolver: validationSchema,
    });

    const method2 = useForm<{ firstname: string; lastname: string; exampleemail4: string }>({
        resolver: validationSchema2,
    });

    return (
        <Card>
            <Card.Body>
                <h4 className="header-title mb-3">Wizard with Validation</h4>

                <Wizard
                    render={({ step, steps }) => (
                        <Steps>
                            <Tab.Container
                                id="left-tabs-example"
                                defaultActiveKey="account"
                                activeKey={key ? key : 'account'}
                            >
                                <Nav variant="pills" as="ul" className="nav-justified bg-light form-wizard-header mb-3">
                                    <Nav.Item as="li">
                                        <Nav.Link as={Link} to="#" eventKey="account" className="rounded-0 pt-2 pb-2">
                                            <i className="mdi mdi-account-circle me-1"></i>
                                            <span className="d-none d-sm-inline">Account</span>
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                        <Nav.Link as={Link} to="#" eventKey="profile" className="rounded-0 pt-2 pb-2">
                                            <i className="mdi mdi-face-profile me-1"></i>
                                            <span className="d-none d-sm-inline">Profile</span>
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                        <Nav.Link as={Link} to="#" eventKey="contact" className="rounded-0 pt-2 pb-2">
                                            <i className="mdi mdi-checkbox-marked-circle-outline me-1"></i>
                                            <span className="d-none d-sm-inline">Finish</span>
                                        </Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <Tab.Content className="pb-0 mb-0 pt-0">
                                    <Tab.Pane eventKey="account">
                                        <Step
                                            id="account"
                                            render={({ next }) => (
                                                <form
                                                    name="login-form"
                                                    id="login-form"
                                                    onSubmit={method1.handleSubmit(() => {
                                                        setKey('profile');
                                                        next();
                                                    })}
                                                >
                                                    <Form.Group as={Row} className="mb-3">
                                                        <Form.Label column md={3}>
                                                            Username
                                                        </Form.Label>
                                                        <Col md={9}>
                                                            <FormInput
                                                                type="text"
                                                                name="uname"
                                                                id="uname4"
                                                                register={method1.register}
                                                                key="uname4"
                                                                errors={method1.formState.errors}
                                                                control={method1.control}
                                                            />
                                                        </Col>
                                                    </Form.Group>

                                                    <Form.Group as={Row} className="mb-3">
                                                        <Form.Label column md={3}>
                                                            Password
                                                        </Form.Label>
                                                        <Col md={9}>
                                                            <FormInput
                                                                type="password"
                                                                name="password"
                                                                endIcon={false}
                                                                register={method1.register}
                                                                key="password"
                                                                errors={method1.formState.errors}
                                                                control={method1.control}
                                                            />
                                                        </Col>
                                                    </Form.Group>

                                                    <Form.Group as={Row} className="mb-3">
                                                        <Form.Label column md={3}>
                                                            Re Password
                                                        </Form.Label>
                                                        <Col md={9}>
                                                            <FormInput
                                                                type="password"
                                                                name="rePassword"
                                                                endIcon={false}
                                                                register={method1.register}
                                                                key="repassword"
                                                                errors={method1.formState.errors}
                                                                control={method1.control}
                                                            />
                                                        </Col>
                                                    </Form.Group>

                                                    <ul className="list-inline wizard mb-0">
                                                        <li className="next list-inline-item float-end">
                                                            <Button variant="secondary" type="submit">
                                                                Next
                                                            </Button>
                                                        </li>
                                                    </ul>
                                                </form>
                                            )}
                                        />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="profile">
                                        <Step
                                            id="profile"
                                            render={({ next, previous }) => (
                                                <form
                                                    name="profile-form"
                                                    id="profile-form"
                                                    onSubmit={method2.handleSubmit(() => {
                                                        setKey('contact');
                                                        next();
                                                    })}
                                                >
                                                    <Form.Group as={Row} className="mb-3">
                                                        <Form.Label column md={3}>
                                                            First Name
                                                        </Form.Label>
                                                        <Col md={9}>
                                                            <FormInput
                                                                type="text"
                                                                name="firstname"
                                                                register={method2.register}
                                                                key="firstname"
                                                                errors={method2.formState.errors}
                                                                control={method2.control}
                                                            />
                                                        </Col>
                                                    </Form.Group>

                                                    <Form.Group as={Row} className="mb-3">
                                                        <Form.Label column md={3}>
                                                            Last Name
                                                        </Form.Label>
                                                        <Col md={9}>
                                                            <FormInput
                                                                type="text"
                                                                name="lastname"
                                                                register={method2.register}
                                                                key="lastname"
                                                                errors={method2.formState.errors}
                                                                control={method2.control}
                                                            />
                                                        </Col>
                                                    </Form.Group>

                                                    <Form.Group as={Row} className="mb-3">
                                                        <Form.Label column md={3}>
                                                            Email
                                                        </Form.Label>
                                                        <Col md={9}>
                                                            <FormInput
                                                                type="email"
                                                                name="exampleemail4"
                                                                register={method2.register}
                                                                key="exampleemail4"
                                                                errors={method2.formState.errors}
                                                                control={method2.control}
                                                            />
                                                        </Col>
                                                    </Form.Group>

                                                    <ul className="list-inline wizard mb-0">
                                                        <li className="previous list-inline-item">
                                                            <Button
                                                                onClick={() => {
                                                                    setKey('account');
                                                                    previous();
                                                                }}
                                                                variant="secondary"
                                                            >
                                                                Previous
                                                            </Button>
                                                        </li>
                                                        <li className="next list-inline-item float-end">
                                                            <Button variant="secondary" type="submit">
                                                                Next
                                                            </Button>
                                                        </li>
                                                    </ul>
                                                </form>
                                            )}
                                        />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="contact">
                                        <Step
                                            id="contact"
                                            render={({ previous }) => (
                                                <Row>
                                                    <Col sm={12}>
                                                        <div className="text-center">
                                                            <h2 className="mt-0">
                                                                <i className="mdi mdi-check-all"></i>
                                                            </h2>
                                                            <h3 className="mt-0">Thank you !</h3>

                                                            <p className="w-75 mb-2 mx-auto">
                                                                Quisque nec turpis at urna dictum luctus.Suspendisse
                                                                convallis dignissim eros at volutpat.In egestas mattis
                                                                dui.Aliquam mattis dictum aliquet.
                                                            </p>

                                                            <div className="mb-3">
                                                                <Form.Check
                                                                    type="checkbox"
                                                                    id="check-box-4"
                                                                    className="d-inline-block"
                                                                >
                                                                    <Form.Check.Input type="checkbox" />{' '}
                                                                    <Form.Check.Label>
                                                                        I agree with the Terms and Conditions
                                                                    </Form.Check.Label>
                                                                </Form.Check>
                                                            </div>
                                                        </div>
                                                    </Col>

                                                    <Col sm={12}>
                                                        <ul className="list-inline wizard mb-0">
                                                            <li className="previous list-inline-item">
                                                                <Button
                                                                    onClick={() => {
                                                                        setKey('profile');
                                                                        previous();
                                                                    }}
                                                                    variant="secondary"
                                                                >
                                                                    Previous
                                                                </Button>
                                                            </li>

                                                            <li className="next list-inline-item float-end">
                                                                <Button variant="secondary">Submit</Button>
                                                            </li>
                                                        </ul>
                                                    </Col>
                                                </Row>
                                            )}
                                        />
                                    </Tab.Pane>
                                </Tab.Content>
                            </Tab.Container>
                        </Steps>
                    )}
                />
            </Card.Body>
        </Card>
    );
};

const FormWizard = () => {
    // set pagetitle
    usePageTitle({
        title: 'Form Wizard',
        breadCrumbItems: [
            {
                path: '/forms/wizard',
                label: 'Forms',
            },
            {
                path: '/forms/wizard',
                label: 'Form Wizard',
                active: true,
            },
        ],
    });

    return (
        <>
            <Row>
                <Col xl={6}>
                    <BasicWizard />
                </Col>

                <Col xl={6}>
                    <ButtonWizard />
                </Col>
            </Row>

            <Row>
                <Col xl={6}>
                    <WizardWithProgressbar />
                </Col>
                <Col lg={6}>
                    <WizardWithFormValidation />
                </Col>
            </Row>
        </>
    );
};

export default FormWizard;
