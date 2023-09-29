import { Pagination } from 'react-bootstrap';

const RoundedPagination = () => {
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
            <p className="mb-1 fw-bold mt-4">Rounded Pagination</p>
            <p className="text-muted font-14">
                Add <code> .pagination-rounded</code> for rounded pagination.
            </p>
            <Pagination className="pagination-rounded">
                <Pagination.Prev />
                {items}
                <Pagination.Next />
            </Pagination>
        </>
    );
};

export default RoundedPagination;
