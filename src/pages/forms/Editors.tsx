import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import SimpleMDEReact from 'react-simplemde-editor';

// styles
import 'easymde/dist/easymde.min.css';

// hooks
import { usePageTitle } from '../../hooks';

const Editors = () => {
    // set pagetitle
    usePageTitle({
        title: 'Editors',
        breadCrumbItems: [
            {
                path: '/forms/editors',
                label: 'Forms',
            },
            {
                path: '/forms/editors',
                label: 'Editors',
                active: true,
            },
        ],
    });

    const delay = 1000;
    const options = {
        autofocus: true,
        autosave: {
            enabled: true,
            uniqueId: '1',
            delay,
        },
    };

    return (
        <Row>
            <Col>
                <Card>
                    <Card.Body>
                        <h4 className="header-title">SimpleMDE</h4>
                        <p className="text-muted font-14 mb-3">
                            SimpleMDE is a light-weight, simple, embeddable, and beautiful JS markdown editor
                        </p>

                        <SimpleMDEReact id="1" options={options} />
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
};

export default Editors;
