import { useState } from 'react';
import { Card, Toast, ToastContainer, Form } from 'react-bootstrap';

// images
import logo from '../../../assets/images/logo-sm.png';

const PlacementToast = () => {
    type ToastPositions =
        | 'top-start'
        | 'top-center'
        | 'top-end'
        | 'middle-start'
        | 'middle-center'
        | 'middle-end'
        | 'bottom-start'
        | 'bottom-center'
        | 'bottom-end';

    const [position, setPosition] = useState<ToastPositions>('top-start');

    const positions = [
        'top-start',
        'top-center',
        'top-end',
        'middle-start',
        'middle-center',
        'middle-end',
        'bottom-start',
        'bottom-center',
        'bottom-end',
    ];

    return (
        <Card>
            <Card.Body>
                <h4 className="header-title">Placement</h4>
                <p className="text-muted font-14">
                    Place toasts with custom CSS as you need them. The top right is often used for notifications, as is
                    the top middle. If you’re only ever going to show one toast at a time, put the positioning styles
                    right on the
                    <code>.toast</code>.
                </p>
                <div className="mb-3">
                    <label htmlFor="selectToastPlacement">Toast placement</label>
                    <Form.Select
                        id="selectToastPlacement"
                        className="mt-2"
                        onChange={(e: any) => setPosition(e.currentTarget.value)}
                    >
                        {(positions || []).map((p) => (
                            <option key={p} value={p}>
                                {p}
                            </option>
                        ))}
                    </Form.Select>
                </div>

                <div
                    aria-live="polite"
                    aria-atomic="true"
                    className="bg-light position-relative"
                    style={{ minHeight: '294px' }}
                >
                    <ToastContainer className="p-3" position={position}>
                        <Toast>
                            <Toast.Header closeButton={false}>
                                <img src={logo} className="me-1" alt="" height="12" />
                                <strong className="me-auto">Adminto</strong>
                                <small>11 mins ago</small>
                            </Toast.Header>
                            <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
                        </Toast>
                    </ToastContainer>
                </div>
            </Card.Body>
        </Card>
    );
};

export default PlacementToast;
