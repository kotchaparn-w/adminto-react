import { Col, Row } from 'react-bootstrap';

// hooks
import { usePageTitle } from '../../../hooks';

// component
import DefaultTable from './DefaultTable';
import HoverableTable from './HoverableTable';
import InverseTable from './InverseTable';
import SmallTable from './SmallTable';
import StripedRowsTable from './StripedRowsTable';
import TableHeadOptions from './TableHeadOption';
import BorderedTable from './BorderedTable';
import ContextualTable from './ContexualTable';
import ContextualBackgroundTable from './ContexualBackgroundTable';
import BorderlessTable from './BorderlessTable';
import BorderlessInverseTable from './BorderlessInverseTable';

const BasicTable = () => {
    // set pagetitle
    usePageTitle({
        title: 'Basic Tables',
        breadCrumbItems: [
            {
                path: '/tables/basic',
                label: 'Tables',
            },
            {
                path: '/tables/basic',
                label: 'Basic Tables',
                active: true,
            },
        ],
    });

    return (
        <>
            <Row>
                <Col lg={6}>
                    <DefaultTable />
                </Col>
                <Col lg={6}>
                    <InverseTable />
                </Col>
            </Row>
            <Row>
                <Col lg={6}>
                    <TableHeadOptions variant="light" />
                </Col>
                <Col lg={6}>
                    <TableHeadOptions variant="dark" />
                </Col>
            </Row>
            <Row>
                <Col lg={6}>
                    <StripedRowsTable />
                </Col>
                <Col lg={6}>
                    <BorderedTable />
                </Col>
            </Row>
            <Row>
                <Col lg={6}>
                    <HoverableTable />
                </Col>
                <Col lg={6}>
                    <SmallTable />
                </Col>
            </Row>
            <Row>
                <Col lg={6}>
                    <ContextualTable />
                </Col>
                <Col lg={6}>
                    <ContextualBackgroundTable />
                </Col>
            </Row>
            <Row>
                <Col lg={6}>
                    <BorderlessTable />
                </Col>
                <Col lg={6}>
                    <BorderlessInverseTable />
                </Col>
            </Row>
        </>
    );
};

export default BasicTable;
