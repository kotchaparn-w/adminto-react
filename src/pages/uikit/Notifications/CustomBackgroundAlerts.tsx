import { Card, Alert } from 'react-bootstrap';
import classNames from 'classnames';

const colors: string[] = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'];

const CustomBackgroundAlerts = () => {
    return (
        <Card>
            <Card.Body>
                <h4 className="header-title">Custom Background Alert</h4>
                <p className="sub-header">
                    Use <code>.bg-*</code>,<code>.border-0</code> classes.
                </p>

                {(colors || []).map((color, index) => {
                    return (
                        <Alert
                            variant={color}
                            key={index.toString()}
                            className={classNames(
                                'bg-' + color,
                                'border-0',
                                color === 'light' ? 'text-dark' : 'text-white',
                                color === 'dark' ? 'text-light' : 'text-white'
                            )}
                        >
                            This is a <strong>{color}</strong> alert—check it out!
                        </Alert>
                    );
                })}
            </Card.Body>
        </Card>
    );
};

export default CustomBackgroundAlerts;
