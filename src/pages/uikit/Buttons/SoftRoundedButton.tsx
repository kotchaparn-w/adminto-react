import { Button } from 'react-bootstrap';

// types
import { Variant } from './types';

type SoftRoundedButtonProps = {
    variants: Variant[];
};

type ButtonVariant = Variant;

const SoftRoundedButton = ({ variants }: SoftRoundedButtonProps) => {
    const softRoundedButtonVariants: ButtonVariant[] = [...variants];

    return (
        <>
            <h4 className="header-title">Soft Rounded Buttons</h4>
            <p className="sub-header">
                Add <code>.rounded-pill</code> to default button to get rounded corners.
            </p>

            <div className="button-list">
                {(softRoundedButtonVariants || []).map((item, index) => {
                    return (
                        <Button
                            variant={'soft-' + item}
                            className="rounded-pill waves-effect waves-light"
                            key={index.toString()}
                        >
                            {item!.charAt(0).toUpperCase() + item!.slice(1)}
                        </Button>
                    );
                })}
            </div>
        </>
    );
};

export default SoftRoundedButton;
