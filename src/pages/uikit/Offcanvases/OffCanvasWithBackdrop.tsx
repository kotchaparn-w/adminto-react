import { useState } from 'react';
import { Card, Offcanvas, Button } from 'react-bootstrap';

// types
import { BackdropOption } from './types';

type OffCanvasWithBackdropProps = {
    options: BackdropOption[];
};

const BackdropButton = ({ name, scroll, backdrop }: BackdropOption) => {
    const [show, setShow] = useState<boolean>(false);

    /**
     * handle modal toggle
     */
    const toggle = () => {
        setShow((prevState) => !prevState);
    };

    return (
        <>
            <Button onClick={toggle} className="me-1">
                {name}
            </Button>
            <Offcanvas show={show} onHide={toggle} scroll={scroll} backdrop={backdrop}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    Some text as placeholder. In real life you can have the elements you have chosen. Like, text,
                    images, lists, etc.
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
        </>
    );
};

const OffCanvasWithBackdrop = ({ options }: OffCanvasWithBackdropProps) => {
    return (
        <Card>
            <Card.Body>
                <h4 className="header-title">Offcanvas Backdrop</h4>
                <p className="text-muted">
                    Scrolling the <code>&lt;body&gt;</code> element is disabled when an offcanvas and its backdrop are
                    visible. Use the <code>scroll</code> prop to toggle <code>&lt;body&gt;</code> scrolling and{' '}
                    <code>backdrop</code> prop to toggle the backdrop.
                </p>

                <div className="button-list">
                    {(options || []).map((props, idx) => (
                        <BackdropButton key={idx} name={props.name} scroll={props.scroll} backdrop={props.backdrop} />
                    ))}
                </div>
            </Card.Body>
        </Card>
    );
};

export default OffCanvasWithBackdrop;
