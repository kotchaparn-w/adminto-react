import { Card, Dropdown, Table } from 'react-bootstrap';

// data
import { records } from './data';

const StripedRowsTable = () => {
    return (
        <Card>
            <Card.Body>
                <Dropdown className="float-end" align="end">
                    <Dropdown.Toggle as="a" className="cursor-pointer card-drop">
                        <i className="mdi mdi-dots-vertical"></i>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item>Action</Dropdown.Item>
                        <Dropdown.Item>Anothther Action</Dropdown.Item>
                        <Dropdown.Item>Something Else</Dropdown.Item>
                        <Dropdown.Item>Separated link</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <h4 className="header-title">Striped Rows</h4>
                <p className="text-muted font-14 mb-4">
                    Add <code>striped</code> attribute to table
                </p>

                <div className="table-responsive">
                    <Table className="mb-0" striped>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Username</th>
                            </tr>
                        </thead>
                        <tbody>
                            {(records || []).map((record, index) => {
                                return (
                                    <tr key={index.toString()}>
                                        <th scope="row">{record.id}</th>
                                        <td>{record.firstName}</td>
                                        <td>{record.lastName}</td>
                                        <td>{record.userName}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </Table>
                </div>
            </Card.Body>
        </Card>
    );
};

export default StripedRowsTable;
