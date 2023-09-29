import { Col, Row } from 'react-bootstrap';

// images
import avatar6 from '../../../assets/images/users/user-6.jpg';
import img1 from '../../../assets/images/small/img-1.jpg';
import img2 from '../../../assets/images/small/img-3.jpg';

const ImageShapes = () => {
    return (
        <>
            <h4 className="header-title">Images shapes</h4>
            <p className="sub-header">
                Add classes to an <code>&lt;img /&gt;</code> element to easily style images in any project.
            </p>

            <Row>
                <Col sm={4}>
                    <img src={img1} alt="" className="img-fluid rounded" width="200" />
                    <p className="mb-0">
                        <code>.rounded</code>
                    </p>
                </Col>

                <Col sm={4} className="text-center">
                    <img src={avatar6} alt="" className="img-fluid rounded-circle" width="120" />
                    <p className="mb-0">
                        <code>.rounded-circle</code>
                    </p>
                </Col>

                <Col sm={4}>
                    <img src={img2} alt="" className="img-fluid img-thumbnail" width="200" />
                    <p className="mb-0">
                        <code>.img-thumbnail</code>
                    </p>
                </Col>
            </Row>
        </>
    );
};

export default ImageShapes;
