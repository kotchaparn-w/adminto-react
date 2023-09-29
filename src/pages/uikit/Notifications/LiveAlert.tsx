import { useState } from 'react';
import { Card, Alert, Button } from 'react-bootstrap';

const LiveAlert = () => {
    const [list, setList] = useState<number[]>([]);

    /*
     * handle close
     */
    const handleClose = (index: number) => {
        const updatedList = [...list];
        updatedList.splice(index, 1);
        setList(updatedList);
    };

    return (
        <Card>
            <Card.Body>
                <h4 className="header-title">Alert Live example</h4>
                <p className="sub-header">
                    Click the button below to show an alert (hidden with inline styles to start), then dismiss (and
                    destroy) it with the built-in close button.
                </p>

                {(list || []).map((color, index) => {
                    return (
                        <Alert key={index.toString()} onClose={() => handleClose(index)} dismissible>
                            Nice, you triggered this alert message!
                        </Alert>
                    );
                })}
                <Button onClick={() => setList((prev) => [...prev, prev.length])}>Show live alert</Button>
            </Card.Body>
        </Card>
    );
};

export default LiveAlert;
