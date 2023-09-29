import { Button, Card, OverlayProps, OverlayTrigger, Tooltip } from 'react-bootstrap';

type Direction = {
    placement: OverlayProps['placement'];
};

const DefaultTooltips = () => {
    const directions: Direction[] = [
        { placement: 'top' },
        { placement: 'bottom' },
        { placement: 'right' },
        { placement: 'left' },
    ];

    return (
        <Card>
            <Card.Body>
                <h4 className="header-title">Tooltips</h4>
                <p className="text-muted font-14">Four options are available: top, right, bottom, and left aligned.</p>

                <div className="button-list">
                    {(directions || []).map((item) => (
                        <OverlayTrigger
                            key={item.placement}
                            placement={item.placement}
                            overlay={
                                <Tooltip id={`tooltip-${item.placement}`}>
                                    Tooltip on <strong>{item.placement}</strong>.
                                </Tooltip>
                            }
                        >
                            <Button variant="light" className="me-1">
                                Tooltip on {item.placement}
                            </Button>
                        </OverlayTrigger>
                    ))}
                </div>
            </Card.Body>
        </Card>
    );
};

export default DefaultTooltips;
