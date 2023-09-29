import { Card, Col, Row } from 'react-bootstrap';

// images
import img1 from '../../../assets/images/small/img-2.jpg';
import img2 from '../../../assets/images/users/user-5.jpg';
import img3 from '../../../assets/images/users/user-7.jpg';
import img4 from '../../../assets/images/small/img-3.jpg';
import img5 from '../../../assets/images/users/user-8.jpg';

const ImageShapes = () => {
    return (
        <Card>
            <Card.Body>
                <h4 className="header-title">Images Shapes</h4>
                <p className="text-muted font-14 mb-3">Avatars with different sizes and shapes.</p>
                <Row>
                    <Col sm={2}>
                        <img src={img1} alt="" className="img-fluid rounded" width="200" />
                        <p className="mb-0">
                            <code>.rounded</code>
                        </p>
                    </Col>
                    <Col sm={2} className="text-center">
                        <img src={img2} alt="" className="img-fluid rounded" width="120" />
                        <p className="mb-0">
                            <code>.rounded</code>
                        </p>
                    </Col>

                    <Col sm={2} className="text-center">
                        <img src={img3} alt="" className="img-fluid rounded-circle" width="120" />
                        <p className="mb-0">
                            <code>.rounded-circle</code>
                        </p>
                    </Col>

                    <Col sm={2}>
                        <img src={img4} alt="" className="img-fluid img-thumbnail" width="200" />
                        <p className="mb-0">
                            <code>.img-thumbnail</code>
                        </p>
                    </Col>
                    <Col sm={2}>
                        <img src={img5} alt="" className="img-fluid rounded-circle img-thumbnail" width="120" />
                        <p className="mb-0">
                            <code>.rounded-circle .img-thumbnail</code>
                        </p>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
};

export default ImageShapes;
