import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Accordion, Button, Card, Modal, useAccordionButton } from 'react-bootstrap';

const CustomToggle = ({ children, eventKey }: { children: any; eventKey: string }) => {
    const decoratedOnClick = useAccordionButton(eventKey, () => {});

    return (
        <h5 className="m-0">
            <Link to="#" className="text-dark" onClick={decoratedOnClick}>
                {children}
            </Link>
        </h5>
    );
};

const CustomModals = () => {
    const [responsiveModal, setResponsiveModal] = useState<boolean>(false);
    const [accordionModal, setAccordionModal] = useState<boolean>(false);

    // Show/hide the modal
    const toggleResponsiveModal = () => {
        setResponsiveModal(!responsiveModal);
    };

    const toggleAccordionModal = () => {
        setAccordionModal(!accordionModal);
    };

    return (
        <Card>
            <Card.Body>
                <h4 className="header-title">Custom Modals</h4>

                <p className="sub-header">Examples of custom modals.</p>

                <div className="button-list">
                    <Button variant="success" className="waves-effect waves-light" onClick={toggleResponsiveModal}>
                        Responsive Modal
                    </Button>
                    <Button variant="secondary" className="waves-effect waves-light" onClick={toggleAccordionModal}>
                        Accordion in Modal
                    </Button>
                </div>

                <Modal show={responsiveModal} onHide={toggleResponsiveModal}>
                    <Modal.Header closeButton>
                        <h4 className="modal-title">Modal Content is Responsive</h4>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="field-1" className="form-label">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="field-1"
                                        placeholder="John"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="field-2" className="form-label">
                                        Surname
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="field-2"
                                        placeholder="Doe"
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="mb-3">
                                    <label htmlFor="field-3" className="form-label">
                                        Address
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="field-3"
                                        placeholder="Address"
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="mb-3">
                                    <label htmlFor="field-4" className="form-label">
                                        City
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="field-4"
                                        placeholder="Boston"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="mb-3">
                                    <label htmlFor="field-5" className="form-label">
                                        Country
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="field-5"
                                        placeholder="United States"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="mb-3">
                                    <label htmlFor="field-6" className="form-label">
                                        Zip
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="field-6"
                                        placeholder="123456"
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="">
                                    <label htmlFor="field-7" className="form-label">
                                        Personal Info
                                    </label>
                                    <textarea
                                        className="form-control"
                                        id="field-7"
                                        placeholder="Write something about yourself"
                                        required
                                    ></textarea>
                                </div>
                            </div>
                        </div>
                    </Modal.Body>

                    <Modal.Footer>
                        <button
                            type="button"
                            className="btn btn-secondary waves-effect"
                            onClick={toggleResponsiveModal}
                        >
                            Close
                        </button>
                        <button type="submit" className="btn btn-info waves-effect waves-light">
                            Save changes
                        </button>
                    </Modal.Footer>
                </Modal>

                <Modal show={accordionModal} onHide={toggleAccordionModal}>
                    <Accordion defaultActiveKey="0">
                        <Card className="mb-0">
                            <Card.Header>
                                <CustomToggle eventKey="0">Collapsible Group Item #1</CustomToggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                                    richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
                                    brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                                    aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
                                    Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente
                                    ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer
                                    farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them
                                    accusamus labore sustainable VHS.
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card className="mb-0">
                            <Card.Header>
                                <CustomToggle eventKey="1">Collapsible Group Item #2</CustomToggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="1">
                                <Card.Body>
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                                    richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
                                    brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                                    aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
                                    Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente
                                    ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer
                                    farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them
                                    accusamus labore sustainable VHS.
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card className="mb-0">
                            <Card.Header>
                                <CustomToggle eventKey="2">Collapsible Group Item #3</CustomToggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="2">
                                <Card.Body>
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                                    richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
                                    brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                                    aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
                                    Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente
                                    ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer
                                    farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them
                                    accusamus labore sustainable VHS.
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </Modal>
            </Card.Body>
        </Card>
    );
};

export default CustomModals;
