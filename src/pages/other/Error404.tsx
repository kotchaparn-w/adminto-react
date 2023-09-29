import { Link } from 'react-router-dom';

// components
import AuthLayout from '../auth/AuthLayout';

const Error404 = () => {
    return (
        <AuthLayout>
            <div className="text-center">
                <h1 className="text-error">404</h1>
                <h3 className="mt-3 mb-2">Page not Found</h3>
                <p className="text-muted mb-3">
                    It's looking like you may have taken a wrong turn. Don't worry... it happens to the best of us. You
                    might want to check your internet connection. Here's a little tip that might help you get back on
                    track.
                </p>

                <Link to="/" className="btn btn-danger waves-effect waves-light">
                    <i className="fas fa-home me-1"></i> Back to Home
                </Link>
            </div>
        </AuthLayout>
    );
};

export default Error404;
