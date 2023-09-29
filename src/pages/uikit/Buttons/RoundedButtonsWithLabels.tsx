import { Button } from 'react-bootstrap';

// types
import { ButtonsWithLabel } from './types';

type ButtonWithLabelsProps = {
    buttonswithLabels: ButtonsWithLabel[];
};

const RoundedButtonWithLabels = ({ buttonswithLabels }: ButtonWithLabelsProps) => {
    return (
        <>
            <h4 className="header-title">Rounded Buttons Labels</h4>
            <p className="sub-header">
                Add <code>.rounded-pill</code> to default button to get rounded corners.
            </p>

            <div className="button-list">
                {(buttonswithLabels || []).map((item, index) => {
                    return (
                        <Button
                            variant={item.variant}
                            className="rounded-pill waves-effect waves-light"
                            key={index.toString()}
                        >
                            <span className="btn-label">
                                <i className={item.icon}></i>
                            </span>
                            {item.variant!.charAt(0).toUpperCase() + item.variant!.slice(1)}
                        </Button>
                    );
                })}
            </div>
            <br />
            <div className="button-list">
                {(buttonswithLabels || []).map((item, index) => {
                    return (
                        <Button
                            variant={item.variant}
                            className="rounded-pill waves-effect waves-light"
                            key={index.toString()}
                        >
                            {item.variant!.charAt(0).toUpperCase() + item.variant!.slice(1)}
                            <span className="btn-label-right">
                                <i className={item.icon}></i>
                            </span>
                        </Button>
                    );
                })}
            </div>
        </>
    );
};

export default RoundedButtonWithLabels;
