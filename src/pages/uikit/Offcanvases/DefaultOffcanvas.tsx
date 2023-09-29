import { useState } from 'react';
import { Card, Offcanvas, Button } from 'react-bootstrap';

const DefaultOffcanvas = () => {
    const [show, setShow] = useState<boolean>(false);

    /**
     * handle modal toggle
     */
    const toggle = () => {
        setShow((prevState) => !prevState);
    };

    return (
        <Card>
            <Card.Body>
                <h4 className="header-title">Offcanvas</h4>
                <p className="text-muted">
                    <code>Offcanvas</code> includes support for a header with a close button and an optional body class
                    for some initial padding. We suggest that you include offcanvas headers with dismiss actions
                    whenever possible, or provide an explicit dismiss action.
                </p>

                <Button onClick={toggle}>Launch</Button>

                <Offcanvas show={show} onHide={toggle}>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title className="mb-0">Offcanvas</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <div>
                            Some text as placeholder. In real life you can have the elements you have chosen. Like,
                            text, images, lists, etc.
                        </div>
                        <h5 className="mt-3">List</h5>
                        <ul className="ps-3">
                            <li className="">Nemo enim ipsam voluptatem quia aspernatur</li>
                            <li className="">Neque porro quisquam est, qui dolorem</li>
                            <li className="">Quis autem vel eum iure qui in ea</li>
                        </ul>
                        <ul className="ps-3">
                            <li className="">At vero eos et accusamus et iusto odio dignissimos</li>
                            <li className="">Et harum quidem rerum facilis</li>
                            <li className="">Temporibus autem quibusdam et aut officiis</li>
                        </ul>
                    </Offcanvas.Body>
                </Offcanvas>
            </Card.Body>
        </Card>
    );
};

export default DefaultOffcanvas;
