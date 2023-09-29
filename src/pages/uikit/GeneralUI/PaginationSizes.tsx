import { Pagination } from 'react-bootstrap';

const PaginationSizes = () => {
    let items = [];
    for (let number = 1; number <= 3; number++) {
        items.push(<Pagination.Item key={number}>{number}</Pagination.Item>);
    }
    return (
        <>
            <p className="mb-1 fw-bold mt-4">Sizing</p>
            <p className="text-muted font-14">
                Add <code>lg</code> or <code>sm</code> type to <code>size</code> prop for additional sizes.
            </p>

            <Pagination size="lg">
                <Pagination.Prev />
                {items}
                <Pagination.Next />
            </Pagination>

            <Pagination size="sm">
                <Pagination.Prev />
                {items}
                <Pagination.Next />
            </Pagination>
        </>
    );
};

export default PaginationSizes;
