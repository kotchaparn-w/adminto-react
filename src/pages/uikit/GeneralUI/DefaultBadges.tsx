import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

const DefaultBadges = () => {
    return (
        <Card>
            <Card.Body>
                <h4 className="header-title">Default</h4>
                <p className="sub-header">
                    A simple labeling component. Badges scale to match the size of the immediate parent element by using
                    relative font sizing and <code>em</code> units.
                </p>

                <h1>
                    h1.Example heading <span className="badge bg-secondary text-light">New</span>
                </h1>
                <h2>
                    h2.Example heading <span className="badge badge-soft-success">New</span>
                </h2>
                <h3>
                    h3.Example heading <span className="badge bg-primary">New</span>
                </h3>
                <h4>
                    h4.Example heading{' '}
                    <Link to="/" className="badge badge-soft-info">
                        Info Link
                    </Link>
                </h4>
                <h5>
                    h5.Example heading <span className="badge badge-outline-warning">New</span>
                </h5>
                <h6>
                    h6.Example heading <span className="badge bg-danger">New</span>
                </h6>
            </Card.Body>
        </Card>
    );
};

export default DefaultBadges;
