import { Pagination } from 'react-bootstrap';

const PaginationAlignment = () => {
    let items = [];
    for (let number = 1; number <= 3; number++) {
        items.push(<Pagination.Item key={number}>{number}</Pagination.Item>);
    }
    return (
        <>
            <p className="mb-1 fw-bold mt-4">Alignment</p>
            <p className="text-muted font-14">Change the alignment of pagination components with flexbox utilities.</p>

            <Pagination className="justify-content-center">
                <Pagination.Prev disabled>Previous</Pagination.Prev>
                <Pagination.Item>{1}</Pagination.Item>
                <Pagination.Item>{2}</Pagination.Item>
                <Pagination.Item>{3}</Pagination.Item>
                <Pagination.Next>Next</Pagination.Next>
            </Pagination>

            <Pagination className="justify-content-end">
                <Pagination.Prev disabled>Previous</Pagination.Prev>
                <Pagination.Item>{1}</Pagination.Item>
                <Pagination.Item>{2}</Pagination.Item>
                <Pagination.Item>{3}</Pagination.Item>
                <Pagination.Next>Next</Pagination.Next>
            </Pagination>
        </>
    );
};

export default PaginationAlignment;
