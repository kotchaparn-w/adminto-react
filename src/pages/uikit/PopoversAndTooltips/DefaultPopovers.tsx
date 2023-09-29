import { Button, Card, OverlayProps, OverlayTrigger, Popover } from 'react-bootstrap';

type Direction = {
    placement: OverlayProps['placement'];
};

const DefaultPopover = () => {
    const directions: Direction[] = [
        { placement: 'top' },
        { placement: 'bottom' },
        { placement: 'right' },
        { placement: 'left' },
    ];

    const popover = (
        <Popover id="popover-direction">
            <Popover.Body>And here's some amazing content. It's very engaging. Right?</Popover.Body>
        </Popover>
    );

    return (
        <Card>
            <Card.Body>
                <h4 className="header-title">Popovers</h4>
                <p className="sub-header">
                    Add small overlays of content, like those on the iPad, to any element for housing secondary
                    information.
                </p>
                <div className="button-list">
                    {(directions || []).map((item) => (
                        <OverlayTrigger
                            trigger="click"
                            key={item.placement}
                            placement={item.placement}
                            overlay={
                                <Popover popper id={`popover-positioned-${item.placement}`}>
                                    <Popover.Body>
                                        Vivamus sagittis lacus vel augue laoreet rutrum faucibus.
                                    </Popover.Body>
                                </Popover>
                            }
                        >
                            <Button variant="light" className="me-1">
                                Popover on {item.placement}
                            </Button>
                        </OverlayTrigger>
                    ))}

                    <OverlayTrigger trigger="focus" placement="right" overlay={popover}>
                        <Button>Dismissible popover</Button>
                    </OverlayTrigger>
                </div>
            </Card.Body>
        </Card>
    );
};

export default DefaultPopover;
