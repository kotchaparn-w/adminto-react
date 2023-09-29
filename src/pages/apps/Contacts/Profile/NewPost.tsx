import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NewPost = () => {
    return (
        <Card>
            <Card.Body>
                <form className="comment-area-box">
                    <span className="input-icon icon-end">
                        <textarea rows={3} className="form-control" placeholder="Post a new message"></textarea>
                    </span>
                    <div className="pt-1 float-end">
                        <Link to="#" className="btn btn-info btn-sm waves-effect waves-light">
                            Send
                        </Link>
                    </div>

                    <ul className="nav nav-pills profile-pills mt-1">
                        <li>
                            <Link to="#">
                                <i className="fa fa-user"></i>
                            </Link>
                        </li>
                        <li>
                            <Link to="#">
                                <i className="fa fa-location-arrow"></i>
                            </Link>
                        </li>
                        <li>
                            <Link to="#">
                                <i className="fa fa-camera"></i>
                            </Link>
                        </li>
                        <li>
                            <Link to="#">
                                <i className="far fa-smile"></i>
                            </Link>
                        </li>
                    </ul>
                </form>
            </Card.Body>
        </Card>
    );
};

export default NewPost;
