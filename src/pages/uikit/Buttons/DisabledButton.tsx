import { Button } from 'react-bootstrap';

const DisabledButton = () => {
    return (
        <>
            <h4 className="header-title">Button Disabled</h4>
            <p className="sub-header">
                Add the <code>disabled</code> prop to <code>&lt;Button&gt;</code> buttons.
            </p>

            <div className="button-list">
                <Button disabled>Primary</Button>
                <Button variant="success" disabled>
                    Success
                </Button>
                <Button variant="info" disabled>
                    Info
                </Button>
                <Button variant="warning" disabled>
                    Warning
                </Button>
            </div>
        </>
    );
};

export default DisabledButton;
