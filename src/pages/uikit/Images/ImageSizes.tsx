import { Col, Row } from 'react-bootstrap';

// images
import avatar5 from '../../../assets/images/users/user-5.jpg';

const ImageSizes = () => {
    return (
        <>
            <h4 className="header-title">Image sizes</h4>
            <p className="sub-header">
                Add classes to an <code>&lt;img /&gt;</code> element to easily style images in any project.
            </p>

            <Row>
                <Col sm={3}>
                    <img src={avatar5} alt="" className="img-fluid avatar-xs rounded" />
                    <p className="mb-0">
                        <code>.avatar-xs</code>
                    </p>
                    <img src={avatar5} alt="" className="img-fluid avatar-sm rounded mt-2" />
                    <p className="mb-0">
                        <code>.avatar-sm</code>
                    </p>
                </Col>

                <Col sm={3}>
                    <img src={avatar5} alt="" className="img-fluid avatar-md rounded" />
                    <p className="mb-0">
                        <code>.avatar-md</code>
                    </p>
                </Col>

                <Col sm={3}>
                    <img src={avatar5} alt="" className="img-fluid avatar-lg rounded" />
                    <p className="mb-0">
                        <code>.avatar-lg</code>
                    </p>
                </Col>

                <Col sm={3}>
                    <img src={avatar5} alt="" className="img-fluid avatar-xl rounded" />
                    <p className="mb-0">
                        <code>.avatar-xl</code>
                    </p>
                </Col>
            </Row>
        </>
    );
};

export default ImageSizes;
