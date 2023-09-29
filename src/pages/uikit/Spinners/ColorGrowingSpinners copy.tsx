import { Card, Spinner } from 'react-bootstrap';

const colors: string[] = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'];

const ColorGrowingSpinners = () => {
    return (
        <Card>
            <Card.Body>
                <h4 className="mt-0 header-title">Color Growing spinner</h4>
                <p className="text-muted mb-4">
                    All standard visual variants are available for both animation styles by setting the{' '}
                    <code>variant</code> property.
                </p>

                {(colors || []).map((color, index) => {
                    return <Spinner key={index.toString()} className="m-2" variant={color} animation="grow" />;
                })}
            </Card.Body>
        </Card>
    );
};

export default ColorGrowingSpinners;
