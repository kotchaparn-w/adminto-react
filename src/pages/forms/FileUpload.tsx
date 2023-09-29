import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';

// hooks
import { usePageTitle } from '../../hooks';

// components
import FileUploader from '../../components/FileUploader';

const FileUpload = () => {
    // set pagetitle
    usePageTitle({
        title: 'File Uploads',
        breadCrumbItems: [
            {
                path: '/forms/upload',
                label: 'Forms',
            },
            {
                path: '/forms/upload',
                label: 'File Uploads',
                active: true,
            },
        ],
    });

    return (
        <Row>
            <Col>
                <Card>
                    <Card.Body>
                        <h4 className="header-title mb-3">Dropzone File Upload</h4>

                        <p className="text-muted font-13 m-b-30">
                            DropzoneJS is an open source library that provides drag’n’drop file uploads with image
                            previews.
                        </p>

                        <FileUploader
                            onFileUpload={(files) => {
                                console.log('Uploaded files - ', files);
                            }}
                        />
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
};

export default FileUpload;
