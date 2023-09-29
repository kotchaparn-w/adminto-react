import { useState } from 'react';
import { Row, Col, Card, Toast } from 'react-bootstrap';

// images
import logo from '../../../assets/images/logo-sm.png';

const DefaultToasts = () => {
    const [show, setShow] = useState<boolean>(true);
    const [showTranslucent, setShowTranslucent] = useState<boolean>(true);
    const [showPlacement, setShowPlacement] = useState<boolean>(true);

    const [stacked, setStacked] = useState([
        {
            time: 'just now',
            desc: 'See? Just like this.',
        },
        {
            time: '2 seconds ago',
            desc: 'Heads up, toasts will stack automatically',
        },
    ]);

    /*
     * handle close
     */
    const handleClose = (index: number) => {
        const list = [...stacked];
        list.splice(index, 1);
        setStacked(list);
    };

    return (
        <Card>
            <Card.Body>
                <h4 className="header-title">Bootstrap Toasts</h4>
                <p className="text-muted font-14">
                    Push notifications to your visitors with a toast, a lightweight and easily customizable alert
                    message.
                </p>

                <Row>
                    <Col lg={6}>
                        <h5 className="mb-2">Basic</h5>
                        <p className="text-muted font-14">
                            Toasts are as flexible as you need and have very little required markup. At a minimum, we
                            require a single element to contain your “toasted” content and strongly encourage a dismiss
                            button.
                        </p>
                        <div className="p-3">
                            <Toast onClose={() => setShow(false)} show={show} delay={5000} autohide>
                                <Toast.Header>
                                    <img src={logo} alt="brand-logo" height="12" className="me-1" />
                                    <strong className="me-auto">Adminto</strong>
                                    <small className="ms-5">11 mins ago</small>
                                </Toast.Header>
                                <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
                            </Toast>
                        </div>
                    </Col>

                    <Col lg={6}>
                        <h5 className="mb-2">Translucent</h5>
                        <p className="text-muted font-14">
                            Toasts are slightly translucent, too, so they blend over whatever they might appear over.
                            For browsers that support the backdrop-filter CSS property, we’ll also attempt to blur the
                            elements under a toast.
                        </p>

                        <div className="p-3 bg-light">
                            <Toast
                                onClose={() => setShowTranslucent(false)}
                                show={showTranslucent}
                                delay={8000}
                                autohide
                            >
                                <Toast.Header>
                                    <img src={logo} alt="brand-logo" height="12" className="me-1" />
                                    <strong className="me-auto">Adminto</strong>
                                    <small className="ms-5">11 mins ago</small>
                                </Toast.Header>
                                <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
                            </Toast>
                        </div>
                    </Col>
                </Row>

                {/* stacked */}
                <Row>
                    <Col lg={6} className="mt-4">
                        <h5 className="mb-2">Stacking</h5>
                        <p className="text-muted font-14">
                            When you have multiple toasts, we default to vertiaclly stacking them in a readable manner.
                        </p>
                        <div className="p-3">
                            <div
                                aria-live="polite"
                                aria-atomic="true"
                                style={{ position: 'relative', minHeight: '200px' }}
                            >
                                <div className="toast-container" style={{ position: 'absolute', top: 0, right: 0 }}>
                                    {(stacked || []).map((item, index) => {
                                        return (
                                            <Toast
                                                key={index.toString()}
                                                onClose={() => handleClose(index)}
                                                delay={11000}
                                                autohide
                                            >
                                                <Toast.Header>
                                                    <img src={logo} alt="brand-logo" height="12" className="me-1" />
                                                    <strong className="me-auto">Adminto</strong>
                                                    <small className="ms-5">{item.time}</small>
                                                </Toast.Header>
                                                <Toast.Body>{item.desc}</Toast.Body>
                                            </Toast>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </Col>

                    <Col lg={6} className="mt-4">
                        <h5 className="mb-2">Placement</h5>
                        <p className="text-muted font-14">
                            Place toasts with custom CSS as you need them. The top right is often used for
                            notifications, as is the top middle. If you’re only ever going to show one toast at a time,
                            put the positioning styles right on the <code>.toast</code>.
                        </p>

                        <div className="p-3">
                            <div
                                aria-live="polite"
                                aria-atomic="true"
                                className="d-flex justify-content-center align-items-center"
                                style={{ minHeight: '200px' }}
                            >
                                <Toast onClose={() => setShowPlacement(false)} show={showPlacement}>
                                    <Toast.Header>
                                        <img src={logo} alt="brand-logo" height="12" className="me-1" />
                                        <strong className="me-auto">Adminto</strong>
                                        <small className="ms-5">1 mins ago</small>
                                    </Toast.Header>
                                    <Toast.Body>Heads up, toasts will stack automatically</Toast.Body>
                                </Toast>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
};

export default DefaultToasts;
