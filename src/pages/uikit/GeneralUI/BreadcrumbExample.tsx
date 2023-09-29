import { Link } from 'react-router-dom';
import { Breadcrumb } from 'react-bootstrap';

const BreadcrumbExample = () => {
    return (
        <>
            <h4 className="header-title mt-3 mt-sm-0">Breadcrumb</h4>
            <p className="text-muted font-14">
                Indicate the current page’s location within a navigational hierarchy that automatically adds separators
                via CSS. Please read the official{' '}
                <Link target="_blank" rel="noreferrer" to="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                    Bootstrap
                </Link>{' '}
                documentation for more options.
            </p>

            <Breadcrumb>
                <Breadcrumb.Item active>Home</Breadcrumb.Item>
            </Breadcrumb>

            <Breadcrumb>
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item active>Library</Breadcrumb.Item>
            </Breadcrumb>

            <Breadcrumb>
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="/ui/general">Library</Breadcrumb.Item>
                <Breadcrumb.Item active>Data</Breadcrumb.Item>
            </Breadcrumb>
        </>
    );
};

export default BreadcrumbExample;
