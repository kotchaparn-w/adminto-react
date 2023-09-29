import { Button } from 'react-bootstrap';

// types
import { Variant } from './types';

type DefaultButtonProps = {
    variants: Variant[];
};

type ButtonVariant = Variant | 'light' | 'link';

const DefaultButton = ({ variants }: DefaultButtonProps) => {
    const defaultButtonVariants: ButtonVariant[] = [...variants, 'light', 'link'];

    return (
        <>
            <h4 className="header-title">Default Buttons</h4>
            <p className="sub-header">
                Use the button classes on an <code>&lt;a&gt;</code>, <code>&lt;button&gt;</code>, or{' '}
                <code>&lt;input&gt;</code> element.
            </p>

            <div className="button-list">
                {(defaultButtonVariants || []).map((item, index) => {
                    return (
                        <Button variant={item} className="waves-effect waves-light" key={index.toString()}>
                            {item!.charAt(0).toUpperCase() + item!.slice(1)}
                        </Button>
                    );
                })}
            </div>
        </>
    );
};

export default DefaultButton;
