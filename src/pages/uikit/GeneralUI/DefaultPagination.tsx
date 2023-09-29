import { Pagination } from 'react-bootstrap';

const DefaultPagination = () => {
    let items = [];
    for (let number = 1; number <= 5; number++) {
        items.push(
            <Pagination.Item key={number} active={number === 3}>
                {number}
            </Pagination.Item>
        );
    }

    return (
        <>
            <p className="mb-1 fw-bold">Default Pagination</p>
            <p className="text-muted font-14">Simple pagination inspired by Rdio, great for apps and search results.</p>
            <nav>
                <Pagination>
                    <Pagination.Prev />
                    {items}
                    <Pagination.Next />
                </Pagination>
            </nav>
        </>
    );
};

export default DefaultPagination;
