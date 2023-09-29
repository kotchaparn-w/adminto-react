import { Link } from 'react-router-dom';

// components
import AuthLayout from '../auth/AuthLayout';

const Error500 = () => {
    return (
        <AuthLayout>
            <div className="text-center">
                <h1 className="text-error">500</h1>
                <h3 className="mt-3 mb-2">Internal Server Error</h3>
                <p className="text-muted mb-3">
                    Why not try refreshing your page? or you can contact{' '}
                    <Link to="#" className="text-dark">
                        <b>Support</b>
                    </Link>
                </p>

                <Link to="/" className="btn btn-danger waves-effect waves-light">
                    <i className="fas fa-home me-1"></i> Back to Home
                </Link>
            </div>
        </AuthLayout>
    );
};

export default Error500;
