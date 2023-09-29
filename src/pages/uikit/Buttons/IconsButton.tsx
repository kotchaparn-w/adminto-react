import { Button } from 'react-bootstrap';

const IconsButton = () => {
    return (
        <>
            <h4 className="header-title">Icon Buttons</h4>
            <p className="sub-header">Icon only button.</p>

            <div className="button-list">
                <Button variant="success">
                    <i className="mdi mdi-heart-half-full"></i>
                </Button>
                <Button variant="danger">
                    <i className="mdi mdi-close"></i>
                </Button>
                <Button variant="info">
                    <i className="mdi mdi-music"></i>
                </Button>
                <Button variant="warning">
                    <i className="mdi mdi-star"></i>
                </Button>
                <Button variant="blue">
                    <i className="mdi mdi-cog"></i>
                </Button>
            </div>
            <br />
            <div className="button-list">
                <Button variant="success">
                    <i className="mdi mdi-heart me-1"></i>Like
                </Button>
                <Button variant="dark">
                    <i className="mdi mdi-email-outline me-1"></i>Share
                </Button>
                <Button variant="info">
                    <i className="mdi mdi-cloud-outline me-1"></i>Cloud Hosting
                </Button>
                <Button variant="warning">
                    Donate <i className="mdi mdi-currency-btc"></i>
                </Button>
            </div>
        </>
    );
};

export default IconsButton;
