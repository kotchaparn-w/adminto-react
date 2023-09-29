import { Button } from 'react-bootstrap';

// types
import { Variant } from './types';

type RoundedButtonProps = {
    variants: Variant[];
};

type ButtonVariant = Variant | 'white' | 'light';

const RoundedButton = ({ variants }: RoundedButtonProps) => {
    const roundedButtonVariants: ButtonVariant[] = [...variants, 'white', 'light'];

    return (
        <>
            <h4 className="header-title">Rounded Buttons</h4>
            <p className="sub-header">
                Add <code>.rounded-pill</code> to default button to get rounded corners.
            </p>

            <div className="button-list">
                {(roundedButtonVariants || []).map((item, index) => {
                    return (
                        <Button variant={item} className="rounded-pill waves-effect waves-light" key={index.toString()}>
                            {item!.charAt(0).toUpperCase() + item!.slice(1)}
                        </Button>
                    );
                })}
            </div>
        </>
    );
};

export default RoundedButton;
