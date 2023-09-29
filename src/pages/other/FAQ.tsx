import classNames from 'classnames';
import { useContext } from 'react';
import { Accordion, AccordionContext, Button, Card, Col, Row, useAccordionButton } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// hooks
import { usePageTitle } from '../../hooks';

type CustomToggleProps = {
    children: React.ReactNode;
    eventKey: string;
    containerClass: string;
    linkClass: string;
    callback?: any;
};

const CustomToggle = ({ children, eventKey, containerClass, linkClass, callback }: CustomToggleProps) => {
    const { activeEventKey } = useContext(AccordionContext);

    const decoratedOnClick = useAccordionButton(eventKey, () => callback && callback(eventKey));

    const isCurrentEventKey = activeEventKey === eventKey;

    return (
        <h5 className={containerClass}>
            <Link
                to="#"
                className={classNames(linkClass, {
                    collapsed: !isCurrentEventKey,
                })}
                onClick={decoratedOnClick}
            >
                {children}
            </Link>
        </h5>
    );
};

const FAQ = () => {
    // set pagetitle
    usePageTitle({
        title: 'FAQs',
        breadCrumbItems: [
            {
                path: '/pages/faq',
                label: 'Extra Pages',
            },
            {
                path: '/pages/faq',
                label: 'FAQs',
                active: true,
            },
        ],
    });

    return (
        <Row>
            <Col sm={12}>
                <Card>
                    <Card.Body>
                        <Row className="justify-content-center">
                            <Col sm={6}>
                                <div className="text-center">
                                    <h3>Frequently Asked Questions</h3>
                                    <p className="text-muted">
                                        Nisi praesentium similique totam odio obcaecati, reprehenderit, dignissimos rem
                                        temporibus ea inventore alias! Beatae animi nemo ea tempora, temporibus laborum
                                        facilis ut!
                                    </p>

                                    <Button variant="success" className="waves-effect waves-light mt-1 me-1">
                                        Email us your question
                                    </Button>
                                    <Button variant="primary" className="waves-effect waves-light mt-1">
                                        Send us a tweet
                                    </Button>
                                </div>
                            </Col>
                        </Row>
                        <Row className="mt-4 justify-content-center">
                            <Col xl={5}>
                                <div className="p-2">
                                    <Accordion className="custom-accordion" defaultActiveKey="0">
                                        <Card className="mb-2" key={0}>
                                            <Card.Header className="bg-light">
                                                <CustomToggle eventKey="0" containerClass="m-0" linkClass="text-dark">
                                                    What is Lorem Ipsum?
                                                </CustomToggle>
                                            </Card.Header>
                                            <Accordion.Collapse eventKey="0">
                                                <Card.Body>
                                                    <p>
                                                        Lorem Ipsum is simply dummy text of the printing and typesetting
                                                        industry. Lorem Ipsum has been the industry's standard dummy
                                                        text ever since the 1500s, when an unknown printer took a galley
                                                        of type and scrambled it to make a type specimen book.
                                                    </p>
                                                    <p className="mb-0">
                                                        Anim pariatur cliche reprehenderit, enim eiusmod high life
                                                        accusamus terry richardson ad squid. 3 wolf moon officia aute,
                                                        non cupidatat skateboard dolor brunch. Food truck quinoa
                                                        nesciunt laborum eiusmod.
                                                    </p>
                                                </Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                        <Card className="mb-2" key={0}>
                                            <Card.Header className="bg-light">
                                                <CustomToggle eventKey="1" containerClass="m-0" linkClass="text-dark">
                                                    Is safe use Lorem Ipsum?
                                                </CustomToggle>
                                            </Card.Header>
                                            <Accordion.Collapse eventKey="1">
                                                <Card.Body>
                                                    <p>
                                                        Lorem Ipsum is simply dummy text of the printing and typesetting
                                                        industry. Lorem Ipsum has been the industry's standard dummy
                                                        text ever since the 1500s, when an unknown printer took a galley
                                                        of type and scrambled it to make a type specimen book.
                                                    </p>
                                                    <p className="mb-0">
                                                        Anim pariatur cliche reprehenderit, enim eiusmod high life
                                                        accusamus terry richardson ad squid. 3 wolf moon officia aute,
                                                        non cupidatat skateboard dolor brunch. Food truck quinoa
                                                        nesciunt laborum eiusmod.
                                                    </p>
                                                </Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                        <Card className="mb-2" key={0}>
                                            <Card.Header className="bg-light">
                                                <CustomToggle eventKey="2" containerClass="m-0" linkClass="text-dark">
                                                    Why use Lorem Ipsum?
                                                </CustomToggle>
                                            </Card.Header>
                                            <Accordion.Collapse eventKey="2">
                                                <Card.Body>
                                                    <p>
                                                        Lorem Ipsum is simply dummy text of the printing and typesetting
                                                        industry. Lorem Ipsum has been the industry's standard dummy
                                                        text ever since the 1500s, when an unknown printer took a galley
                                                        of type and scrambled it to make a type specimen book.
                                                    </p>
                                                    <p className="mb-0">
                                                        Anim pariatur cliche reprehenderit, enim eiusmod high life
                                                        accusamus terry richardson ad squid. 3 wolf moon officia aute,
                                                        non cupidatat skateboard dolor brunch. Food truck quinoa
                                                        nesciunt laborum eiusmod.
                                                    </p>
                                                </Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                    </Accordion>
                                </div>
                            </Col>
                            <Col xl={5}>
                                <div className="p-2">
                                    <Accordion className="custom-accordion" defaultActiveKey="0">
                                        <Card className="mb-2" key={0}>
                                            <Card.Header className="bg-light">
                                                <CustomToggle eventKey="0" containerClass="m-0" linkClass="text-dark">
                                                    License & Copyright
                                                </CustomToggle>
                                            </Card.Header>
                                            <Accordion.Collapse eventKey="0">
                                                <Card.Body>
                                                    <p>
                                                        Lorem Ipsum is simply dummy text of the printing and typesetting
                                                        industry. Lorem Ipsum has been the industry's standard dummy
                                                        text ever since the 1500s, when an unknown printer took a galley
                                                        of type and scrambled it to make a type specimen book.
                                                    </p>
                                                    <p className="mb-0">
                                                        Anim pariatur cliche reprehenderit, enim eiusmod high life
                                                        accusamus terry richardson ad squid. 3 wolf moon officia aute,
                                                        non cupidatat skateboard dolor brunch. Food truck quinoa
                                                        nesciunt laborum eiusmod.
                                                    </p>
                                                </Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                        <Card className="mb-2" key={0}>
                                            <Card.Header className="bg-light">
                                                <CustomToggle eventKey="1" containerClass="m-0" linkClass="text-dark">
                                                    How many variations exist?
                                                </CustomToggle>
                                            </Card.Header>
                                            <Accordion.Collapse eventKey="1">
                                                <Card.Body>
                                                    <p>
                                                        Lorem Ipsum is simply dummy text of the printing and typesetting
                                                        industry. Lorem Ipsum has been the industry's standard dummy
                                                        text ever since the 1500s, when an unknown printer took a galley
                                                        of type and scrambled it to make a type specimen book.
                                                    </p>
                                                    <p className="mb-0">
                                                        Anim pariatur cliche reprehenderit, enim eiusmod high life
                                                        accusamus terry richardson ad squid. 3 wolf moon officia aute,
                                                        non cupidatat skateboard dolor brunch. Food truck quinoa
                                                        nesciunt laborum eiusmod.
                                                    </p>
                                                </Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                        <Card className="mb-2" key={0}>
                                            <Card.Header className="bg-light">
                                                <CustomToggle eventKey="2" containerClass="m-0" linkClass="text-dark">
                                                    Why use Lorem Ipsum?
                                                </CustomToggle>
                                            </Card.Header>
                                            <Accordion.Collapse eventKey="2">
                                                <Card.Body>
                                                    <p>
                                                        Lorem Ipsum is simply dummy text of the printing and typesetting
                                                        industry. Lorem Ipsum has been the industry's standard dummy
                                                        text ever since the 1500s, when an unknown printer took a galley
                                                        of type and scrambled it to make a type specimen book.
                                                    </p>
                                                    <p className="mb-0">
                                                        Anim pariatur cliche reprehenderit, enim eiusmod high life
                                                        accusamus terry richardson ad squid. 3 wolf moon officia aute,
                                                        non cupidatat skateboard dolor brunch. Food truck quinoa
                                                        nesciunt laborum eiusmod.
                                                    </p>
                                                </Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                    </Accordion>
                                </div>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
};

export default FAQ;
