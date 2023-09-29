import classNames from 'classnames';
import { useState } from 'react';
import { Card, Alert } from 'react-bootstrap';

const CustomDismissibleAlerts = () => {
    const [colors, setColors] = useState<string[]>([
        'primary',
        'secondary',
        'success',
        'danger',
        'warning',
        'info',
        'light',
        'dark',
    ]);

    /*
     * handle close
     */
    const handleClose = (index: number) => {
        const list = [...colors];
        list.splice(index, 1);
        setColors(list);
    };

    return (
        <Card>
            <Card.Body>
                <h4 className="header-title">Dismissing Custom Background Alert</h4>
                <p className="sub-header">
                    Use <code>.bg-*</code>,<code>.border-0</code> classes.
                </p>

                {colors.map((color, index) => {
                    return (
                        <Alert
                            variant={color}
                            className={classNames(
                                'bg-' + color,
                                color === 'light' ? 'text-dark' : 'text-white',
                                color === 'dark' ? 'text-light' : 'text-white'
                            )}
                            key={index.toString()}
                            onClose={() => handleClose(index)}
                            dismissible
                        >
                            <strong>{color} - </strong> A simple {color} alert—check it out!
                        </Alert>
                    );
                })}
            </Card.Body>
        </Card>
    );
};

export default CustomDismissibleAlerts;
