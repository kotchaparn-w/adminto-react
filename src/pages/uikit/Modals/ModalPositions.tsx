import { useState } from 'react';
import { Button, Card, Modal } from 'react-bootstrap';

const ModalPositions = () => {
    const [modal, setModal] = useState<boolean>(false);
    const [className, setClassName] = useState<string>('');

    // Show/hide the modal
    const toggle = () => {
        setModal(!modal);
    };

    // Opens modal with custom class
    const openModalWithClass = (className: string) => {
        setClassName(className);
        toggle();
    };

    return (
        <Card>
            <Card.Body>
                <h4 className="header-title">Modal Position</h4>

                <p className="sub-header">
                    Specify the position for the modal. You can display modal at top, bottom, center or right of page by
                    specifying classes <code>modal-top</code>, <code>modal-bottom</code>,{' '}
                    <code>modal-dialog-centered</code> and <code>modal-right</code>
                    respectively.
                </p>

                <div className="button-list">
                    <Button variant="secondary" onClick={() => openModalWithClass('modal-top')}>
                        Top Modal
                    </Button>
                    <Button variant="secondary" onClick={() => openModalWithClass('modal-bottom')}>
                        Bottom Modal
                    </Button>
                    <Button variant="secondary" onClick={() => openModalWithClass('modal-dialog-centered')}>
                        Center Modal
                    </Button>
                    <Button variant="secondary" onClick={() => openModalWithClass('modal-right')}>
                        Rightbar Modal
                    </Button>
                </div>

                <Modal show={modal} onHide={toggle} dialogClassName={className}>
                    <Modal.Header onHide={toggle} closeButton>
                        <h4 className="modal-title">Modal Heading</h4>
                    </Modal.Header>
                    <Modal.Body>
                        <h5>Text in a modal</h5>
                        <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={toggle}>Save changes</Button>
                    </Modal.Footer>
                </Modal>
            </Card.Body>
        </Card>
    );
};

export default ModalPositions;
