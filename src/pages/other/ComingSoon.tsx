import { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Countdown, { CountdownTimeDelta } from 'react-countdown';

// images
import logo from '../../assets/images/logo-dark.png';

const ComingSoon = () => {
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

    // custom renderer with completed condition
    const renderer = ({ days, hours, minutes, seconds, completed }: CountdownTimeDelta) => {
        if (completed) {
            // Render a completed state
            return <h3>Coming Soon</h3>;
        } else {
            // Render a countdown
            return (
                <>
                    <div className="counter-number">
                        <div className="coming-box">
                            {days}
                            <span>Days</span>
                        </div>
                        <div className="coming-box">
                            {hours}
                            <span>Hours</span>
                        </div>
                        <div className="coming-box">
                            {minutes}
                            <span>Minutes</span>
                        </div>
                        <div className="coming-box">
                            {seconds}
                            <span>Seconds</span>
                        </div>
                    </div>
                </>
            );
        }
    };

    return (
        <div className="account-pages my-5">
            <Container>
                <Row>
                    <Col xs={12}>
                        <div className="text-center">
                            <Link to="/" className="logo">
                                <img src={logo} alt="logo" height="22" className="logo-light mx-auto" />
                            </Link>

                            <h3 className="mt-4">Stay tunned, we're launching very soon</h3>
                            <p className="text-muted">We're making the system more awesome.</p>
                        </div>
                    </Col>
                </Row>
                <Row className="mt-5 justify-content-center">
                    <Col md={8} className="text-center">
                        <Countdown date={Date.parse('2022/12/31')} renderer={renderer} />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ComingSoon;
