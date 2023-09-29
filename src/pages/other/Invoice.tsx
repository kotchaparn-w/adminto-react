import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// hooks
import { usePageTitle } from '../../hooks';

// data
import { invoiceDetails } from './data';

const Invoice = () => {
    // set pagetitle
    usePageTitle({
        title: 'Invoice',
        breadCrumbItems: [
            {
                path: '/pages/invoice',
                label: 'Extra Pages',
            },
            {
                path: '/pages/invoice',
                label: 'Invoice',
                active: true,
            },
        ],
    });

    return (
        <Row>
            <Col md={12}>
                <Card>
                    <Card.Body>
                        <div className="panel-body">
                            <div className="clearfix">
                                <div className="float-start">
                                    <h3>Adminto</h3>
                                </div>
                                <div className="float-end">
                                    <h4>
                                        Invoice # <br />
                                        <strong>{invoiceDetails.invoice_id}</strong>
                                    </h4>
                                </div>
                            </div>
                            <hr />
                            <Row>
                                <Col md={12}>
                                    <div className="float-start mt-3">
                                        <address>
                                            <strong>{invoiceDetails.address.owner}</strong>
                                            <br />
                                            {invoiceDetails.address.line_1}
                                            <br />
                                            {invoiceDetails.address.city}, {invoiceDetails.address.state}{' '}
                                            {invoiceDetails.address.zip}
                                            <br />
                                            <abbr title="Phone">P:</abbr> {invoiceDetails.address.phone}
                                        </address>
                                    </div>
                                    <div className="float-end mt-3">
                                        <p>
                                            <strong>Order Date: </strong> {invoiceDetails.order_date}
                                        </p>
                                        <p className="m-t-10">
                                            <strong>Order Status: </strong>{' '}
                                            <span className="label label-pink">{invoiceDetails.order_status}</span>
                                        </p>
                                        <p className="m-t-10">
                                            <strong>Order ID: </strong> {invoiceDetails.order_id}
                                        </p>
                                    </div>
                                </Col>
                            </Row>

                            <Row>
                                <Col md={12}>
                                    <div className="table-responsive">
                                        <table className="table mt-4">
                                            <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th>Item</th>
                                                    <th>Description</th>
                                                    <th>Quantity</th>
                                                    <th>Unit Cost</th>
                                                    <th>Total</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {(invoiceDetails.items || []).map((item, idx) => {
                                                    return (
                                                        <tr key={idx}>
                                                            <td>{idx + 1}</td>
                                                            <td>{item.name}</td>
                                                            <td>{item.description}</td>
                                                            <td>{item.quantity}</td>
                                                            <td>{item.unit_cost}</td>
                                                            <td>{item.total}</td>
                                                        </tr>
                                                    );
                                                })}
                                            </tbody>
                                        </table>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col xl={6} xs={6} className="col-xl-6 col-6">
                                    <div className="clearfix mt-4">
                                        <h5 className="small text-dark fw-normal">PAYMENT TERMS AND POLICIES</h5>

                                        <small>
                                            All accounts are to be paid within 7 days from receipt of invoice. To be
                                            paid by cheque or credit card or direct payment online. If account is not
                                            paid within 7 days the credits details supplied as confirmation of work
                                            undertaken will be charged the agreed quoted fee noted above.
                                        </small>
                                    </div>
                                </Col>
                                <Col xs={6} xl={{ offset: 3, span: 3 }} className="col-xl-3 col-6 offset-xl-3">
                                    <p className="text-end">
                                        <b>Sub-total:</b> {invoiceDetails.sub_total}
                                    </p>
                                    <p className="text-end">Discout: {invoiceDetails.discount}%</p>
                                    <p className="text-end">VAT: {invoiceDetails.vat}%</p>
                                    <hr />
                                    <h3 className="text-end">USD {invoiceDetails.total}</h3>
                                </Col>
                            </Row>
                            <hr />
                            <div className="d-print-none">
                                <div className="float-end">
                                    <Link
                                        to="#"
                                        className="btn btn-dark waves-effect waves-light me-1"
                                        onClick={(e) => {
                                            window.print();
                                        }}
                                    >
                                        <i className="fa fa-print"></i>
                                    </Link>
                                    <Link to="#" className="btn btn-primary waves-effect waves-light">
                                        Submit
                                    </Link>
                                </div>
                                <div className="clearfix"></div>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
};

export default Invoice;
