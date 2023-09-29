import { Card, Dropdown, ProgressBar } from 'react-bootstrap';

const Progressbar = () => {
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
                <h4 className="header-title mt-0 mb-4">Progressbars</h4>

                <h5 className="mt-0">
                    iMacs <span className="text-primary float-end">80%</span>
                </h5>
                <ProgressBar className="progress-bar-alt-primary progress-sm mt-0 mb-3">
                    <ProgressBar variant="primary" now={80} className="progress-animated" />
                </ProgressBar>

                <h5 className="mt-0">
                    iBooks <span className="text-pink float-end">50%</span>
                </h5>
                <ProgressBar className="progress-bar-alt-pink progress-sm mt-0 mb-3">
                    <ProgressBar variant="pink" now={50} className="progress-animated" />
                </ProgressBar>

                <h5 className="mt-0">
                    iPhone 5s <span className="text-info float-end">70%</span>
                </h5>
                <ProgressBar className="progress-bar-alt-info progress-sm mt-0 mb-3">
                    <ProgressBar variant="info" now={70} className="progress-animated" />
                </ProgressBar>

                <h5 className="mt-0">
                    iPhone 6 <span className="text-warning float-end">65%</span>
                </h5>
                <ProgressBar className="progress-bar-alt-warning progress-sm mt-0 mb-3">
                    <ProgressBar variant="warning" now={65} className="progress-animated" />
                </ProgressBar>

                <h5 className="mt-0">
                    iPhone 4 <span className="text-danger float-end">65%</span>
                </h5>
                <ProgressBar className="progress-bar-alt-danger progress-sm mt-0 mb-3">
                    <ProgressBar variant="danger" now={65} className="progress-animated" />
                </ProgressBar>

                <h5 className="mt-0">
                    iPhone 6s <span className="text-success float-end">40%</span>
                </h5>
                <ProgressBar className="progress-bar-alt-success progress-sm mt-0 mb-3">
                    <ProgressBar variant="success" now={40} className="progress-animated" />
                </ProgressBar>
            </Card.Body>
        </Card>
    );
};

export default Progressbar;
