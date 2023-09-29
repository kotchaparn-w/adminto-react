import { useState } from 'react';
import { Button, Card, Modal } from 'react-bootstrap';
import classNames from 'classnames';

const ModalWithAlerts = () => {
    const [fillModal, setFillModal] = useState<boolean>(false);
    const [modal, setModal] = useState<boolean>(false);

    const [className, setClassName] = useState<string>('');

    // Show/hide the modal
    const fillToggle = () => {
        setFillModal(!fillModal);
    };

    const toggle = () => {
        setModal(!modal);
    };

    // Opens modal with custom fill class
    const openModalWithFillClass = (className: string) => {
        setClassName(className);
        fillToggle();
    };

    // Opens modal with custom class
    const openModalWithClass = (className: string) => {
        setClassName(className);
        toggle();
    };

    return (
        <Card>
            <Card.Body>
                <h4 className="header-title">Modal based Alerts</h4>

                <p className="sub-header">Show different contexual alert messages using modal component.</p>

                <div className="button-list">
                    <Button variant="success" className="me-1" onClick={() => openModalWithFillClass('success')}>
                        Success Alert
                    </Button>
                    <Button variant="info" className="me-1" onClick={() => openModalWithClass('info')}>
                        Info Alert
                    </Button>
                    <Button variant="warning" className="me-1" onClick={() => openModalWithClass('warning')}>
                        Warning Alert
                    </Button>
                    <Button variant="danger" className="me-1" onClick={() => openModalWithFillClass('danger')}>
                        Danger Alert
                    </Button>
                </div>

                <Modal show={fillModal} onHide={fillToggle} size="sm">
                    <div className={classNames('modal-filled', 'bg-' + className)}>
                        <Modal.Body className="p-4">
                            <div className="text-center">
                                <i className="dripicons-checkmark h1 text-white"></i>
                                <h4 className="mt-2 text-white">Well Done!</h4>
                                <p className="mt-3 text-white">
                                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
                                    facilisis in, egestas eget quam.
                                </p>
                                <Button onClick={fillToggle} className="btn-light my-2">
                                    Continue
                                </Button>
                            </div>
                        </Modal.Body>
                    </div>
                </Modal>

                <Modal show={modal} onHide={toggle} size="sm">
                    <div>
                        <Modal.Body className="p-4">
                            <div className="text-center">
                                <i className={classNames('dripicons-information', 'h1', 'text-' + className)}></i>
                                <h4 className="mt-2">Heads up!</h4>
                                <p className="mt-3">
                                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
                                    facilisis in, egestas eget quam.
                                </p>
                                <Button onClick={toggle} className={classNames('my-2', 'btn-' + className)}>
                                    Continue
                                </Button>
                            </div>
                        </Modal.Body>
                    </div>
                </Modal>
            </Card.Body>
        </Card>
    );
};

export default ModalWithAlerts;
