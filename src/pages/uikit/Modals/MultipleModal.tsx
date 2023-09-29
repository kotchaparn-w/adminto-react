import { useState } from 'react';
import { Button, Card, Modal } from 'react-bootstrap';

const MultipleModal = () => {
    const [modal, setModal] = useState<boolean>(false);
    const [nextModal, setNextModal] = useState<boolean>(false);

    // Show/hide the modal
    const toggle = () => {
        setModal(!modal);
    };

    const toggleNextModal = () => {
        toggle();
        setNextModal(!nextModal);
    };

    return (
        <Card>
            <Card.Body>
                <h4 className="header-title">Multiple Modal</h4>

                <p className="sub-header">
                    Display a series of modals one by one to guide your users on multiple aspects or take step wise
                    input.
                </p>

                <div className="button-list">
                    <Button variant="secondary" onClick={toggle}>
                        Multiple Modal
                    </Button>
                </div>

                <Modal show={modal} onHide={toggle}>
                    <Modal.Header closeButton>
                        <h4 className="modal-title">Modal Heading</h4>
                    </Modal.Header>
                    <Modal.Body>
                        <h5>Text in a modal</h5>
                        <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={() => setNextModal(true)}>Next</Button>
                    </Modal.Footer>
                </Modal>

                <Modal show={nextModal} onHide={toggleNextModal}>
                    <Modal.Header closeButton>
                        <h4 className="modal-title">Modal Heading</h4>
                    </Modal.Header>
                    <Modal.Body>
                        <h5>Text in a modal</h5>
                        <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={toggleNextModal}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </Card.Body>
        </Card>
    );
};

export default MultipleModal;
