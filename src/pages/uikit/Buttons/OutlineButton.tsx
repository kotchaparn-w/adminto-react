import { Button } from 'react-bootstrap';

// types
import { Variant } from './types';

type OutlineButtonProps = {
    variants: Variant[];
};

type ButtonVariant = Variant | 'light';

const OutlineButton = ({ variants }: OutlineButtonProps) => {
    const outlineButtonVariants: ButtonVariant[] = [...variants, 'light'];

    return (
        <>
            <h4 className="header-title">Outline Buttons</h4>
            <p className="sub-header">
                Use a classes <code>.btn-outline-**</code> to quickly create a bordered buttons.
            </p>

            <div className="button-list">
                {(outlineButtonVariants || []).map((item, index) => {
                    return (
                        <Button variant={'outline-' + item} className="waves-effect waves-light" key={index.toString()}>
                            {item!.charAt(0).toUpperCase() + item!.slice(1)}
                        </Button>
                    );
                })}
            </div>
        </>
    );
};

export default OutlineButton;
