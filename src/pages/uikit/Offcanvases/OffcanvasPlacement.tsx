import { useState } from 'react';
import { Card, Offcanvas, Button } from 'react-bootstrap';

// types
import { PlacementOption } from './types';

type OffcanvasPlacementProps = {
    options: PlacementOption[];
};

const PlacementButton = ({ name, placement }: PlacementOption) => {
    const [show, setShow] = useState<boolean>(false);

    /**
     * handle modal toggle
     */
    const toggle = () => {
        setShow((prevState) => !prevState);
    };

    return (
        <>
            <Button onClick={toggle}>Toggle {name} offcanvas</Button>
            <Offcanvas show={show} onHide={toggle} placement={placement}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Offcanvas {name}</Offcanvas.Title>
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

const OffcanvasPlacement = ({ options }: OffcanvasPlacementProps) => {
    return (
        <Card>
            <Card.Body>
                <h4 className="header-title">Offcanvas Placement</h4>
                <ul className="text-muted">
                    <li>
                        <code>start</code> places offcanvas on the left of the viewport
                    </li>
                    <li>
                        <code>end</code> places offcanvas on the right of the viewport
                    </li>
                    <li>
                        <code>top</code> places offcanvas on the top of the viewport
                    </li>
                    <li>
                        <code>bottom</code> places offcanvas on the bottom of the viewport
                    </li>
                </ul>

                <div className="button-list">
                    {(options || []).map((option, index) => (
                        <PlacementButton key={index.toString()} placement={option.placement!} name={option.name} />
                    ))}
                </div>
            </Card.Body>
        </Card>
    );
};

export default OffcanvasPlacement;
