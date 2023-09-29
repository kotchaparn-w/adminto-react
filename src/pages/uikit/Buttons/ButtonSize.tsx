import { Button } from 'react-bootstrap';

const ButtonSize = () => {
    return (
        <>
            <h4 className="header-title">Button Sizes</h4>
            <p className="sub-header">
                Add <code>size="lg"</code>, <code>size="sm"</code> for additional sizes.
            </p>

            <div className="button-list">
                <Button size="lg" variant="pink" className="waves-effect waves-light">
                    Btn Large
                </Button>
                <Button variant="secondary" className="waves-effect waves-light">
                    Btn Normal
                </Button>
                <Button size="sm" className="waves-effect waves-light">
                    Btn Small
                </Button>
                <Button variant="warning" className="btn-xs waves-effect waves-light">
                    Btn Xs
                </Button>
            </div>
        </>
    );
};

export default ButtonSize;
