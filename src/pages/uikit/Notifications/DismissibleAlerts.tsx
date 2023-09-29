import { useState } from 'react';
import { Card, Alert } from 'react-bootstrap';

const DismissibleAlerts = () => {
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
                <h4 className="header-title">Dismissing Alerts</h4>
                <p className="sub-header">
                    Add the <code>dismissible</code> prop to add a functioning dismiss button to the Alert.
                </p>

                {colors.map((color, index) => {
                    return (
                        <Alert variant={color} key={index.toString()} onClose={() => handleClose(index)} dismissible>
                            <strong>{color} - </strong> A simple {color} alert—check it out!
                        </Alert>
                    );
                })}
            </Card.Body>
        </Card>
    );
};

export default DismissibleAlerts;
