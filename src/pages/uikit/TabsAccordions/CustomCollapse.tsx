import { useState } from 'react';
import { Button, Card, Collapse } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CustomCollapse = () => {
    const [isOpen, setIsOpen] = useState<boolean>(true);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <>
            <p>
                <Link to="#" className="btn btn-primary waves-effect waves-light" onClick={toggle}>
                    Link with href
                </Link>

                <Button color="primary" className="waves-effect waves-light ms-1" onClick={toggle}>
                    Button with data-bs-target
                </Button>
            </p>
            <Collapse in={isOpen}>
                <div>
                    <Card>
                        <Card.Body>
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad
                            squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente
                            ea proident.
                        </Card.Body>
                    </Card>
                </div>
            </Collapse>
        </>
    );
};

export default CustomCollapse;
