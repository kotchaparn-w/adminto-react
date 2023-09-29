import { Button } from 'react-bootstrap';

const BlockButton = () => {
    return (
        <>
            <h4 className="header-title mt-4">Block Buttons</h4>
            <p className="sub-header">
                Create block level buttons by adding class <code>.d-grid</code> to parent div.
            </p>

            <div className="button-list pe-xl-4 d-grid">
                <Button size="lg" className="waves-effect waves-light">
                    Block Button
                </Button>
                <Button variant="pink" className="waves-effect waves-light">
                    Block Button
                </Button>
                <Button variant="success" size="sm" className="waves-effect waves-light">
                    Block Button
                </Button>
            </div>
        </>
    );
};

export default BlockButton;
