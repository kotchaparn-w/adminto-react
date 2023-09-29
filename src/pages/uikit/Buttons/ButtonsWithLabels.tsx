import { Button } from 'react-bootstrap';

// types
import { ButtonsWithLabel } from './types';

type ButtonWithLabelsProps = {
    buttonswithLabels: ButtonsWithLabel[];
};

const ButtonWithLabels = ({ buttonswithLabels }: ButtonWithLabelsProps) => {
    return (
        <>
            <h4 className="header-title">Buttons Labels</h4>
            <p className="sub-header">
                Put <code>&lt;span&gt;</code> with class <code>.btn-label</code> and any <code>icon</code> inside it. If
                you want to put icon on right side then add class <code>.btn-label-right</code> in{' '}
                <code>&lt;span&gt;</code>
            </p>

            <div className="button-list">
                {(buttonswithLabels || []).map((item, index) => {
                    return (
                        <Button variant={item.variant} className="waves-effect waves-light" key={index.toString()}>
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
                        <Button variant={item.variant} className="waves-effect waves-light" key={index.toString()}>
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

export default ButtonWithLabels;
