import { useState } from 'react';
import { Card, Toast, Button } from 'react-bootstrap';

const CustomToast = () => {
    const [showCustom1, setShowCustom1] = useState<boolean>(true);
    const [showCustom2, setShowCustom2] = useState<boolean>(true);
    const [showCustom3, setShowCustom3] = useState<boolean>(true);
    const [showCustom4, setShowCustom4] = useState<boolean>(true);

    return (
        <Card>
            <Card.Body>
                <h4 className="header-title">Custom content</h4>
                <p className="text-muted">
                    Alternatively, you can also add additional controls and components to toasts.
                </p>
                <Toast
                    className="d-flex align-items-center mt-4"
                    show={showCustom1}
                    onClose={() => setShowCustom1(false)}
                    delay={5000}
                    autohide
                >
                    <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
                    <Button
                        variant=""
                        onClick={() => setShowCustom1(false)}
                        className="btn-close ms-auto me-2"
                    ></Button>
                </Toast>
                <Toast
                    className="d-flex align-items-center text-white bg-primary border-0 mt-4"
                    show={showCustom2}
                    onClose={() => setShowCustom2(false)}
                    delay={8000}
                    autohide
                >
                    <Toast.Body>Hello, world! This is a toast message.</Toast.Body>

                    <Button
                        variant=""
                        onClick={() => setShowCustom2(false)}
                        className="btn-close btn-close-white ms-auto me-2"
                    ></Button>
                </Toast>
                <Toast className="mt-4" show={showCustom3} onClose={() => setShowCustom3(false)} delay={10000} autohide>
                    <Toast.Body>
                        Hello, world! This is a toast message.
                        <div className="mt-2 pt-2 border-top">
                            <Button className="btn-sm me-1">Take action</Button>
                            <Button variant="secondary" onClick={() => setShowCustom3(false)} className="btn-sm">
                                Close
                            </Button>
                        </div>
                    </Toast.Body>
                </Toast>
                <Toast
                    className="text-white bg-primary mt-4"
                    show={showCustom4}
                    onClose={() => setShowCustom4(false)}
                    delay={12000}
                    autohide
                >
                    <Toast.Body>
                        Hello, world! This is a toast message.
                        <div className="mt-2 pt-2 border-top">
                            <Button variant="light" className="btn-sm me-1">
                                Take action
                            </Button>
                            <Button variant="secondary" onClick={() => setShowCustom4(false)} className="btn-sm">
                                Close
                            </Button>
                        </div>
                    </Toast.Body>
                </Toast>
            </Card.Body>
        </Card>
    );
};

export default CustomToast;
