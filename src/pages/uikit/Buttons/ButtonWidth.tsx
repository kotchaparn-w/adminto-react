import { Button } from 'react-bootstrap';

const ButtonWidth = () => {
    return (
        <>
            <h4 className="header-title">Button Width</h4>
            <p className="sub-header">
                Create buttons with minimum width by adding add <code>.width-xs</code>, <code>.width-sm</code>,{' '}
                <code>.width-md</code>, <code>.width-lg</code> or <code>.width-xl</code>.
            </p>

            <div className="button-list">
                <Button className="width-xs waves-effect waves-light">xs</Button>
                <Button variant="success" className="width-sm waves-effect waves-light">
                    Small
                </Button>
                <Button variant="info" className="width-md waves-effect waves-light">
                    Middle
                </Button>
                <Button variant="warning" className="width-lg waves-effect waves-light">
                    Large
                </Button>
                <Button variant="danger" className="width-xl waves-effect waves-light">
                    Extra Large
                </Button>
            </div>
        </>
    );
};

export default ButtonWidth;
