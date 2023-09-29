import { useState } from 'react';
import { Button, Card, Modal } from 'react-bootstrap';

const ToggleBetweenModals = () => {
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
                <h4 className="header-title">Toggle Between Modals</h4>
                <p className="sub-header">
                    Display a series of modals one by one to guide your users on multiple aspects or take step wise
                    input.
                </p>

                <div className="button-list">
                    <Button variant="info" onClick={toggle}>
                        Open first modal
                    </Button>
                </div>

                <Modal show={modal} onHide={toggle} centered>
                    <Modal.Header closeButton>
                        <h4 className="modal-title">Modal Heading</h4>
                    </Modal.Header>
                    <Modal.Body>Show a second modal and hide this one with the button below.</Modal.Body>
                    <Modal.Footer>
                        <Button onClick={toggleNextModal}>Open second modal</Button>
                    </Modal.Footer>
                </Modal>

                <Modal show={nextModal} onHide={toggleNextModal} centered>
                    <Modal.Header closeButton>
                        <h4 className="modal-title">Modal Heading</h4>
                    </Modal.Header>
                    <Modal.Body>Hide this modal and show the first with the button below.</Modal.Body>
                    <Modal.Footer>
                        <Button onClick={toggleNextModal}>Back to first</Button>
                    </Modal.Footer>
                </Modal>
            </Card.Body>
        </Card>
    );
};

export default ToggleBetweenModals;
