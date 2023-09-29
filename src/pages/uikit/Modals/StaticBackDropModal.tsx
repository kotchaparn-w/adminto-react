import { useState } from 'react';
import { Button, Card, Modal } from 'react-bootstrap';

const StaticBackdropModal = () => {
    const [modal, setModal] = useState<boolean>(false);

    // Show/hide the modal
    const toggle = () => {
        setModal(!modal);
    };

    return (
        <Card>
            <Card.Body>
                <h4 className="header-title">Static Backdrop</h4>

                <p className="sub-header">
                    When backdrop is set to static, the modal will not close when clicking outside it. Click the button
                    below to try it.
                </p>

                <div className="button-list">
                    <Button variant="info" onClick={toggle}>
                        Launch static backdrop modal
                    </Button>
                </div>

                <Modal show={modal} onHide={toggle} backdrop="static" keyboard={false}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal title</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                        3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
                        laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin
                        coffee nulla assumenda shoreditch et.
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={toggle}>
                            Close
                        </Button>
                        <Button variant="primary">Understood</Button>
                    </Modal.Footer>
                </Modal>
            </Card.Body>
        </Card>
    );
};

export default StaticBackdropModal;
