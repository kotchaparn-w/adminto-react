import { Card, Alert } from 'react-bootstrap';

const colors: string[] = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'];

const DefaultAlerts = () => {
    return (
        <Card>
            <Card.Body>
                <h4 className="header-title">Default Alert</h4>
                <p className="sub-header">
                    Alerts are available for any length of text, as well as an optional dismiss button. For proper
                    styling, use one of the eight <code>variant</code>s.
                </p>

                {(colors || []).map((color, index) => {
                    return (
                        <Alert variant={color} key={index.toString()}>
                            This is a <strong>{color}</strong> alert—check it out!
                        </Alert>
                    );
                })}
            </Card.Body>
        </Card>
    );
};

export default DefaultAlerts;
