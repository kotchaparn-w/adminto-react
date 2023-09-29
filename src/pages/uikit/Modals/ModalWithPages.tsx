import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, Modal } from 'react-bootstrap';

// images
import logodark from '../../../assets/images/logo-dark.png';
import logolight from '../../../assets/images/logo-light.png';

const ModalsWithPages = () => {
    const [signUpModal, setSignUpModal] = useState<boolean>(false);
    const [signInModal, setSignInModal] = useState<boolean>(false);

    // Show/hide the modal
    const toggleSignUp = () => {
        setSignUpModal(!signUpModal);
    };

    const toggleSignIn = () => {
        setSignInModal(!signInModal);
    };

    return (
        <Card>
            <Card.Body>
                <h4 className="header-title">Modal with Pages</h4>

                <p className="sub-header">Examples of custom modals.</p>

                <div className="button-list">
                    <Button onClick={toggleSignUp}>Sign Up Modal</Button>

                    <Button variant="info" onClick={toggleSignIn}>
                        Log In Modal
                    </Button>
                </div>

                {/* Sign up Modal */}
                <Modal show={signUpModal} onHide={toggleSignUp}>
                    <Modal.Body>
                        <div className="text-center mt-2 mb-4">
                            <div className="auth-logo">
                                <Link to="/" className="logo logo-dark">
                                    <span className="logo-lg">
                                        <img src={logodark} alt="" height="24" />
                                    </span>
                                </Link>

                                <Link to="/" className="logo logo-light">
                                    <span className="logo-lg">
                                        <img src={logolight} alt="" height="24" />
                                    </span>
                                </Link>
                            </div>
                        </div>
                        <form className="ps-3 pe-3">
                            <div className="mb-3">
                                <label htmlFor="username" className="form-label">
                                    Name
                                </label>
                                <input
                                    className="form-control"
                                    type="email"
                                    id="username"
                                    required
                                    placeholder="Michael Zenaty"
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="emailaddress" className="form-label">
                                    Email address
                                </label>
                                <input
                                    className="form-control"
                                    type="email"
                                    id="emailaddress"
                                    required
                                    placeholder="john@deo.com"
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">
                                    Password
                                </label>
                                <input
                                    className="form-control"
                                    type="password"
                                    required
                                    id="password"
                                    placeholder="Enter your password"
                                />
                            </div>

                            <div className="mb-3">
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="customCheck1" />
                                    <label className="form-check-label" htmlFor="customCheck1">
                                        I accept <Link to="#">Terms and Conditions</Link>
                                    </label>
                                </div>
                            </div>

                            <div className="mb-3 text-center">
                                <button className="btn btn-primary" type="submit">
                                    Sign Up Free
                                </button>
                            </div>
                        </form>
                    </Modal.Body>
                </Modal>

                {/* Sign in Modal */}
                <Modal show={signInModal} onHide={toggleSignIn}>
                    <Modal.Body>
                        <div className="text-center mt-2 mb-4">
                            <div className="auth-logo">
                                <Link to="/" className="logo logo-dark">
                                    <span className="logo-lg">
                                        <img src={logodark} alt="" height="24" />
                                    </span>
                                </Link>

                                <Link to="/" className="logo logo-light">
                                    <span className="logo-lg">
                                        <img src={logolight} alt="" height="24" />
                                    </span>
                                </Link>
                            </div>
                        </div>
                        <form className="ps-3 pe-3">
                            <div className="mb-3">
                                <label htmlFor="emailaddress" className="form-label">
                                    Email address
                                </label>
                                <input
                                    className="form-control"
                                    type="email"
                                    id="emailaddress"
                                    required
                                    placeholder="john@deo.com"
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">
                                    Password
                                </label>
                                <input
                                    className="form-control"
                                    type="password"
                                    required
                                    id="password"
                                    placeholder="Enter your password"
                                />
                            </div>

                            <div className="mb-3">
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="customCheck1" />
                                    <label className="form-check-label" htmlFor="customCheck1">
                                        Remember me
                                    </label>
                                </div>
                            </div>

                            <div className="mb-3 text-center">
                                <button className="btn rounded-pill btn-primary" type="submit">
                                    Sign In
                                </button>
                            </div>
                        </form>
                    </Modal.Body>
                </Modal>
            </Card.Body>
        </Card>
    );
};

export default ModalsWithPages;
