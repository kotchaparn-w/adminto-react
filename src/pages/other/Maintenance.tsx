import { useEffect } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MaintenanceSVG = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="122"
            height="122"
            viewBox="0 0 122 122"
        >
            <defs>
                <path
                    id="gear"
                    d="M72,52.4v-8.8l-5.4-0.9c-0.4-1.5-1-2.9-1.7-4.1l3.2-4.4l-6.2-6.3L57.4,31c-1.3-0.7-2.7-1.3-4.1-1.7L52.4,24h-8.8l-0.9,5.4  c-1.5,0.4-2.8,1-4.1,1.7L34.2,28l-6.3,6.2l3.2,4.4c-0.7,1.3-1.3,2.7-1.7,4.2L24,43.6v8.8l5.4,0.9c0.4,1.5,1,2.8,1.7,4.1l-3.2,4.5  l6.2,6.2l4.5-3.2c1.3,0.7,2.7,1.3,4.2,1.7l0.9,5.3h8.8l0.9-5.4c1.4-0.4,2.8-1,4.1-1.7l4.5,3.2l6.2-6.2l-3.2-4.5  c0.7-1.3,1.3-2.6,1.7-4.1L72,52.4z M48,57.2c-5.1,0-9.2-4.1-9.2-9.2c0-5.1,4.2-9.2,9.2-9.2s9.2,4.1,9.2,9.2S53.1,57.2,48,57.2z"
                />
            </defs>
            <g transform="scale(0.77)">
                <use xlinkHref="#gear" fill="#5b69bc">
                    <animateTransform
                        attributeType="XML"
                        attributeName="transform"
                        type="rotate"
                        from="0 48 48"
                        to="360 48 48"
                        dur="12s"
                        repeatCount="indefinite"
                    />
                </use>
            </g>
            <g transform="scale(0.6) translate(83 13)">
                <use xlinkHref="#gear" fill="#10c469">
                    <animateTransform
                        attributeType="XML"
                        attributeName="transform"
                        type="rotate"
                        from="360 48 48"
                        to="0 48 48"
                        dur="12s"
                        repeatCount="indefinite"
                    />
                </use>
            </g>
            <g transform="scale(0.435) translate(37 139)">
                <use xlinkHref="#gear" fill="#f9c851">
                    <animateTransform
                        attributeType="XML"
                        attributeName="transform"
                        type="rotate"
                        from="360 48 48"
                        to="0 48 48"
                        dur="12s"
                        repeatCount="indefinite"
                    />
                </use>
            </g>
            <g transform="scale(0.935) translate(36 39)">
                <use xlinkHref="#gear" fill="#ff8acc">
                    <animateTransform
                        attributeType="XML"
                        attributeName="transform"
                        type="rotate"
                        from="0 48 48"
                        to="360 48 48"
                        dur="12s"
                        repeatCount="indefinite"
                    />
                </use>
            </g>
        </svg>
    );
};

const Maintenance = () => {
    useEffect(() => {
        if (document.body) {
            document.body.classList.add('authentication-bg');
        }
        return () => {
            if (document.body) {
                document.body.classList.remove('authentication-bg');
            }
        };
    }, []);

    return (
        <div className="account-pages my-5">
            <Container>
                <Row>
                    <Col lg={12}>
                        <div className="text-center">
                            <MaintenanceSVG />
                            <h3 className="mt-4">Site is under Maintenance</h3>
                            <p className="text-muted">We're making the system more awesome.we'll be back shortly.</p>

                            <Row className="mt-5">
                                <Col md={4}>
                                    <Card>
                                        <Card.Body>
                                            <div className="avatar-md rounded-circle bg-soft-primary mx-auto">
                                                <i className="ti-stats-down font-22 avatar-title text-primary"></i>
                                            </div>
                                            <h5 className="text-uppercase mt-3">Why is the Site Down ?</h5>
                                            <p className="font-13 text-muted mb-0">
                                                There are many variations of passages of Lorem Ipsum available, but the
                                                majority have suffered alteration.
                                            </p>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col md={4}>
                                    <Card>
                                        <Card.Body>
                                            <div className="avatar-md rounded-circle bg-soft-primary mx-auto">
                                                <i className="ti-timer font-22 avatar-title text-primary"></i>
                                            </div>
                                            <h5 className="text-uppercase mt-3">What is the Downtime ?</h5>
                                            <p className="font-13 text-muted mb-0">
                                                Contrary to popular belief, Lorem Ipsum is not simply random text. It
                                                has roots in a piece of classical but the majority.
                                            </p>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col md={4}>
                                    <Card>
                                        <Card.Body>
                                            <div className="avatar-md rounded-circle bg-soft-primary mx-auto">
                                                <i className="ti-headphone-alt font-22 avatar-title text-primary"></i>
                                            </div>
                                            <h5 className="text-uppercase mt-3">Do you need Support ?</h5>
                                            <p className="font-13 text-muted mb-0">
                                                If you are going to use a passage of Lorem Ipsum, you need to be sure
                                                there isn't anything embar..{' '}
                                                <Link to="mailto:#" className="text-muted font-weight-medium">
                                                    no-reply@domain.com
                                                </Link>
                                            </p>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Maintenance;
