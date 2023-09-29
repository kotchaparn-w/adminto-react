import { Button } from 'react-bootstrap';

// types
import { Variant } from './types';

type OutlineRoundedButtonProps = {
    variants: Variant[];
};

type ButtonVariant = Variant | 'light';

const OutlineRoundedButton = ({ variants }: OutlineRoundedButtonProps) => {
    const outlineRoundedButtonVariants: ButtonVariant[] = [...variants, 'light'];

    return (
        <>
            <h4 className="header-title">Outline Rounded Buttons</h4>
            <p className="sub-header">
                Add <code>.rounded-pill</code> to default button to get rounded corners.
            </p>

            <div className="button-list">
                {(outlineRoundedButtonVariants || []).map((item, index) => {
                    return (
                        <Button
                            variant={'outline-' + item}
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

export default OutlineRoundedButton;
