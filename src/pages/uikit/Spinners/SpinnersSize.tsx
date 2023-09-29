import { Card } from 'react-bootstrap';

// component
import Spinner from '../../../components/Spinner';

const SpinnersSizes = () => {
    const sizes: ('lg' | 'md' | 'sm')[] = ['lg', 'md', 'sm'];

    return (
        <Card>
            <Card.Body>
                <h4 className="mt-0 header-title">Size</h4>
                <p className="text-muted mb-4">
                    Add <code>size</code> attribute to make spinner with sizes including lg, md or sm.
                </p>
                <div className="row">
                    {(sizes || []).map((size, index) => {
                        return (
                            <div key={index.toString()} className="col-lg-6">
                                <Spinner className="text-primary m-2" color="primary" size={size} />
                                <Spinner className="text-secondary m-2" type="grow" size={size} />
                            </div>
                        );
                    })}
                    <div className="col-lg-6">
                        <Spinner className="spinner-border-sm m-2" />
                        <Spinner type="grow" className="spinner-grow-sm m-2" />
                    </div>
                </div>
            </Card.Body>
        </Card>
    );
};

export default SpinnersSizes;
