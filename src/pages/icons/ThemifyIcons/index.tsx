import { Card, Col, Row } from 'react-bootstrap';
import classNames from 'classnames';

// hooks
import { usePageTitle } from '../../../hooks';

// data
import { THEMIFYICONS_LIST } from './data';

const ThemifyIcons = () => {
    // set pagetitle
    usePageTitle({
        title: 'Themify Icons',
        breadCrumbItems: [
            {
                path: '/icons/themify',
                label: 'Icons',
            },
            {
                path: '/icons/themify',
                label: 'Themify Icons',
                active: true,
            },
        ],
    });

    return (
        <Row>
            <Col>
                <Card>
                    <Card.Body>
                        <h4 className="header-title">Arrows & Direction Icons</h4>
                        <p className="text-muted font-13">
                            Use <code>&lt;i className="ti-arrow-up"&gt;&lt;/i&gt;</code>.
                        </p>

                        <Row className="icons-list-demo">
                            {(THEMIFYICONS_LIST || []).map((icon, index) => {
                                return (
                                    icon.category === 'arrows-direction' && (
                                        <Col key={index.toString()} sm={6} md={4} lg={3}>
                                            <i className={classNames(icon.name)}></i> <span>{icon.name}</span>
                                        </Col>
                                    )
                                );
                            })}
                        </Row>

                        <h4 className="header-title my-3">Web App Icons</h4>
                        <Row className="icons-list-demo">
                            {(THEMIFYICONS_LIST || []).map((icon, index) => {
                                return (
                                    icon.category === 'web-app' && (
                                        <Col key={index.toString()} sm={6} md={4} lg={3}>
                                            <i className={classNames(icon.name)}></i> <span>{icon.name}</span>
                                        </Col>
                                    )
                                );
                            })}
                        </Row>

                        <h4 className="header-title my-3">Control Icons</h4>
                        <Row className="icons-list-demo">
                            {(THEMIFYICONS_LIST || []).map((icon, index) => {
                                return (
                                    icon.category === 'control' && (
                                        <Col key={index.toString()} sm={6} md={4} lg={3}>
                                            <i className={classNames(icon.name)}></i> <span>{icon.name}</span>
                                        </Col>
                                    )
                                );
                            })}
                        </Row>

                        <h4 className="header-title my-3">Text Editor</h4>
                        <Row className="icons-list-demo">
                            {(THEMIFYICONS_LIST || []).map((icon, index) => {
                                return (
                                    icon.category === 'text-editor' && (
                                        <Col key={index.toString()} sm={6} md={4} lg={3}>
                                            <i className={classNames(icon.name)}></i> <span>{icon.name}</span>
                                        </Col>
                                    )
                                );
                            })}
                        </Row>

                        <h4 className="header-title my-3">Layout Icons</h4>
                        <Row className="icons-list-demo">
                            {(THEMIFYICONS_LIST || []).map((icon, index) => {
                                return (
                                    icon.category === 'layout' && (
                                        <Col key={index.toString()} sm={6} md={4} lg={3}>
                                            <i className={classNames(icon.name)}></i> <span>{icon.name}</span>
                                        </Col>
                                    )
                                );
                            })}
                        </Row>

                        <h4 className="header-title my-3">Brand Icons</h4>
                        <Row className="icons-list-demo">
                            {(THEMIFYICONS_LIST || []).map((icon, index) => {
                                return (
                                    icon.category === 'brand' && (
                                        <Col key={index.toString()} sm={6} md={4} lg={3}>
                                            <i className={classNames(icon.name)}></i> <span>{icon.name}</span>
                                        </Col>
                                    )
                                );
                            })}
                        </Row>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
};

export default ThemifyIcons;
