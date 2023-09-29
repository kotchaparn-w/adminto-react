import { Card, Col, Row } from 'react-bootstrap';

// images
import user1 from '../../../assets/images/users/user-2.jpg';
import user2 from '../../../assets/images/users/user-3.jpg';
import user3 from '../../../assets/images/users/user-4.jpg';
import user4 from '../../../assets/images/users/user-5.jpg';
import user5 from '../../../assets/images/users/user-6.jpg';

const ImageSizing = () => {
    return (
        <Card>
            <Card.Body>
                <h4 className="header-title">Sizing - Images</h4>
                <p className="text-muted font-14 mb-3">
                    Create and group avatars of different sizes and shapes with the css classes. Using Bootstrap's
                    naming convention, you can control size of avatar including standard avatar, or scale it up to
                    different sizes.
                </p>
                <Row>
                    <Col md={3}>
                        <img src={user1} alt="" className="img-fluid avatar-xs rounded" />
                        <p>
                            <code>.avatar-xs</code>
                        </p>
                        <img src={user2} alt="" className="img-fluid avatar-sm rounded mt-2" />
                        <p className="mb-2 mb-sm-0">
                            <code>.avatar-sm</code>
                        </p>
                    </Col>
                    <Col md={3}>
                        <img src={user3} alt="" className="img-fluid avatar-md rounded" />
                        <p>
                            <code>.avatar-md</code>
                        </p>
                    </Col>
                    <Col md={3}>
                        <img src={user4} alt="" className="img-fluid avatar-lg rounded" />
                        <p>
                            <code>.avatar-lg</code>
                        </p>
                    </Col>
                    <Col md={3}>
                        <img src={user5} alt="" className="img-fluid avatar-xl rounded" />
                        <p>
                            <code>.avatar-xl</code>
                        </p>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
};

export default ImageSizing;
