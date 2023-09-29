import { useState } from 'react';
import { Button, Card, Modal } from 'react-bootstrap';

const ModalSizes = () => {
    const [standard, setStandard] = useState<boolean>(false);
    const [modal, setModal] = useState<boolean>(false);
    const [size, setSize] = useState<'sm' | 'lg' | 'xl'>();
    const [className, setClassName] = useState<string>('');
    const [scroll, setScroll] = useState<boolean>(false);

    // Show/hide the modal
    const toggleStandard = () => {
        setStandard(!standard);
    };

    // Show/hide the modal
    const toggle = () => {
        setModal(!modal);
    };

    // Opens large modal
    const openModalWithSize = (size: 'sm' | 'lg' | 'xl') => {
        setSize(size);
        setClassName('');
        setScroll(false);
        toggle();
    };

    // Opens modal with custom class
    const openModalWithClass = (className: string) => {
        setClassName(className);
        setScroll(false);
        toggle();
    };

    // Opens large modal
    const openModalWithScroll = () => {
        setScroll(true);
        setSize('sm');
        setClassName('');
        toggle();
    };

    return (
        <Card>
            <Card.Body>
                <h4 className="header-title">Bootstrap Modals</h4>
                <p className="sub-header">A rendered modal with header, body, and set of actions in the footer.</p>

                <div className="button-list">
                    <Button onClick={toggleStandard}>Standard Modal</Button>
                    <Button variant="info" onClick={() => openModalWithSize('lg')}>
                        Large Modal
                    </Button>
                    <Button variant="success" onClick={() => openModalWithSize('sm')}>
                        Small Modal
                    </Button>
                    <Button onClick={() => openModalWithClass('modal-full-width')}>Full width Modal</Button>
                    <Button variant="secondary" onClick={openModalWithScroll}>
                        Scrollable Modal
                    </Button>
                </div>

                {/* standard modal */}
                <Modal show={standard} onHide={toggleStandard}>
                    <Modal.Header onHide={toggleStandard} closeButton>
                        <h4 className="modal-title">Modal Heading</h4>
                    </Modal.Header>
                    <Modal.Body>
                        <h6>Text in a modal</h6>
                        <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
                        <hr />
                        <h6>Overflowing text to show scroll behavior</h6>
                        <p>
                            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
                            egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                        </p>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus
                            vel augue laoreet rutrum faucibus dolor auctor.
                        </p>
                        <p>
                            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
                            scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
                            auctor fringilla.
                        </p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="light" onClick={toggleStandard}>
                            Close
                        </Button>{' '}
                        <Button onClick={toggleStandard}>Save changes</Button>
                    </Modal.Footer>
                </Modal>

                <Modal show={modal} onHide={toggle} dialogClassName={className} size={size} scrollable={scroll}>
                    <Modal.Header onHide={toggle} closeButton>
                        <h4 className="modal-title">Modal Heading</h4>
                    </Modal.Header>
                    <Modal.Body>
                        <h6>Text in a modal</h6>
                        <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
                        <hr />
                        <h6>Overflowing text to show scroll behavior</h6>
                        <p>
                            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
                            egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                        </p>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus
                            vel augue laoreet rutrum faucibus dolor auctor.
                        </p>
                        <p>
                            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
                            scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
                            auctor fringilla.
                        </p>
                        {scroll && (
                            <>
                                <p>
                                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
                                    facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac,
                                    vestibulum at eros.
                                </p>
                                <p>
                                    Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
                                    lacus vel augue laoreet rutrum faucibus dolor auctor.
                                </p>
                            </>
                        )}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="light" onClick={toggle}>
                            Close
                        </Button>{' '}
                        <Button onClick={toggle}>Save changes</Button>
                    </Modal.Footer>
                </Modal>
            </Card.Body>
        </Card>
    );
};

export default ModalSizes;
